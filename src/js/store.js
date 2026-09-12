// Gestion de l'état global réactif de l'application Miam'cieuse
import { products } from '../data/products.js';
import { translations } from '../data/translations.js';

class Store {
  constructor() {
    this.state = {
      lang: localStorage.getItem('miamcieuse_lang') || 'fr',
      cart: JSON.parse(localStorage.getItem('miamcieuse_cart') || '[]'),
      activeRoute: 'home', // 'home', 'shop', 'product', 'packs', 'story', 'blog', 'article', 'faq', 'contact'
      currentProductId: null,
      currentArticleId: null,
      selectedCategory: 'all',
      searchQuery: '',
      priceFilter: 70,
      sortBy: 'popular',
      inStockOnly: false,
      bestsellerOnly: false,
      freeShippingThreshold: 45.00,
      appliedPromoCode: null,
      promoDiscount: 0
    };

    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  setLanguage(lang) {
    if (['fr', 'ht'].includes(lang)) {
      this.state.lang = lang;
      localStorage.setItem('miamcieuse_lang', lang);
      document.documentElement.lang = lang === 'ht' ? 'ht' : 'fr';
      this.notify();
    }
  }

  t(key, params = {}) {
    const lang = this.state.lang;
    let text = translations[lang]?.[key] || translations['fr']?.[key] || key;
    Object.keys(params).forEach(p => {
      text = text.replace(new RegExp(`{${p}}`, 'g'), params[p]);
    });
    return text;
  }

  // Cart operations
  addToCart(productId, formatId = null, variantId = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedFormat = formatId
      ? product.formats?.find(f => f.id === formatId) || product.formats?.[0]
      : product.formats?.[0];

    const selectedVariant = variantId
      ? product.variants?.find(v => v.id === variantId) || product.variants?.[0]
      : product.variants?.[0];

    const price = selectedFormat ? selectedFormat.price : product.price;
    const itemKey = `${productId}_${selectedFormat?.id || 'def'}_${selectedVariant?.id || 'def'}`;

    const existingIndex = this.state.cart.findIndex(item => item.key === itemKey);

    if (existingIndex > -1) {
      this.state.cart[existingIndex].quantity += quantity;
    } else {
      this.state.cart.push({
        key: itemKey,
        productId: product.id,
        name: product.name,
        name_ht: product.name_ht,
        price: price,
        image: product.images[0],
        format: selectedFormat ? { id: selectedFormat.id, name: selectedFormat.name } : null,
        variant: selectedVariant ? { id: selectedVariant.id, name: selectedVariant.name, name_ht: selectedVariant.name_ht } : null,
        quantity: quantity
      });
    }

    this.saveCart();
    this.notify();
    return product;
  }

  updateCartQuantity(itemKey, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(itemKey);
      return;
    }
    const item = this.state.cart.find(i => i.key === itemKey);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.notify();
    }
  }

  removeFromCart(itemKey) {
    this.state.cart = this.state.cart.filter(i => i.key !== itemKey);
    this.saveCart();
    this.notify();
  }

  clearCart() {
    this.state.cart = [];
    this.state.appliedPromoCode = null;
    this.state.promoDiscount = 0;
    this.saveCart();
    this.notify();
  }

  saveCart() {
    localStorage.setItem('miamcieuse_cart', JSON.stringify(this.state.cart));
  }

  getCartTotals() {
    const subtotal = this.state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const discount = (subtotal * this.state.promoDiscount);
    const totalAfterDiscount = Math.max(0, subtotal - discount);
    const remainingForFreeShipping = Math.max(0, this.state.freeShippingThreshold - totalAfterDiscount);
    const hasFreeShipping = totalAfterDiscount >= this.state.freeShippingThreshold;

    return {
      subtotal,
      count,
      discount,
      total: totalAfterDiscount,
      remainingForFreeShipping,
      hasFreeShipping,
      freeShippingPercentage: Math.min(100, Math.round((totalAfterDiscount / this.state.freeShippingThreshold) * 100))
    };
  }

  applyPromoCode(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (cleanCode === 'MIAM10' || cleanCode === 'LAKAY10') {
      this.state.appliedPromoCode = cleanCode;
      this.state.promoDiscount = 0.10; // 10% de réduction
      this.notify();
      return { success: true, message: 'Code promo -10% appliqué avec succès !' };
    } else if (cleanCode === 'MAMBALOVER') {
      this.state.appliedPromoCode = cleanCode;
      this.state.promoDiscount = 0.15; // 15% de réduction
      this.notify();
      return { success: true, message: 'Code promo Mamba Lover -15% appliqué !' };
    }
    return { success: false, message: 'Code promo invalide.' };
  }

  // Routing navigation
  navigate(route, params = {}) {
    this.state.activeRoute = route;
    if (params.productId) this.state.currentProductId = params.productId;
    if (params.articleId) this.state.currentArticleId = params.articleId;
    if (params.category) this.state.selectedCategory = params.category;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.notify();
  }
}

export const store = new Store();
