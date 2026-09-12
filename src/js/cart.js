// Contrôleur du Panier Latéral (Cart Drawer) et Cross-Selling
import { store } from './store.js';
import { products } from '../data/products.js';
import { getCartWhatsAppUrl } from './whatsapp.js';
import { openCheckoutModal } from './checkout.js';

export function initCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const openButtons = document.querySelectorAll('.cart-toggle-btn, [data-action="open-cart"]');
  const closeBtn = document.getElementById('cart-close-btn');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeCartDrawer());
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCartDrawer();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop?.classList.contains('is-open')) {
      closeCartDrawer();
    }
  });

  // Abonnement aux changements d'état
  store.subscribe(() => {
    renderCartContent();
    updateCartCountBadge();
  });

  renderCartContent();
  updateCartCountBadge();
}

export function openCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

export function closeCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

function updateCartCountBadge() {
  const totals = store.getCartTotals();
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(badge => {
    badge.textContent = totals.count;
    badge.style.display = totals.count > 0 ? 'flex' : 'none';
  });
}

export function renderCartContent() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotals = store.getCartTotals();
  const state = store.getState();
  const lang = state.lang;

  // Mise à jour de la jauge de livraison gratuite
  const freeShippingWrap = document.getElementById('cart-shipping-progress');
  if (freeShippingWrap) {
    if (cartTotals.count === 0) {
      freeShippingWrap.innerHTML = `
        <div class="shipping-progress-text">
          ${store.t('free_shipping_progress', { amount: state.freeShippingThreshold.toFixed(2) })}
        </div>
        <div class="shipping-progress-bar-bg">
          <div class="shipping-progress-fill" style="width: 0%"></div>
        </div>
      `;
    } else if (cartTotals.hasFreeShipping) {
      freeShippingWrap.innerHTML = `
        <div class="shipping-progress-text" style="color: var(--color-forest); font-weight: 800;">
          ${store.t('free_shipping_achieved')}
        </div>
        <div class="shipping-progress-bar-bg">
          <div class="shipping-progress-fill" style="width: 100%; background: #10B981;"></div>
        </div>
      `;
    } else {
      freeShippingWrap.innerHTML = `
        <div class="shipping-progress-text">
          ${store.t('free_shipping_progress', { amount: cartTotals.remainingForFreeShipping.toFixed(2) })}
        </div>
        <div class="shipping-progress-bar-bg">
          <div class="shipping-progress-fill" style="width: ${cartTotals.freeShippingPercentage}%"></div>
        </div>
      `;
    }
  }

  // Liste des articles
  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-view">
        <div class="empty-cart-icon">🛒</div>
        <h3>${store.t('cart_empty')}</h3>
        <p>${store.t('cart_empty_sub')}</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 1.5rem;" onclick="window.miamApp.navigate('shop'); window.miamApp.closeCart();">
          ${store.t('hero_cta_primary')}
        </button>
      </div>
    `;
    
    const cartFooter = document.getElementById('cart-footer-container');
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  const cartFooter = document.getElementById('cart-footer-container');
  if (cartFooter) cartFooter.style.display = 'flex';

  let itemsHtml = state.cart.map(item => {
    const itemName = lang === 'ht' ? (item.name_ht || item.name) : item.name;
    const variantName = item.variant ? (lang === 'ht' ? (item.variant.name_ht || item.variant.name) : item.variant.name) : '';
    const formatName = item.format ? item.format.name : '';
    const detailBadge = [formatName, variantName].filter(Boolean).join(' • ');

    return `
      <div class="cart-item-row" data-key="${item.key}">
        <img src="${item.image}" alt="${itemName}" class="cart-item-img" loading="lazy">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${itemName}</h4>
          ${detailBadge ? `<span class="cart-item-variant">${detailBadge}</span>` : ''}
          <div class="cart-item-qty-row">
            <div class="mini-qty-box">
              <button class="mini-qty-btn" onclick="window.miamApp.updateCartQty('${item.key}', ${item.quantity - 1})" aria-label="Diminuer">-</button>
              <span class="mini-qty-val">${item.quantity}</span>
              <button class="mini-qty-btn" onclick="window.miamApp.updateCartQty('${item.key}', ${item.quantity + 1})" aria-label="Augmenter">+</button>
            </div>
          </div>
        </div>
        <div class="cart-item-price-wrap">
          <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} €</span>
          <button class="cart-item-remove-btn" onclick="window.miamApp.removeFromCart('${item.key}')" title="Supprimer">
            Supprimer
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Suggestions Cross-Selling dans le panier
  const crossSellProduct = getSuggestedCrossSellProduct(state.cart);
  let crossSellHtml = '';
  if (crossSellProduct) {
    const crossName = lang === 'ht' ? (crossSellProduct.name_ht || crossSellProduct.name) : crossSellProduct.name;
    crossSellHtml = `
      <div class="cart-cross-sell">
        <div class="cross-sell-title">
          <span>✨</span> Complétez votre dégustation :
        </div>
        <div class="cross-sell-item">
          <div class="cross-sell-info">
            <img src="${crossSellProduct.images[0]}" alt="${crossName}" class="cross-sell-img">
            <div class="cross-sell-text">
              <h5>${crossName}</h5>
              <p>${crossSellProduct.price.toFixed(2)} €</p>
            </div>
          </div>
          <button class="btn btn-accent btn-sm" onclick="window.miamApp.addCrossSellToCart('${crossSellProduct.id}')">
            + Ajouter
          </button>
        </div>
      </div>
    `;
  }

  cartItemsContainer.innerHTML = itemsHtml + crossSellHtml;

  // Mise à jour des totaux dans le footer
  const subtotalElem = document.getElementById('cart-subtotal-val');
  if (subtotalElem) {
    subtotalElem.textContent = `${cartTotals.total.toFixed(2)} €`;
  }

  // Configuration du bouton WhatsApp du panier
  const whatsappCartBtn = document.getElementById('cart-whatsapp-checkout-btn');
  if (whatsappCartBtn) {
    whatsappCartBtn.href = getCartWhatsAppUrl(state.cart, cartTotals.total, lang);
  }

  const standardCheckoutBtn = document.getElementById('cart-standard-checkout-btn');
  if (standardCheckoutBtn) {
    standardCheckoutBtn.onclick = () => {
      closeCartDrawer();
      openCheckoutModal();
    };
  }
}

// Trouve intelligemment un produit complémentaire selon ce qui est déjà dans le panier
function getSuggestedCrossSellProduct(cartItems) {
  const productIdsInCart = cartItems.map(i => i.productId);
  
  // Si le panier a du mamba mais pas de cassave -> suggérer la Cassave
  if (productIdsInCart.some(id => id.includes('mamba')) && !productIdsInCart.includes('cassave-traditionnelle-artisanale')) {
    return products.find(p => p.id === 'cassave-traditionnelle-artisanale');
  }

  // Si le panier a de la cassave mais pas de mamba -> suggérer le Mamba
  if (productIdsInCart.includes('cassave-traditionnelle-artisanale') && !productIdsInCart.some(id => id.includes('mamba'))) {
    return products.find(p => p.id === 'mamba-traditionnel-16oz');
  }

  // Sinon suggérer le Chocolat Pays ou l'Épice Bon Savè Lakay
  return products.find(p => !productIdsInCart.includes(p.id) && (p.id === 'chocolat-cacao-haitien-baton' || p.id === 'bon-save-lakay-epices-completes'));
}
