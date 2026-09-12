// Routeur et Moteur de Rendu des Vues de l'Application Miam'cieuse (Style Moderne Inspiré du Mockup)
import { store } from './store.js';
import { products, categories } from '../data/products.js';
import { articles } from '../data/recipes.js';
import { faqCategories, faqItems } from '../data/faq.js';
import { testimonials } from '../data/testimonials.js';
import { getProductWhatsAppUrl, getGeneralWhatsAppUrl } from './whatsapp.js';

export function renderApp() {
  const mainContainer = document.getElementById('main-content');
  if (!mainContainer) return;

  const state = store.getState();
  const route = state.activeRoute;

  // Mise à jour de l'état actif des liens de navigation
  document.querySelectorAll('.nav-link, .mobile-nav-item').forEach(link => {
    const targetRoute = link.getAttribute('data-route');
    if (targetRoute === route) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });

  switch (route) {
    case 'shop':
      mainContainer.innerHTML = renderShopView();
      initShopEventListeners();
      break;
    case 'product':
      mainContainer.innerHTML = renderProductDetailView(state.currentProductId);
      initProductDetailListeners(state.currentProductId);
      break;
    case 'packs':
      mainContainer.innerHTML = renderPacksView();
      break;
    case 'story':
      mainContainer.innerHTML = renderStoryView();
      break;
    case 'blog':
      mainContainer.innerHTML = renderBlogView();
      break;
    case 'article':
      mainContainer.innerHTML = renderArticleView(state.currentArticleId);
      break;
    case 'faq':
      mainContainer.innerHTML = renderFaqView();
      initFaqListeners();
      break;
    case 'contact':
      mainContainer.innerHTML = renderContactView();
      break;
    case 'home':
    default:
      mainContainer.innerHTML = renderHomeView();
      break;
  }

  if (route === 'product') {
    document.body.classList.add('has-active-product');
  } else {
    document.body.classList.remove('has-active-product');
  }
}

// =========================================================================
// 1. PAGE D'ACCUEIL STYLE MODERNE FOOD UI
// =========================================================================
function renderHomeView() {
  const state = store.getState();
  const lang = state.lang;
  const popular6Products = ['mamba-traditionnel-16oz', 'cassave-traditionnelle-artisanale', 'chocolat-cacao-haitien-baton', 'akasan-traditionnel-haitien', 'cham-cham-artisanal-gourmand', 'comparette-artisanale-jeremie'].map(id => products.find(product => product.id === id)).filter(Boolean);
  const packs = products.filter(p => p.category === 'packs');

  return `
    <!-- SECTION 1 — HERO STYLE FOOD APP (CONFORME À LA CAPTURE FOURNIE) -->
    <section class="hero-app-section">
      <div class="hero-app-container">
        <!-- 1. Top App Bar (Menu | Logo Salutation | Notif & Panier) -->
        <div class="hero-app-bar">
          <button class="hero-square-icon-btn" id="hero-menu-toggle-btn" onclick="window.miamApp.openMobileMenu()" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          <div class="hero-app-greeting">
            <span class="greeting-subtitle">${lang === 'ht' ? 'Bonjou, Miam Lover! 👋' : 'Hello, Miam Lover! 👋'}</span>
            <h1 class="greeting-brand"><a href="/" onclick="window.miamApp.handleLogoClick(event)" title="Miam’cieuse — Accueil" style="display:inline-block; text-decoration:none;"><img class="site-brand-logo" src="./images/logo-miamcieuse-horizontal.png" alt="Miam’cieuse" width="2172" height="724"></a></h1>
            <span class="greeting-slogan">Le goût de la pure satisfaction.</span>
          </div>

          <div class="hero-app-actions">
            <button class="hero-square-icon-btn with-badge" onclick="alert('🎉 Code promo MIAM10 : -10% de réduction immédiate !')" aria-label="Notifications" title="Offres & Nouveautés">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span class="hero-badge-count">3</span>
            </button>
            <button class="hero-square-icon-btn with-badge" onclick="window.miamApp.openCart()" aria-label="Panier" title="Mon Panier">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              <span class="hero-badge-count cart-count-badge" id="hero-badge-cart-qty">0</span>
            </button>
          </div>
        </div>

        <!-- 2. Rangée Recherche & Filtre -->
        <div class="hero-search-row">
          <div class="hero-search-input-wrap">
            <svg class="hero-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" class="hero-search-input" placeholder="${lang === 'ht' ? 'Chèche bon Mamba, Kasav ou Akasan...' : 'Rechercher votre délice haïtien préféré...'}" id="hero-app-search" onfocus="window.miamApp.navigate('shop')">
          </div>
          <button class="hero-square-icon-btn hero-filter-btn" id="hero-filter-trigger-btn" onclick="window.miamApp.openFilterModal()" aria-label="Filtres" title="Filtrer les spécialités">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"></line><circle cx="9" cy="8" r="2.5" fill="#fff"></circle><line x1="4" y1="16" x2="20" y2="16"></line><circle cx="15" cy="16" r="2.5" fill="#fff"></circle></svg>
            <span class="hero-filter-badge" id="hero-filter-badge" style="display: none;">0</span>
          </button>
        </div>

        <!-- 3. Grande Bannière Pleine Largeur avec Images Étirées & Texte Au-dessus -->
        <div class="hero-banner-card" id="hero-banner-slider">
          <div class="hero-slides-track">

            <!-- Slide 1 : Mamba Authentique (Image 1 de l'utilisateur) -->
            <div class="hero-slide is-active" data-slide="0">
              <img src="./images/hero-slide-1.jpg" alt="Mamba Authentique Miam'cieuse" class="hero-slide-bg">
              <div class="hero-slide-overlay"></div>
              <div class="hero-slide-content">
                <span class="hero-banner-tag">${lang === 'ht' ? 'ÒF ESPESYAL' : 'OFFRE DU MOMENT'}</span>
                <h2 class="hero-banner-headline">
                  ${lang === 'ht' 
                    ? 'KROUSTIYAN.<br>BON GOU.<br>IRÉZISTIB.' 
                    : 'CROUSTILLANT.<br>SAVOUREUX.<br>IRRÉSISTIBLE.'}
                </h2>
                <p class="hero-banner-subtext">
                  ${lang === 'ht'
                    ? '100% Natif Natal Dayiti.<br>Mamba atizanal fèt ak pistach griye fre.'
                    : '100% Saveurs Authentiques d\'Haïti.<br>Mamba artisanal fait maison aux arachides fraîches grillées.'}
                </p>
                <button class="hero-order-now-btn" onclick="window.miamApp.navigate('shop')">
                  <span>${lang === 'ht' ? 'Kòmande Kounye a' : 'Commander Maintenant'}</span>
                  <span class="order-arrow-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </button>
              </div>
            </div>

            <!-- Slide 2 : Kasav Croustillante & Mamba (Image 2 de l'utilisateur) -->
            <div class="hero-slide" data-slide="1">
              <img src="./images/hero-slide-2.jpg" alt="Kasav artisanale garnie de Mamba" class="hero-slide-bg">
              <div class="hero-slide-overlay"></div>
              <div class="hero-slide-content">
                <span class="hero-banner-tag">${lang === 'ht' ? 'TRADISYON LAKAY' : 'TRADITION GOURMANDE'}</span>
                <h2 class="hero-banner-headline">
                  ${lang === 'ht'
                    ? 'KASAV CHO &<br>MAMBA KREMYE.'
                    : 'KASAV CHAUDE &<br>MAMBA ONCTUEUX.'}
                </h2>
                <p class="hero-banner-subtext">
                  ${lang === 'ht'
                    ? 'Gou natif natal peyi d Ayiti.<br>Yon galèt kroustiyan plen ak bon mamaba dous oubyen piman.'
                    : 'L\'alliance parfaite du terroir haïtien.<br>Une galette de manioc dorée et une pâte d\'arachide fondante.'}
                </p>
                <button class="hero-order-now-btn" onclick="window.miamApp.navigate('shop')">
                  <span>${lang === 'ht' ? 'Dekouvri Kasav yo' : 'Découvrir nos Kasav'}</span>
                  <span class="order-arrow-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </button>
              </div>
            </div>

            <!-- Slide 3 : Chocolat Pur Cacao (Image 3 de l'utilisateur) -->
            <div class="hero-slide" data-slide="2">
              <img src="./images/hero-slide-3.jpg" alt="Chocolat Pur Cacao d'Haïti" class="hero-slide-bg">
              <div class="hero-slide-overlay"></div>
              <div class="hero-slide-content">
                <span class="hero-banner-tag">${lang === 'ht' ? 'TÈWWA ESPESYAL' : 'TERROIR D\'EXCEPTION'}</span>
                <h2 class="hero-banner-headline">
                  ${lang === 'ht'
                    ? 'CHOKOLA NWA<br>PI KAKAO DAYITI.'
                    : 'CHOCOLAT NOIR<br>PUR CACAO D\'HAÏTI.'}
                </h2>
                <p class="hero-banner-subtext">
                  ${lang === 'ht'
                    ? 'Grenn kakao chwazi nan pi bon plantasyon Grandans.<br>100% Natirèl, bon sant ak fòs pou kò a.'
                    : 'Fèves d\'excellence sélectionnées dans les plantations de Grand\'Anse.<br>100% Naturel, arômes intenses et bienfaits ancestraux.'}
                </p>
                <button class="hero-order-now-btn" onclick="window.miamApp.navigate('shop')">
                  <span>${lang === 'ht' ? 'Goute Chokola a' : 'Savourer le Chocolat'}</span>
                  <span class="order-arrow-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </button>
              </div>
            </div>

          </div>

          <!-- Flèches de Défilement Discrètes -->
          <button class="hero-slide-arrow hero-arrow-prev" onclick="window.miamApp.prevHeroSlide()" aria-label="Image précédente">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button class="hero-slide-arrow hero-arrow-next" onclick="window.miamApp.nextHeroSlide()" aria-label="Image suivante">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <!-- Indicateurs Carrousel (3 Dots) -->
          <div class="hero-dots-row">
            <button class="hero-dot is-active" onclick="window.miamApp.setHeroSlide(0)" aria-label="Slide 1"></button>
            <button class="hero-dot" onclick="window.miamApp.setHeroSlide(1)" aria-label="Slide 2"></button>
            <button class="hero-dot" onclick="window.miamApp.setHeroSlide(2)" aria-label="Slide 3"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — SÉLECTEUR DE CATÉGORIES CIRCULAIRES (STYLE EXACT DE L'IMAGE 2) -->
    <section class="category-circles-section">
      <div class="category-circles-container">
        <div class="category-circles-scroll">
          <!-- Item 1 : Tous -->
          <button class="category-circle-item is-active" onclick="window.miamApp.filterCategory('all', this)" aria-label="Tous">
            <div class="category-circle-bubble">
              <img src="./images/hero-feast.jpg" alt="Tous">
            </div>
            <span class="category-circle-label">${lang === 'ht' ? 'Tout' : 'Tous'}</span>
          </button>

          <!-- Item 2 : Mamba -->
          <button class="category-circle-item" onclick="window.miamApp.filterCategory('mamba', this)" aria-label="Mamba">
            <div class="category-circle-bubble">
              <img src="./images/product-mamba-pot.png" alt="Mamba">
            </div>
            <span class="category-circle-label">Mamba</span>
          </button>

          <!-- Item 3 : Cassave -->
          <button class="category-circle-item" onclick="window.miamApp.filterCategory('cassave', this)" aria-label="Cassave">
            <div class="category-circle-bubble">
              <img src="./images/product-cassave-mamba.png" alt="Cassave">
            </div>
            <span class="category-circle-label">${lang === 'ht' ? 'Kasav' : 'Cassave'}</span>
          </button>

          <!-- Item 4 : Chocolat -->
          <button class="category-circle-item" onclick="window.miamApp.filterCategory('chocolat', this)" aria-label="Chocolat">
            <div class="category-circle-bubble">
              <img src="./images/product-chocolat-cacao.png" alt="Chocolat">
            </div>
            <span class="category-circle-label">${lang === 'ht' ? 'Chokola' : 'Chocolat'}</span>
          </button>

          <!-- Item 5 : Akasan -->
          <button class="category-circle-item" onclick="window.miamApp.filterCategory('akasan', this)" aria-label="Akasan">
            <div class="category-circle-bubble">
              <img src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=200&q=80" alt="Akasan">
            </div>
            <span class="category-circle-label">Akasan</span>
          </button>

          <!-- Item 6 : Biscuits & Snacks -->
          <button class="category-circle-item" onclick="window.miamApp.filterCategory('biscuits', this)" aria-label="Biscuits">
            <div class="category-circle-bubble">
              <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=200&q=80" alt="Biscuits">
            </div>
            <span class="category-circle-label">${lang === 'ht' ? 'Biskwit' : 'Biscuits'}</span>
          </button>

          <!-- Item 7 : Packs -->
          <button class="category-circle-item" onclick="window.miamApp.filterCategory('packs', this)" aria-label="Packs">
            <div class="category-circle-bubble">
              <img src="https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=200&q=80" alt="Packs">
            </div>
            <span class="category-circle-label">Packs</span>
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — NOS MEILLEURS PRODUITS (POPULAR ITEMS — STYLE DE L'IMAGE) -->
    <section class="popular-items-section" id="best-products-anchor">
      <div class="container">
        <div class="popular-header-bar">
          <div class="popular-header-left">
            <h2 class="popular-title">${lang === 'ht' ? 'Pi Bon Pwodui Yo' : 'Nos Meilleurs Produits'}</h2>
          </div>
          <a href="#best-products-anchor" class="popular-view-all" onclick="window.miamApp.navigate('shop')">
            ${lang === 'ht' ? 'Wè tout' : 'Voir tout'} <span class="popular-arrow">→</span>
          </a>
        </div>

        <div class="popular-items-grid">
          ${popular6Products.map((product) => renderPopularItemCard(product, lang)).join('')}
        </div>
      </div>
    </section>

    <!-- Offre découverte -->
    <section class="home-offer-section" aria-label="Pack Découverte">
      <div class="container">
        <div class="home-offer-banner">
          <img class="home-offer-photo" src="./images/hero-slide-2.jpg" alt="Cassave et mamba artisanaux" loading="lazy">
          <div class="home-offer-content">
            <span class="home-offer-eyebrow">LE PLAISIR DE DÉCOUVRIR</span>
            <h2>Un pack, plein de saveurs.</h2>
            <p>Découvrez nos incontournables haïtiens.</p>
            <button class="home-offer-button" onclick="window.miamApp.viewProduct('pack-decouverte-saveurs')">Découvrir le pack <span aria-hidden="true">→</span></button>
          </div>
          <div class="home-offer-price"><strong>29,90 €</strong><span>LE PACK</span></div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — OUR STORIES HAVE ADVENTURES (STORYTELLING & 3 STAT BOXES) -->
    <section class="story-adventure-section">
      <div class="container">
        <div class="story-adventure-grid">
          <!-- Visuel Découpé à Gauche -->
          <div class="story-cutout-wrap">
            <div class="story-shape-card">
              <img src="./images/story-portrait.png" alt="Portrait — Miam'cieuse" class="story-person-img" loading="lazy" width="1122" height="1402">
            </div>

            <div class="story-floating-stat stat-top">
              <span>🥜</span>
              <span>100% Artisanal</span>
            </div>

            <div class="story-floating-stat stat-bottom">
              <span>❤️</span>
              <span>5 000+ Clients Comblés</span>
            </div>
          </div>

          <!-- Texte & 3 Compteurs Statistiques à Droite -->
          <div class="story-adventure-text">
            <h5>${lang === 'ht' ? 'Eksperyans Nou' : 'Notre Expérience'}</h5>
            <h2 class="story-adventure-title">
              ${lang === 'ht' 
                ? 'Yon <span>Istwa</span> Ki Gen <span>Karakter</span>' 
                : 'Une <span>Histoire</span> Qui a du <span>Caractère</span>'}
            </h2>
            <p class="story-adventure-desc">
              ${lang === 'ht'
                ? 'Nou chwazi pi bon pistach ak manyòk nan peyi Dayiti pou pote nan chak bokal ak chak sachè vrè gou anfans nou, tout pandan n ap ofri yon bèl eksperyans modèn.'
                : 'Chez Miam\'cieuse, nous sublimons les recettes transmises par nos aînés : le Mamba torréfié au feu doux, la cassave dorée sur platine et le cacao pur de la Grand\'Anse. Une véritable aventure gustative qui relie tradition et modernité.'}
            </p>

            <div class="stats-counter-row">
              <div class="stat-box-modern">
                <div class="stat-number" data-counter="15" data-suffix="k+">15k+</div>
                <div class="stat-label">${lang === 'ht' ? 'Kòmand Livre' : 'Commandes Livrées'}</div>
              </div>

              <div class="stat-box-modern">
                <div class="stat-number" data-counter="100" data-suffix="%">100%</div>
                <div class="stat-label">${lang === 'ht' ? 'Natif Natal' : 'Goût Authentique'}</div>
              </div>

              <div class="stat-box-modern">
                <div class="stat-number" data-counter="4.9" data-suffix="/5" data-decimals="1">4.9/5</div>
                <div class="stat-label">${lang === 'ht' ? 'Avis Kliyan' : 'Avis Positifs'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — PACKS & OFFRES GOURMANDES -->
    <section class="section-padding home-packs-section">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-title-clean">
            <span>${lang === 'ht' ? 'Pak Gouman' : 'Packs & Assortiments'}</span> ${lang === 'ht' ? 'Popilè' : 'Populaires'}
          </h2>
          <a href="#" class="view-all-link" onclick="window.miamApp.navigate('packs')">
            ${lang === 'ht' ? 'TOUT PAK YO' : 'TOUS LES PACKS'} <span>›</span>
          </a>
        </div>

        <div class="best-products-grid home-packs-grid">
          ${packs.map(pack => renderPackCard(pack, lang)).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 6 — NEWSLETTER CLUB -->
    <section class="section-padding home-club-section">
      <div class="container">
        <div class="newsletter-card" style="border-radius: var(--radius-xl);">
          <span class="badge badge-pink" style="margin-bottom: 1rem;">Club Miam'cieuse</span>
          <h2>${store.t('news_title')}</h2>
          <p>${store.t('news_subtitle')}</p>
          
          <form class="newsletter-form" onsubmit="window.miamApp.handleNewsletter(event)">
            <input type="email" class="newsletter-input" aria-label="Adresse e-mail" autocomplete="email" required placeholder="${store.t('news_placeholder')}">
            <button type="submit" class="btn btn-primary btn-lg">
              ${store.t('news_btn')}
            </button>
          </form>

          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.7);">
            🔒 ${store.t('news_privacy')}
          </span>
        </div>
      </div>
    </section>
  `;
}

// Fonction de rendu des cartes pastel modernes (Comme dans la capture Khadya)
function renderModernPastelProductCard(product, index, lang) {
  const name = lang === 'ht' ? (product.name_ht || product.name) : product.name;
  const subtitle = lang === 'ht' ? (product.subtitle_ht || product.subtitle) : product.subtitle;
  
  // La première carte est mise en valeur avec le fond rose vif (Hero Accent) comme sur la capture
  const isHeroAccent = index === 0;
  
  // Alternance des fonds pastel doux pour les autres cartes
  const bgClasses = ['is-hero-accent', 'bg-pink-soft', 'bg-cream-soft', 'bg-green-soft', 'bg-cacao-soft', 'bg-cream-soft', 'bg-pink-soft', 'bg-green-soft'];
  const bgClass = bgClasses[index % bgClasses.length];

  return `
    <article class="product-card-modern ${bgClass}" onclick="window.miamApp.viewProduct('${product.id}')">
      <!-- Bouton favori coeur -->
      <button class="product-fav-btn" onclick="event.stopPropagation(); this.classList.toggle('is-fav');" title="Favori">
        ♥
      </button>

      <!-- Image ronde découpée -->
      <div class="product-card-image-wrap">
        <img src="${product.images[0]}" alt="${name}" loading="lazy">
      </div>

      <!-- Info produit -->
      <h3 class="product-card-title">${name}</h3>
      <div class="product-card-rating">
        <span>★★★★★</span>
      </div>
      <p class="product-card-desc">${subtitle}</p>

      <!-- Ligne prix & bouton d'ajout carré -->
      <div class="product-card-bottom-row">
        <span class="product-card-price">${product.price.toFixed(2)} €</span>
        <button class="product-add-square-btn" onclick="event.stopPropagation(); window.miamApp.addProductDirectly('${product.id}')" title="Ajouter au panier">
          +
        </button>
      </div>
    </article>
  `;
}

// Fonction de rendu des cartes de la section "Nos Meilleurs Produits" (Style Popular Items)
function renderPopularItemCard(product, lang) {
  const name = lang === 'ht' ? (product.name_ht || product.name) : product.name;
  const subtitle = lang === 'ht' ? (product.subtitle_ht || product.subtitle) : product.subtitle;
  const imgUrl = (product.images && product.images.length > 0) ? product.images[0] : '';

  return `
    <article class="popular-card" onclick="window.miamApp.viewProduct('${product.id}')">
      <button class="popular-heart-btn" onclick="event.stopPropagation(); this.classList.toggle('is-active');" title="Favori">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
      <div class="popular-image-wrap">
        <img src="${imgUrl}" alt="${name}" loading="lazy">
      </div>
      <h3 class="popular-item-title">${name}</h3>
      <p class="popular-item-desc">${subtitle}</p>
      <div class="popular-bottom-row">
        <span class="popular-item-price">${product.price.toFixed(2)} €</span>
        <button class="popular-plus-btn" onclick="event.stopPropagation(); window.miamApp.addProductDirectly('${product.id}')" title="Ajouter au panier">+</button>
      </div>
    </article>
  `;
}

// =========================================================================
// 2. BOUTIQUE, PRODUIT, PACKS, HISTOIRE, BLOG, FAQ, CONTACT
// =========================================================================
function renderShopView() {
  const state = store.getState();
  const lang = state.lang;

  let filtered = [...products];
  if (state.selectedCategory && state.selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.selectedCategory);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || (p.name_ht && p.name_ht.toLowerCase().includes(q)));
  }
  if (state.priceFilter) {
    filtered = filtered.filter(p => p.price <= state.priceFilter);
  }

  return `
    <div class="shop-header-banner" style="background: linear-gradient(135deg, #073D24 0%, #0F6841 100%);">
      <div class="container">
        <h1>${store.t('shop_title')}</h1>
        <p>${store.t('shop_subtitle')}</p>
      </div>
    </div>

    <div class="shop-controls-bar">
      <div class="container">
        <div class="shop-controls-grid">
          <div class="shop-search-box">
            <span class="search-icon-inside">🔍</span>
            <input type="text" id="shop-search-input" class="shop-search-input" value="${state.searchQuery}" placeholder="${store.t('search_placeholder')}">
          </div>
          <div class="shop-sort-wrap">
            <label>${store.t('filter_sort')} :</label>
            <select id="shop-sort-select" class="shop-sort-select" onchange="window.miamApp.setSortBy(this.value)">
              <option value="popular">${store.t('sort_popular')}</option>
              <option value="price-asc">${store.t('sort_price_asc')}</option>
              <option value="price-desc">${store.t('sort_price_desc')}</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="shop-layout">
        <aside class="shop-sidebar">
          <div class="filter-block">
            <div class="filter-block-title">
              <span>${store.t('filter_category')}</span>
            </div>
            <div class="category-filter-list">
              ${categories.map(cat => `
                <button class="category-filter-btn ${state.selectedCategory === cat.id ? 'is-active' : ''}" onclick="window.miamApp.filterByCategory('${cat.id}')">
                  <span>${lang === 'ht' ? cat.name_ht : cat.name}</span>
                  <span class="cat-count">${cat.count}</span>
                </button>
              `).join('')}
            </div>
          </div>
          <button class="btn btn-secondary btn-sm btn-block" onclick="window.miamApp.resetShopFilters()">
            ${store.t('reset_filters')}
          </button>
        </aside>

        <main class="shop-products-grid">
          ${filtered.map((p, idx) => renderModernPastelProductCard(p, idx, lang)).join('')}
        </main>
      </div>
    </div>
  `;
}

function initShopEventListeners() {
  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      store.state.searchQuery = e.target.value;
      store.notify();
    });
  }
}

function renderProductDetailView(productId) {
  const product = products.find(p => p.id === productId) || products[0];
  const lang = store.getState().lang;
  const name = lang === 'ht' ? (product.name_ht || product.name) : product.name;
  const subtitle = lang === 'ht' ? (product.subtitle_ht || product.subtitle) : product.subtitle;
  const desc = lang === 'ht' ? (product.description_ht || product.description) : product.description;
  const defaultFormat = product.formats?.[0];
  const defaultVariant = product.variants?.[0];

  return `
    <div class="container product-detail-page">
      <nav class="product-breadcrumb">
        <a href="#" onclick="window.miamApp.navigate('home')">${store.t('nav_home')}</a>
        <span>›</span>
        <a href="#" onclick="window.miamApp.navigate('shop')">${store.t('nav_shop')}</a>
        <span>›</span>
        <span>${name}</span>
      </nav>

      <div class="product-detail-layout">
        <div class="product-gallery-wrap">
          <div class="product-main-view">
            <img id="detail-main-img" src="${product.images[0]}" alt="${name}">
          </div>
          <div class="product-thumbnails-list">
            ${product.images.map((img, idx) => `
              <button class="thumbnail-btn ${idx === 0 ? 'is-active' : ''}" onclick="window.miamApp.switchDetailImage('${img}', this)">
                <img src="${img}" alt="${name}">
              </button>
            `).join('')}
          </div>
        </div>

        <div class="product-info-wrap">
          <span class="badge badge-pink" style="margin-bottom: 0.5rem;">${product.badge || 'Spécialité Lakay'}</span>
          <h1 class="product-detail-title">${name}</h1>
          <div class="product-detail-subtitle">${subtitle}</div>

          <div class="product-detail-rating">
            <div class="rating-stars">★★★★★</div>
            <span style="font-weight: 700;">${product.rating}</span>
            <span class="rating-count">(${product.reviewCount} avis)</span>
          </div>

          <div class="product-detail-price-box">
            <span class="detail-current-price" id="detail-price-display">${product.price.toFixed(2)} €</span>
          </div>

          ${product.formats && product.formats.length > 1 ? `
            <div class="option-selection-group">
              <label class="option-label">${store.t('choose_format')}</label>
              <div class="option-chips-list">
                ${product.formats.map((fmt, idx) => `
                  <button class="option-chip ${idx === 0 ? 'is-selected' : ''}" onclick="window.miamApp.selectProductFormat('${fmt.id}', ${fmt.price}, this)">
                    ${fmt.name} — ${fmt.price.toFixed(2)} €
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="purchase-actions-row">
            <button class="btn btn-primary btn-lg" style="flex: 1;" onclick="window.miamApp.addDetailProductToCart('${product.id}')">
              <span>🛒</span> ${store.t('add_to_cart')}
            </button>
            <a href="${getProductWhatsAppUrl(product, defaultFormat, defaultVariant, lang)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              <span>💬</span> ${store.t('whatsapp_order_btn')}
            </a>
          </div>

          <div class="reassurance-checklist">
            <div class="check-item"><span>✓</span> Produit préparé avec soin</div>
            <div class="check-item"><span>✓</span> Paiement sécurisé SSL</div>
            <div class="check-item"><span>✓</span> Livraison 24-48h</div>
            <div class="check-item"><span>✓</span> Assistance WhatsApp 7j/7</div>
          </div>
        </div>
      </div>

      <div class="product-tabs-section">
        <p style="font-size: 1.1rem; line-height: 1.8;">${desc}</p>
      </div>
    </div>
  `;
}

function initProductDetailListeners(productId) {
  window.currentProductState = {
    productId: productId,
    selectedFormatId: products.find(p => p.id === productId)?.formats?.[0]?.id || null,
    selectedVariantId: products.find(p => p.id === productId)?.variants?.[0]?.id || null,
    quantity: 1
  };
}

function renderPacksView() {
  const packs = products.filter(p => p.category === 'packs');
  const lang = store.getState().lang;

  return `
    <div class="shop-header-banner" style="background: linear-gradient(135deg, #073D24 0%, #0F6841 100%);">
      <div class="container">
        <h1>${store.t('packs_title')}</h1>
        <p>${store.t('packs_subtitle')}</p>
      </div>
    </div>
    <div class="container section-padding">
      <div class="best-products-grid home-packs-grid">
        ${packs.map(pack => renderPackCard(pack, lang)).join('')}
      </div>
    </div>
  `;
}

function renderStoryView() {
  return `
    <div class="shop-header-banner" style="background: linear-gradient(135deg, var(--color-cacao) 0%, #3D2214 100%);">
      <div class="container">
        <h1>Miam'cieuse, une histoire qui commence par le goût</h1>
        <p>Transmettre la richesse culinaire d'Haïti dans un écrin de gourmandise et de modernité.</p>
      </div>
    </div>
    <div class="container" style="max-width: 860px; padding: 4rem 1.5rem;">
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 2rem;">
        Chez Miam'cieuse, nous voulons faire vivre les saveurs qui nous ressemblent. Celles qui rappellent la famille, les souvenirs d'enfance, les goûters partagés et les traditions vivantes d'Haïti.
      </p>
      <button class="btn btn-primary btn-lg" onclick="window.miamApp.navigate('shop')">
        Découvrir nos créations →
      </button>
    </div>
  `;
}

function renderBlogView() {
  const lang = store.getState().lang;
  return `
    <div class="blog-page-header">
      <div class="container">
        <h1>Le Journal Miam'cieuse</h1>
        <p>Secrets culinaires, traditions créoles et recettes authentiques.</p>
      </div>
    </div>
    <div class="container">
      <div class="articles-grid">
        ${articles.map(art => `
          <article class="article-card" onclick="window.miamApp.viewArticle('${art.id}')">
            <div class="article-card-image-wrap">
              <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="article-card-body">
              <h2 class="article-card-title">${lang === 'ht' ? art.title_ht : art.title}</h2>
              <p class="article-card-summary">${lang === 'ht' ? art.summary_ht : art.summary}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function renderArticleView(articleId) {
  const article = articles.find(a => a.id === articleId) || articles[0];
  const lang = store.getState().lang;
  return `
    <div class="container article-single-view">
      <h1>${lang === 'ht' ? article.title_ht : article.title}</h1>
      <img src="${article.image}" alt="${article.title}" class="article-featured-img">
      <div class="article-rich-content">${article.content}</div>
      <button class="btn btn-secondary" onclick="window.miamApp.navigate('blog')">← Retour au Journal</button>
    </div>
  `;
}

function renderFaqView() {
  const lang = store.getState().lang;
  return `
    <div class="faq-header-banner">
      <div class="container">
        <h1>Foire Aux Questions</h1>
      </div>
    </div>
    <div class="container faq-layout">
      <div class="faq-accordion-list">
        ${faqItems.map(item => `
          <div class="faq-accordion-item">
            <button class="faq-accordion-trigger">
              <span>${lang === 'ht' ? item.question_ht : item.question}</span>
            </button>
            <div class="faq-accordion-content" style="display: block;">
              <p>${lang === 'ht' ? item.answer_ht : item.answer}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function initFaqListeners() {}

function renderContactView() {
  return `
    <div class="shop-header-banner">
      <div class="container">
        <h1>Contactez l'Équipe Miam'cieuse</h1>
      </div>
    </div>
    <div class="container" style="padding: 4rem 1.5rem;">
      <div class="contact-form-box" style="max-width: 600px; margin: 0 auto;">
        <div class="footer-links" style="margin-bottom: 18px;">
            <a href="mailto:Miamicieuse@gmail.com">Miamicieuse@gmail.com</a>
            <a href="tel:+50939424419">+509 39 42 4419</a>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=P%C3%A9tion-Ville%2C%20Ha%C3%AFti" target="_blank" rel="noopener">Pétion-Ville, Haïti ↗</a>
          </div>
        <form onsubmit="window.miamApp.handleContactSubmit(event)">
          <div class="form-group">
            <label class="form-label">Nom complet *</label>
            <input type="text" class="form-input" required placeholder="Votre nom">
          </div>
          <div class="form-group">
            <label class="form-label">Email *</label>
            <input type="email" class="form-input" required placeholder="votre.email@exemple.com">
          </div>
          <div class="form-group">
            <label class="form-label">Message *</label>
            <textarea class="form-textarea" required placeholder="Votre message..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Envoyer</button>
        </form>
      </div>
    </div>
  `;
}

function renderPackCard(pack, lang) {
  const name = lang === 'ht' ? (pack.name_ht || pack.name) : pack.name;
  const subtitle = lang === 'ht' ? (pack.subtitle_ht || pack.subtitle) : pack.subtitle;
  return `
    <div class="pack-card" onclick="window.miamApp.viewProduct('${pack.id}')">
      <span class="badge badge-pink" style="margin-bottom: 0.5rem;">Pack Économique -${pack.savingsPercentage}%</span>
      <h3 class="pack-name">${name}</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted);">${subtitle}</p>
      <div class="pack-price-wrap">
        <span class="pack-current-price">${pack.price.toFixed(2)} €</span>
      </div>
      <button class="btn btn-primary btn-sm btn-block" onclick="event.stopPropagation(); window.miamApp.addProductDirectly('${pack.id}')">
        <span>🛒</span> Ajouter au panier
      </button>
    </div>
  `;
}
