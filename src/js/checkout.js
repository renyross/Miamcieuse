// Simulation de commande & modal de paiement sécurisé (Stripe & PayPal)
import { store } from './store.js';
import confetti from 'canvas-confetti';

export function openCheckoutModal() {
  const modalBackdrop = document.getElementById('checkout-modal-backdrop');
  if (!modalBackdrop) return;

  renderCheckoutContent();
  modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

export function closeCheckoutModal() {
  const modalBackdrop = document.getElementById('checkout-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

export function renderCheckoutContent() {
  const container = document.getElementById('checkout-modal-body');
  if (!container) return;

  const totals = store.getCartTotals();
  const state = store.getState();
  const lang = state.lang;

  if (state.cart.length === 0) {
    closeCheckoutModal();
    return;
  }

  container.innerHTML = `
    <div class="checkout-grid">
      <div class="checkout-form-col">
        <h2 style="font-size: 1.6rem; margin-bottom: 0.5rem;">Finaliser votre commande</h2>
        <p style="font-size: 0.92rem; margin-bottom: 1.5rem;">Paiement 100% sécurisé et livraison soignée sous 24-48h.</p>

        <form id="checkout-form" onsubmit="window.miamApp.handleCheckoutSubmit(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Prénom *</label>
              <input type="text" class="form-input" required placeholder="Jean">
            </div>
            <div class="form-group">
              <label class="form-label">Nom *</label>
              <input type="text" class="form-input" required placeholder="Dupont">
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Email de confirmation *</label>
              <input type="email" class="form-input" required placeholder="jean.dupont@email.com">
            </div>
            <div class="form-group">
              <label class="form-label">Téléphone / WhatsApp *</label>
              <input type="tel" class="form-input" required placeholder="+33 6 12 34 56 78">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Adresse de livraison complète *</label>
            <input type="text" class="form-input" required placeholder="12 rue de la Paix, Apt 4B">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Code Postal *</label>
              <input type="text" class="form-input" required placeholder="75001">
            </div>
            <div class="form-group">
              <label class="form-label">Ville *</label>
              <input type="text" class="form-input" required placeholder="Paris">
            </div>
            <div class="form-group">
              <label class="form-label">Pays *</label>
              <select class="form-select">
                <option value="FR">France 🇫🇷</option>
                <option value="HT">Haïti 🇭🇹</option>
                <option value="CA">Canada 🇨🇦</option>
                <option value="US">États-Unis 🇺🇸</option>
                <option value="BE">Belgique 🇧🇪</option>
                <option value="MQ">Martinique 🇲🇶</option>
                <option value="GP">Guadeloupe 🇬🇵</option>
              </select>
            </div>
          </div>

          <div style="margin: 1.5rem 0 1rem 0;">
            <label class="form-label">Mode de paiement sécurisé :</label>
            <div class="payment-method-selector">
              <div class="payment-method-card is-active" id="pay-method-card" onclick="window.miamApp.selectPaymentMethod('card')">
                <span style="font-size: 1.4rem;">💳</span>
                <span style="font-weight: 700; font-size: 0.9rem;">Carte Bancaire (Stripe)</span>
              </div>
              <div class="payment-method-card" id="pay-method-paypal" onclick="window.miamApp.selectPaymentMethod('paypal')">
                <span style="font-size: 1.4rem;">🅿️</span>
                <span style="font-weight: 700; font-size: 0.9rem;">PayPal Express</span>
              </div>
            </div>
          </div>

          <div id="card-fields-box">
            <div class="form-group">
              <label class="form-label">Numéro de carte</label>
              <input type="text" class="form-input" placeholder="4242 •••• •••• 4242" maxlength="19" required>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Expiration (MM/AA)</label>
                <input type="text" class="form-input" placeholder="12/28" maxlength="5" required>
              </div>
              <div class="form-group">
                <label class="form-label">CVC / Cryptogramme</label>
                <input type="text" class="form-input" placeholder="123" maxlength="4" required>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.5rem;">
            <button type="submit" class="btn btn-accent btn-lg btn-block" id="btn-submit-order">
              🔒 Payer ${totals.total.toFixed(2)} € en toute sécurité
            </button>
          </div>
        </form>
      </div>

      <div class="checkout-summary-col" style="background: var(--color-cream); padding: 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.25rem; margin-bottom: 1.25rem;">Récapitulatif de votre panier</h3>
        
        <div style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 220px; overflow-y: auto; margin-bottom: 1.5rem; padding-right: 0.5rem;">
          ${state.cart.map(item => `
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.92rem;">
              <span style="color: var(--color-forest); font-weight: 600;">${item.quantity}x ${lang === 'ht' ? (item.name_ht || item.name) : item.name}</span>
              <span style="font-weight: 700;">${(item.price * item.quantity).toFixed(2)} €</span>
            </div>
          `).join('')}
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.95rem;">
            <span>Sous-total</span>
            <span>${totals.subtotal.toFixed(2)} €</span>
          </div>
          ${totals.discount > 0 ? `
            <div style="display: flex; justify-content: space-between; font-size: 0.95rem; color: var(--color-pink); font-weight: 700;">
              <span>Réduction appliquée (${state.appliedPromoCode})</span>
              <span>- ${(totals.discount).toFixed(2)} €</span>
            </div>
          ` : ''}
          <div style="display: flex; justify-content: space-between; font-size: 0.95rem;">
            <span>Frais de livraison</span>
            <span style="font-weight: 700; color: ${totals.hasFreeShipping ? '#10B981' : 'inherit'}">
              ${totals.hasFreeShipping ? 'OFFERTE (0.00 €)' : '4.90 €'}
            </span>
          </div>
          <div style="border-top: 2px solid var(--border-color); padding-top: 0.85rem; margin-top: 0.5rem; display: flex; justify-content: space-between; font-size: 1.35rem; font-weight: 800; color: var(--color-forest);">
            <span>Total TTC</span>
            <span>${(totals.total + (totals.hasFreeShipping ? 0 : 4.90)).toFixed(2)} €</span>
          </div>
        </div>

        <!-- Code Promo -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed var(--border-color);">
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="promo-input" class="form-input" placeholder="Code promo (ex: MIAM10)" style="text-transform: uppercase;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="window.miamApp.applyPromo()">Appliquer</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function handleOrderSuccess() {
  const container = document.getElementById('checkout-modal-body');
  if (!container) return;

  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  const orderNumber = 'MIA-' + Math.floor(100000 + Math.random() * 900000);

  container.innerHTML = `
    <div style="text-align: center; padding: 3rem 1.5rem;">
      <div style="width: 80px; height: 80px; background: #10B981; color: #FFFFFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem auto; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);">
        ✓
      </div>
      <h2 style="font-size: 2rem; color: var(--color-forest); margin-bottom: 0.75rem;">Merci pour votre commande !</h2>
      <p style="font-size: 1.15rem; color: var(--color-gray-dark); margin-bottom: 1.5rem;">
        Votre commande <strong>#${orderNumber}</strong> a été validée avec succès.
      </p>
      <div style="background: var(--color-cream); padding: 1.5rem; border-radius: var(--radius-lg); max-width: 500px; margin: 0 auto 2rem auto; border: 1px solid var(--border-color); text-align: left;">
        <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">📦 <strong>Statut :</strong> En cours de préparation artisanale</p>
        <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">🚚 <strong>Délai estimé :</strong> 24h à 48h ouvrées</p>
        <p style="font-size: 0.95rem;">📩 Un email récapitulatif avec numéro de suivi vient de vous être envoyé.</p>
      </div>
      <button class="btn btn-primary btn-lg" onclick="window.miamApp.finishOrder()">
        Continuer mes achats
      </button>
    </div>
  `;

  store.clearCart();
}
