// Application Principale MIAM'CIEUSE — Point d'entrée et orchestration
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/sections.css';
import '../styles/shop.css';
import '../styles/product-detail.css';
import '../styles/cart.css';
import '../styles/blog.css';
import '../styles/responsive.css';

import { store } from './store.js';
import { products } from '../data/products.js';
import { initCartDrawer, openCartDrawer, closeCartDrawer } from './cart.js';
import { renderApp } from './router.js';
import { openCheckoutModal, closeCheckoutModal, handleOrderSuccess } from './checkout.js';
import { getGeneralWhatsAppUrl } from './whatsapp.js';

// Système de Toast Notifications
export function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="font-size: 1.25rem;">${type === 'success' ? '✅' : 'ℹ️'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Quick View Modal
export function openQuickViewModal(productId) {
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  const modalContent = document.getElementById('quickview-modal-content');
  const product = products.find(p => p.id === productId);
  if (!modalBackdrop || !modalContent || !product) return;

  const lang = store.getState().lang;
  const name = lang === 'ht' ? (product.name_ht || product.name) : product.name;
  const subtitle = lang === 'ht' ? (product.subtitle_ht || product.subtitle) : product.subtitle;
  const desc = lang === 'ht' ? (product.description_ht || product.description) : product.description;

  modalContent.innerHTML = `
    <button class="modal-close-btn" onclick="window.miamApp.closeQuickView()" aria-label="Fermer">✕</button>
    <div style="padding: 2.5rem; display: grid; grid-template-columns: 1fr 1.1fr; gap: 2.5rem;">
      <div style="border-radius: var(--radius-lg); overflow: hidden; background: #f7efe6; aspect-ratio: 1/1;">
        <img src="${product.images[0]}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <span class="badge badge-pink" style="margin-bottom: 0.75rem;">${product.badge || 'Spécialité'}</span>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.35rem;">${name}</h2>
        <p style="color: var(--color-cacao); font-weight: 700; margin-bottom: 1rem;">${subtitle}</p>
        
        <div class="rating-stars" style="margin-bottom: 1rem;">★★★★★ <span style="color: var(--color-forest); font-weight: 700;">${product.rating}</span></div>
        
        <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-forest); font-family: var(--font-serif); margin-bottom: 1.25rem;">
          ${product.price.toFixed(2)} €
        </div>

        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1.75rem;">
          ${desc}
        </p>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-primary btn-lg" onclick="window.miamApp.addProductDirectly('${product.id}'); window.miamApp.closeQuickView();">
            <span>🛒</span> ${store.t('add_to_cart')}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.miamApp.viewProduct('${product.id}'); window.miamApp.closeQuickView();">
            Fiche complète →
          </button>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

export function closeQuickViewModal() {
  const modalBackdrop = document.getElementById('quickview-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// Mobile Menu Drawer
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('hero-menu-toggle-btn') || document.getElementById('mobile-menu-btn');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-nav-close-btn');

  const closeMenu = () => {
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuBtn && mobileBackdrop) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', (e) => {
      if (e.target === mobileBackdrop) closeMenu();
    });

    document.querySelectorAll('.mobile-nav-item:not(.menu-dropdown-toggle)').forEach(item => {
      item.addEventListener('click', () => closeMenu());
    });
  }
}

// Sticky Header on Scroll
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

// Initialisation de l'API globale pour les interactions utilisateur
window.miamApp = {
  navigate: (route, params) => store.navigate(route, params),
  
  viewProduct: (productId) => store.navigate('product', { productId }),
  
  openQuickProduct: (productId) => openQuickViewModal(productId),
  
  closeQuickView: () => closeQuickViewModal(),
  
  viewArticle: (articleId) => store.navigate('article', { articleId }),
  
  filterByCategory: (catId) => {
    store.state.selectedCategory = catId;
    store.navigate('shop', { category: catId });
  },

  setSortBy: (sortBy) => {
    store.state.sortBy = sortBy;
    store.notify();
  },

  setPriceFilter: (price) => {
    store.state.priceFilter = parseFloat(price);
    store.notify();
  },

  toggleInStockOnly: (checked) => {
    store.state.inStockOnly = checked;
    store.notify();
  },

  toggleBestsellerOnly: (checked) => {
    store.state.bestsellerOnly = checked;
    store.notify();
  },

  resetShopFilters: () => {
    store.state.selectedCategory = 'all';
    store.state.searchQuery = '';
    store.state.priceFilter = 70;
    store.state.inStockOnly = false;
    store.state.bestsellerOnly = false;
    store.state.sortBy = 'popular';
    store.notify();
  },

  addProductDirectly: (productId) => {
    const product = store.addToCart(productId, null, null, 1);
    if (product) {
      showToast(`« ${product.name} » ajouté au panier ! 🥜`);
      openCartDrawer();
    }
  },

  addCrossSellToCart: (productId) => {
    const product = store.addToCart(productId, null, null, 1);
    if (product) {
      showToast(`« ${product.name} » ajouté ! ✨`);
    }
  },

  updateCartQty: (key, qty) => store.updateCartQuantity(key, qty),

  removeFromCart: (key) => {
    store.removeFromCart(key);
    showToast('Article retiré du panier');
  },

  closeCart: () => closeCartDrawer(),

  // Fiche Produit Interactive
  switchDetailImage: (src, btnElem) => {
    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.thumbnail-btn').forEach(b => b.classList.remove('is-active'));
    btnElem?.classList.add('is-active');
  },

  selectProductFormat: (formatId, price, chipElem) => {
    if (!window.currentProductState) return;
    window.currentProductState.selectedFormatId = formatId;
    
    document.querySelectorAll('[data-format-id]').forEach(c => c.classList.remove('is-selected'));
    chipElem?.classList.add('is-selected');

    const priceDisplay = document.getElementById('detail-price-display');
    const stickyPriceDisplay = document.getElementById('sticky-price-display');
    if (priceDisplay) priceDisplay.textContent = `${price.toFixed(2)} €`;
    if (stickyPriceDisplay) stickyPriceDisplay.textContent = `${price.toFixed(2)} €`;
  },

  selectProductVariant: (variantId, chipElem) => {
    if (!window.currentProductState) return;
    window.currentProductState.selectedVariantId = variantId;

    document.querySelectorAll('[data-variant-id]').forEach(c => c.classList.remove('is-selected'));
    chipElem?.classList.add('is-selected');
  },

  adjustDetailQty: (delta) => {
    if (!window.currentProductState) return;
    window.currentProductState.quantity = Math.max(1, window.currentProductState.quantity + delta);
    const qtyDisplay = document.getElementById('detail-qty-display');
    if (qtyDisplay) qtyDisplay.textContent = window.currentProductState.quantity;
  },

  addDetailProductToCart: (productId) => {
    const state = window.currentProductState || { selectedFormatId: null, selectedVariantId: null, quantity: 1 };
    const product = store.addToCart(productId, state.selectedFormatId, state.selectedVariantId, state.quantity);
    if (product) {
      showToast(`« ${product.name} » ajouté au panier ! 🥜`);
      openCartDrawer();
    }
  },

  switchTab: (tabId, btnElem) => {
    document.querySelectorAll('.tab-nav-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('is-active'));
    
    btnElem?.classList.add('is-active');
    document.getElementById(`tab-panel-${tabId}`)?.classList.add('is-active');
  },

  // Langue
  switchLang: (lang) => {
    store.setLanguage(lang);
    showToast(lang === 'ht' ? 'Lang chanje an Kreyòl Ayisyen 🇭🇹' : 'Langue changée en Français 🇫🇷', 'info');
  },

  // Checkout
  selectPaymentMethod: (method) => {
    const cardOption = document.getElementById('pay-method-card');
    const paypalOption = document.getElementById('pay-method-paypal');
    const cardFields = document.getElementById('card-fields-box');
    const submitBtn = document.getElementById('btn-submit-order');

    if (method === 'card') {
      cardOption?.classList.add('is-active');
      paypalOption?.classList.remove('is-active');
      if (cardFields) cardFields.style.display = 'block';
      if (submitBtn) submitBtn.innerHTML = `🔒 Payer en toute sécurité`;
    } else {
      paypalOption?.classList.add('is-active');
      cardOption?.classList.remove('is-active');
      if (cardFields) cardFields.style.display = 'none';
      if (submitBtn) submitBtn.innerHTML = `🅿️ Continuer avec PayPal Express`;
    }
  },

  applyPromo: () => {
    const input = document.getElementById('promo-input');
    if (!input) return;
    const res = store.applyPromoCode(input.value);
    showToast(res.message, res.success ? 'success' : 'info');
  },

  handleCheckoutSubmit: (e) => {
    e.preventDefault();
    handleOrderSuccess();
  },

  finishOrder: () => {
    closeCheckoutModal();
    store.navigate('home');
  },

  handleNewsletter: (e) => {
    e.preventDefault();
    showToast('🎉 Félicitations ! Votre bon de réduction de -10% (MIAM10) vous a été envoyé par email.', 'success');
    e.target.reset();
  },

  handleContactSubmit: (e) => {
    e.preventDefault();
    showToast('✉️ Votre message a été envoyé ! Notre équipe vous répond sous 24h.', 'success');
    e.target.reset();
  },

  setHeroSlide: (index) => {
    const slides = document.querySelectorAll('#hero-banner-slider .hero-slide');
    const dots = document.querySelectorAll('#hero-banner-slider .hero-dot');
    if (!slides.length) return;
    const nextIdx = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      if (idx === nextIdx) {
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
      }
    });
    dots.forEach((dot, idx) => {
      if (idx === nextIdx) {
        dot.classList.add('is-active');
      } else {
        dot.classList.remove('is-active');
      }
    });
  },

  nextHeroSlide: () => {
    const slides = document.querySelectorAll('#hero-banner-slider .hero-slide');
    if (!slides.length) return;
    let currentIdx = 0;
    slides.forEach((slide, idx) => {
      if (slide.classList.contains('is-active')) currentIdx = idx;
    });
    window.miamApp.setHeroSlide(currentIdx + 1);
  },

  prevHeroSlide: () => {
    const slides = document.querySelectorAll('#hero-banner-slider .hero-slide');
    if (!slides.length) return;
    let currentIdx = 0;
    slides.forEach((slide, idx) => {
      if (slide.classList.contains('is-active')) currentIdx = idx;
    });
    window.miamApp.setHeroSlide(currentIdx - 1);
  }
};

let heroSliderTimer = null;
export function initHeroSlider() {
  if (heroSliderTimer) {
    clearInterval(heroSliderTimer);
    heroSliderTimer = null;
  }
  const slider = document.getElementById('hero-banner-slider');
  if (!slider) return;

  heroSliderTimer = setInterval(() => {
    if (window.miamApp && window.miamApp.nextHeroSlide) {
      window.miamApp.nextHeroSlide();
    }
  }, 5000);

  slider.onmouseenter = () => {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
  };
  slider.onmouseleave = () => {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
    heroSliderTimer = setInterval(() => {
      if (window.miamApp && window.miamApp.nextHeroSlide) {
        window.miamApp.nextHeroSlide();
      }
    }, 5000);
  };
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initHeroSlider();
  initCartDrawer();
  initMobileMenu();
  initStickyHeader();

  // Navigation par attributs data-route
  document.addEventListener('click', (e) => {
    const routeTrigger = e.target.closest('[data-route]');
    if (routeTrigger) {
      e.preventDefault();
      const route = routeTrigger.getAttribute('data-route');
      store.navigate(route);
    }
  });

  // Abonnement aux changements d'état pour re-render l'app et les textes
  store.subscribe(() => {
    renderApp();
    initHeroSlider();
    updateLangButtons();
    updateFloatingWhatsApp();
  });

  updateLangButtons();
  updateFloatingWhatsApp();
});

function updateLangButtons() {
  const currentLang = store.getState().lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === currentLang) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });
}

function updateFloatingWhatsApp() {
  const btn = document.getElementById('floating-whatsapp-btn');
  if (btn) {
    btn.href = getGeneralWhatsAppUrl(store.getState().lang);
  }
}
