// Application Miam'cieuse autonome (Fonctionne en direct double-clic ET via serveur)
(function() {
  const products = [
    {
      id: "mamba-traditionnel-16oz",
      name: "Mamba Haïtien Traditionnel",
      cardTitle: "Mamba Haïtien",
      cardDesc: "Beurre de cacahuètes artisanal torréfié à cœur",
      name_ht: "Mamba Tradisyonèl Ayisyen",
      subtitle: "Le beurre de cacahuètes artisanal au goût unique d'Haïti",
      category: "mamba",
      price: 11.90,
      originalPrice: 13.50,
      rating: 4.9,
      reviewCount: 148,
      isBestseller: true,
      badge: "Best-seller",
      images: [
        "./images/product-mamba-pot.png",
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=85"
      ],
      formats: [
        { id: "16oz", name: "16 oz (454g)", price: 11.90 },
        { id: "32oz", name: "32 oz (908g)", price: 19.90 }
      ],
      description: "Notre Mamba est élaboré selon la pure tradition haïtienne : des cacahuètes premium torréfiées à cœur à la perfection, broyées finement pour une texture ultra onctueuse et gourmande."
    },
    {
      id: "mamba-pimente-grand-format-32oz",
      name: "Mamba Piman Bouk — 32 oz",
      cardTitle: "Mamba Piman Bouk",
      cardDesc: "Le frisson authentique du piment haïtien et cacahuète torréfiée",
      name_ht: "Mamba Piman Bouk — 32 oz",
      subtitle: "Le frisson authentique du piment haïtien et cacahuète torréfiée",
      category: "mamba",
      price: 21.50,
      originalPrice: 24.00,
      rating: 5.0,
      reviewCount: 96,
      isBestseller: true,
      badge: "Coup de cœur",
      images: [
        "./images/product-mamba-pot.png",
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=85"
      ],
      formats: [{ id: "32oz", name: "32 oz (908g)", price: 21.50 }],
      description: "L'harmonie parfaite entre le crémeux des cacahuètes torréfiées et la chaleur subtile du piment bouk haïtien."
    },
    {
      id: "cassave-traditionnelle-artisanale",
      name: "Cassave Haïtienne Pur Manioc",
      cardTitle: "Cassave Manioc",
      cardDesc: "Galette croustillante dorée sur platine traditionnelle",
      name_ht: "Kasav Tradisyonèl Pi Manyòk",
      subtitle: "Galette de manioc croustillante cuite sur platine traditionnelle",
      category: "cassave",
      price: 6.90,
      originalPrice: 8.00,
      rating: 4.8,
      reviewCount: 112,
      isBestseller: true,
      badge: "Incontournable",
      images: ["./images/product-cassave-mamba.png"],
      formats: [{ id: "pack-3", name: "Sachet de 3 galettes", price: 6.90 }],
      description: "Véritable trésor du terroir haïtien, notre cassave est confectionnée artisanalement à partir de manioc frais râpé."
    },
    {
      id: "chocolat-cacao-haitien-baton",
      name: "Chocolat Pays Pur Cacao en Bâton",
      cardTitle: "Chocolat Pays",
      cardDesc: "100% Cacao brut de la Grand'Anse aux arômes intenses",
      name_ht: "Chokola Peyi Pi Kakawo an Baton",
      subtitle: "100% Cacao grand cru de la Grand'Anse aux arômes sauvages",
      category: "chocolat",
      price: 8.90,
      originalPrice: 10.50,
      rating: 5.0,
      reviewCount: 64,
      isBestseller: true,
      badge: "Grand Cru",
      images: ["./images/product-chocolat-cacao.png"],
      formats: [{ id: "lot-2", name: "Lot de 2 bâtons (200g)", price: 8.90 }],
      description: "Fèves de cacao sauvages récoltées en Haïti, torréfiées et roulées à la main."
    },
    {
      id: "akasan-traditionnel-haitien",
      name: "Akasan — Boisson au Maïs & Épices",
      cardTitle: "Akasan Cho",
      cardDesc: "Boisson douce réconfortante à la cannelle et anis",
      name_ht: "Akasan Cho — Bwason Mayi ak Bon Epices",
      subtitle: "Boisson traditionnelle réconfortante à la cannelle, anis et lait doux",
      category: "akasan",
      price: 7.50,
      originalPrice: 9.00,
      rating: 4.9,
      reviewCount: 78,
      isBestseller: false,
      badge: "Nouveau",
      images: ["./images/product-akasan.png"],
      formats: [{ id: "500ml", name: "Bouteille 500ml", price: 7.50 }],
      description: "Infusion lente de farine de maïs fin avec bâtons de cannelle, badiane et lait concentré."
    },
    {
      id: "cham-cham-artisanal-gourmand",
      name: "Cham-Cham Croustillant",
      cardTitle: "Chanm-Chanm",
      cardDesc: "Maïs torréfié moulu, cacahuètes grillées et cannelle douce",
      name_ht: "Chanm-Chanm Kroustiyan",
      subtitle: "Maïs torréfié moulu, cacahuètes grillées et cannelle douce",
      category: "cham-cham",
      price: 5.90,
      originalPrice: 7.00,
      rating: 4.7,
      reviewCount: 52,
      isBestseller: false,
      badge: "Tradition",
      images: ["./images/product-chanm-chanm.png"],
      formats: [{ id: "250g", name: "Sachet 250g", price: 5.90 }],
      description: "Le goûter d'enfance haïtien par excellence à base de maïs et cacahuètes grillées."
    },
    {
      id: "comparette-artisanale-jeremie",
      name: "Comparètte Artisanale de Jérémie",
      cardTitle: "Comparètte Jérémie",
      cardDesc: "Biscuit moelleux parfumé au gingembre et mélasse",
      name_ht: "Konparèt Atizanal Jeremi",
      subtitle: "Biscuit moelleux parfumé au gingembre et sirop de batterie",
      category: "comparette",
      price: 6.50,
      originalPrice: 7.50,
      rating: 4.9,
      reviewCount: 88,
      isBestseller: false,
      badge: "Jérémie",
      images: ["./images/product-comparette.png"],
      formats: [{ id: "lot-4", name: "Paquet de 4 (350g)", price: 6.50 }],
      description: "Spécialité légendaire de Jérémie au gingembre frais et mélasse de canne."
    },
    {
      id: "bon-save-lakay-epices-completes",
      name: "Bon Savè Lakay — Épice Complète",
      cardTitle: "Bon Savè Lakay",
      cardDesc: "L'assaisonnement secret haïtien pour viandes et riz créole",
      name_ht: "Bon Savè Lakay — Epis Konplè",
      subtitle: "L'assaisonnement secret haïtien pour viandes et riz créole",
      category: "bon-save-lakay",
      price: 8.50,
      originalPrice: 10.00,
      rating: 5.0,
      reviewCount: 104,
      isBestseller: false,
      badge: "Signature",
      images: ["https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85"],
      formats: [{ id: "350g", name: "Bocal 350g", price: 8.50 }],
      description: "Échalotes pays, ail, thym sauvage, clous de girofle et jus de citron vert."
    },
    {
      id: "pack-mamba-lover",
      name: "Pack Mamba Lover + Cassave",
      cardTitle: "Pack Mamba Lover",
      cardDesc: "1 Mamba Doux + 1 Mamba Pimenté + Cassave Traditionnelle Offerte !",
      name_ht: "Pak Mamba Lover + Kasav",
      subtitle: "1 Mamba Doux + 1 Mamba Pimenté + Cassave Traditionnelle Offerte !",
      category: "packs",
      price: 32.50,
      originalPrice: 38.80,
      savingsPercentage: 16,
      rating: 5.0,
      reviewCount: 92,
      isBestseller: false,
      badge: "Cassave Offerte",
      images: ["./images/hero-slide-2.jpg"],
      description: "Le duo ultime de Mamba accompagné de sa galette de cassave offerte."
    },
    {
      id: "pack-decouverte-saveurs",
      name: "Pack Découverte — Saveurs Lakay",
      cardTitle: "Pack Découverte",
      cardDesc: "Coffret 4 spécialités : Mamba 16 oz, Cassave, Chocolat et Cham-Cham",
      name_ht: "Pak Dekouvèt — Bon Gou Lakay",
      subtitle: "Coffret 4 spécialités : Mamba 16 oz, Cassave, Chocolat et Cham-Cham",
      category: "packs",
      price: 29.90,
      originalPrice: 36.20,
      savingsPercentage: 18,
      rating: 5.0,
      reviewCount: 165,
      isBestseller: false,
      badge: "Offre Spéciale -18%",
      images: ["./images/hero-slide-2.jpg"],
      description: "Le coffret idéal pour découvrir ou faire découvrir les trésors gastronomiques d'Haïti."
    }
  ];

  // Témoignages Vidéo Instagram (Reels & Stories)
  const videoTestimonials = [
    {
      id: "vid-1",
      author: "Miam'Icieuse",
      handle: "@miamicieuse",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      image: "./images/hero-slide-2.jpg",
      quote: "« N’attendez pas demain pour goûter ! Le goût de la pure satisfaction avec nos authentiques Kasav Okap et douceurs artisanales. »",
      productName: "Kasav Okap & Mamba",
      productId: "cassave-mamba-traditionnel-pack",
      instagramUrl: "https://www.instagram.com/miamicieuse/reel/DVgZwcdjq-8/",
      embedUrl: "https://www.instagram.com/reel/DVgZwcdjq-8/embed/"
    },
    {
      id: "vid-2",
      author: "Jean-Marc L.",
      handle: "@jm_ayiti",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      image: "./images/hero-slide-1.jpg",
      quote: "« Le piment bouk est dosé à la perfection ! Un vrai coup de foudre gourmand avec la cassave croustillante. Livraison rapide et soignée. »",
      productName: "Mamba Piman Bouk 32 oz",
      productId: "mamba-pimente-grand-format-32oz",
      instagramUrl: "https://www.instagram.com/miamicieuse/reel/DVgZwcdjq-8/",
      embedUrl: "https://www.instagram.com/reel/DVgZwcdjq-8/embed/"
    },
    {
      id: "vid-3",
      author: "Marie-Ange B.",
      handle: "@marieange_food",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      image: "./images/hero-slide-3.jpg",
      quote: "« Le chocolat pays au lait le matin, c'est un réconfort inégalable ! Du vrai cacao brut d'Haïti roulé à la main, un goût boisé unique. »",
      productName: "Chocolat Pays Pur Cacao",
      productId: "chocolat-cacao-haitien-baton",
      instagramUrl: "https://www.instagram.com/miamicieuse/reel/DVgZwcdjq-8/",
      embedUrl: "https://www.instagram.com/reel/DVgZwcdjq-8/embed/"
    },
    {
      id: "vid-4",
      author: "Samuel T.",
      handle: "@samuel_lakay",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      image: "./images/product-akasan.png",
      quote: "« Rien ne vaut un bon Akasan crémeux bien chaud à l'anis étoilé et cannelle douce pour démarrer la journée en pleine forme ! »",
      productName: "Akasan Cho Traditionnel",
      productId: "akasan-traditionnel-haitien",
      instagramUrl: "https://www.instagram.com/miamicieuse/reel/DVgZwcdjq-8/",
      embedUrl: "https://www.instagram.com/reel/DVgZwcdjq-8/embed/"
    }
  ];

  // État du panier
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem('miamcieuse_cart') || '[]');
  } catch(e) {
    cart = [];
  }

  // État des favoris
  let favorites = [];
  try {
    favorites = JSON.parse(localStorage.getItem('miamcieuse_favs') || '[]');
  } catch(e) {
    favorites = [];
  }

  // État des filtres
  let filterState = {
    category: 'all',
    searchQuery: '',
    maxPrice: 40,
    sortBy: 'popular',
    bestsellerOnly: false,
    inStockOnly: true
  };

  let currentLang = 'fr';
  try {
    currentLang = localStorage.getItem('miamcieuse_lang') || 'fr';
  } catch(e) {
    currentLang = 'fr';
  }

  function saveCart() {
    try {
      localStorage.setItem('miamcieuse_cart', JSON.stringify(cart));
    } catch(e) {}
    updateCartUI();
  }

  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Badges
    document.querySelectorAll('.cart-count-badge').forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    // Total
    const subtotalEl = document.getElementById('cart-subtotal-val');
    if (subtotalEl) subtotalEl.textContent = `${totalPrice.toFixed(2)} €`;

    // Jauge de livraison gratuite (45 €)
    const progressWrap = document.getElementById('cart-shipping-progress');
    if (progressWrap) {
      const remaining = Math.max(0, 45 - totalPrice);
      const pct = Math.min(100, Math.round((totalPrice / 45) * 100));
      if (totalPrice >= 45) {
        progressWrap.innerHTML = `
          <div class="shipping-progress-text" style="color: #10B981; font-weight: 800;">
            🎉 Félicitations ! Livraison offerte sur votre commande !
          </div>
          <div class="shipping-progress-bar-bg"><div class="shipping-progress-fill" style="width: 100%; background: #10B981;"></div></div>
        `;
      } else {
        progressWrap.innerHTML = `
          <div class="shipping-progress-text">
            Plus que <strong>${remaining.toFixed(2)} €</strong> pour bénéficier de la <strong>livraison offerte</strong> !
          </div>
          <div class="shipping-progress-bar-bg"><div class="shipping-progress-fill" style="width: ${pct}%"></div></div>
        `;
      }
    }

    // Contenu du panier
    const listContainer = document.getElementById('cart-items-container');
    if (listContainer) {
      if (cart.length === 0) {
        listContainer.innerHTML = `
          <div class="cart-empty-view">
            <div class="empty-cart-icon">🛒</div>
            <h3>Votre panier est vide</h3>
            <p>Découvrez nos délicieuses spécialités haïtiennes !</p>
          </div>
        `;
        const footer = document.getElementById('cart-footer-container');
        if (footer) footer.style.display = 'none';
      } else {
        const footer = document.getElementById('cart-footer-container');
        if (footer) footer.style.display = 'flex';
        listContainer.innerHTML = cart.map(item => `
          <div class="cart-item-row">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
              <h4 class="cart-item-name">${item.name}</h4>
              <div class="mini-qty-box" style="margin-top: 0.35rem;">
                <button class="mini-qty-btn" onclick="window.miamApp.updateCartQty('${item.id}', ${item.quantity - 1})">-</button>
                <span class="mini-qty-val">${item.quantity}</span>
                <button class="mini-qty-btn" onclick="window.miamApp.updateCartQty('${item.id}', ${item.quantity + 1})">+</button>
              </div>
            </div>
            <div class="cart-item-price-wrap">
              <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} €</span>
              <button class="cart-item-remove-btn" onclick="window.miamApp.removeFromCart('${item.id}')">Supprimer</button>
            </div>
          </div>
        `).join('');
      }
    }

    // Bouton WhatsApp du panier
    const waCartBtn = document.getElementById('cart-whatsapp-checkout-btn');
    if (waCartBtn) {
      const itemsText = cart.map(i => `- ${i.quantity}x ${i.name} (${(i.price * i.quantity).toFixed(2)} €)`).join('%0A');
      const text = `Bonjour Miam'cieuse 👋%0AJe souhaite finaliser ma commande sur WhatsApp :%0A${itemsText}%0ATotal : ${totalPrice.toFixed(2)} €`;
      waCartBtn.href = `https://wa.me/50939424419?text=${text}`;
    }
  }

  function openDrawer() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (backdrop) {
      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (backdrop) {
      backdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  // ==========================================
  // SYSTÈME DE FILTRAGE & RECHERCHE AVANCÉ
  // ==========================================
  function getFilteredProducts() {
    let list = [...products];

    // Catégorie
    if (filterState.category && filterState.category !== 'all') {
      if (filterState.category === 'biscuits') {
        list = list.filter(p => p.category === 'biscuits' || p.category === 'comparette' || p.category === 'cham-cham');
      } else {
        list = list.filter(p => p.category === filterState.category);
      }
    } else if (!filterState.searchQuery || filterState.searchQuery.trim().length === 0) {
      // Dans "Nos Meilleurs Produits" (vue par défaut), exclure les packs : ils ont leur section dédiée (#packs-anchor)
      list = list.filter(p => p.category !== 'packs');
    }

    // Prix maximum
    list = list.filter(p => p.price <= filterState.maxPrice);

    // Bestseller uniquement
    if (filterState.bestsellerOnly) {
      list = list.filter(p => p.isBestseller);
    }

    // Requête de recherche
    if (filterState.searchQuery && filterState.searchQuery.trim().length > 0) {
      const q = filterState.searchQuery.trim().toLowerCase();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.cardTitle && p.cardTitle.toLowerCase().includes(q)) ||
        (p.name_ht && p.name_ht.toLowerCase().includes(q)) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Tri
    if (filterState.sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (filterState.sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (filterState.sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    } else {
      // Recommandés / Populaires
      list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return list;
  }

  function renderProductsGrid() {
    const grid = document.querySelector('.popular-items-grid');
    if (!grid) return;

    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="filter-empty-state">
          <div class="filter-empty-icon">🔍</div>
          <h3 class="filter-empty-title">Aucun délice trouvé</h3>
          <p class="filter-empty-desc">Aucune spécialité ne correspond à vos filtres actuels. Essayez d'élargir vos critères ou de réinitialiser les filtres.</p>
          <button type="button" class="btn btn-primary" onclick="window.miamApp.resetAllFilters()">Réinitialiser les filtres</button>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(p => `
        <article class="popular-card" onclick="window.miamApp.viewProduct('${p.id}')">
          <button class="popular-heart-btn ${favorites.includes(p.id) ? 'is-active' : ''}" onclick="event.stopPropagation(); window.miamApp.toggleFavorite('${p.id}', this)" title="Favori">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <div class="popular-image-wrap">
            <img src="${(p.images && p.images[0]) || './images/product-mamba-pot.png'}" alt="${p.name}">
          </div>
          <h3 class="popular-item-title">${p.cardTitle || p.name}</h3>
          <p class="popular-item-desc">${p.cardDesc || p.subtitle || p.description}</p>
          <div class="popular-bottom-row">
            <span class="popular-item-price">${p.price.toFixed(2)} €</span>
            <button class="popular-plus-btn" onclick="event.stopPropagation(); window.miamApp.addProductDirectly('${p.id}')" title="Ajouter au panier">+</button>
          </div>
        </article>
      `).join('');
    }

    updateFilterUI();
  }

  function updateFilterUI() {
    // 1. Bouton filtre Hero : Badge et classe active
    let activeFilterCount = 0;
    if (filterState.category !== 'all') activeFilterCount++;
    if (filterState.maxPrice < 40) activeFilterCount++;
    if (filterState.sortBy !== 'popular') activeFilterCount++;
    if (filterState.bestsellerOnly) activeFilterCount++;
    if (filterState.searchQuery && filterState.searchQuery.trim().length > 0) activeFilterCount++;

    const filterBtn = document.getElementById('hero-filter-trigger-btn');
    const filterBadge = document.getElementById('hero-filter-badge');
    if (filterBtn) {
      if (activeFilterCount > 0) {
        filterBtn.classList.add('has-active-filters');
        if (filterBadge) {
          filterBadge.textContent = activeFilterCount;
          filterBadge.style.display = 'flex';
        }
      } else {
        filterBtn.classList.remove('has-active-filters');
        if (filterBadge) filterBadge.style.display = 'none';
      }
    }

    // 2. Boutons de catégories dans le modal
    document.querySelectorAll('#filter-category-chips .filter-chip').forEach(chip => {
      chip.classList.toggle('is-active', chip.getAttribute('data-cat') === filterState.category);
    });

    // 3. Libellé de catégorie dans le modal
    const catLabels = {
      all: "Tous les délices",
      mamba: "Mamba Haïtien",
      cassave: "Cassave Traditionnelle",
      chocolat: "Chocolat Pur Cacao",
      akasan: "Akasan Cho",
      biscuits: "Biscuits & Gâteaux",
      packs: "Packs & Coffrets"
    };
    const catLabelEl = document.getElementById('filter-selected-category-text');
    if (catLabelEl) catLabelEl.textContent = catLabels[filterState.category] || "Tous les délices";

    // 4. Slider prix
    const priceDisplay = document.getElementById('filter-price-display');
    if (priceDisplay) priceDisplay.textContent = `Jusqu'à ${filterState.maxPrice} €`;
    const priceRange = document.getElementById('filter-price-range');
    if (priceRange) priceRange.value = filterState.maxPrice;

    // 5. Tri buttons
    document.querySelectorAll('#filter-sort-grid .filter-sort-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-sort') === filterState.sortBy);
    });

    // 6. Checkboxes
    const bsCheckbox = document.getElementById('filter-bestseller-only');
    if (bsCheckbox) bsCheckbox.checked = filterState.bestsellerOnly;

    // 7. Compte de résultats pour le bouton "Appliquer"
    const countEl = document.getElementById('filter-results-count-text');
    const matches = getFilteredProducts().length;
    if (countEl) {
      countEl.textContent = `(${matches} produit${matches > 1 ? 's' : ''})`;
    }

    // 8. Synchroniser les cercles de catégories sur la page d'accueil
    document.querySelectorAll('.category-circle-item').forEach(item => {
      const onclickAttr = item.getAttribute('onclick') || '';
      const isCurrent = onclickAttr.includes(`'${filterState.category}'`);
      item.classList.toggle('is-active', isCurrent);
    });
  }

  // ==========================================
  // SYSTÈME DE RECHERCHE & AUTOCOMPLETE
  // ==========================================
  function renderSearchDropdown() {
    const dropdown = document.getElementById('hero-search-dropdown');
    if (!dropdown) return;

    const q = (filterState.searchQuery || '').trim();

    if (q.length === 0) {
      dropdown.innerHTML = `
        <div class="hero-search-dropdown-header">
          <span>Recherches populaires</span>
        </div>
        <div class="hero-search-chips">
          <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Mamba')">🥜 Mamba</button>
          <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Cassave')">🥞 Cassave</button>
          <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Chocolat')">🍫 Chocolat Pays</button>
          <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Akasan')">🌽 Akasan Cho</button>
          <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Piment')">🌶️ Mamba Pimenté</button>
          <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Pack')">🎁 Packs Découverte</button>
        </div>
      `;
      return;
    }

    const matches = getFilteredProducts();

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div class="hero-search-empty">
          <span class="hero-search-empty-icon">🔎</span>
          <p>Aucun produit ne correspond à « <strong>${q}</strong> »</p>
          <div class="hero-search-chips" style="justify-content: center; padding: 0.5rem 0 0 0;">
            <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Mamba')">Essayer "Mamba"</button>
            <button type="button" class="hero-search-chip" onclick="window.miamApp.quickSearch('Cassave')">Essayer "Cassave"</button>
          </div>
        </div>
      `;
    } else {
      dropdown.innerHTML = `
        <div class="hero-search-dropdown-header">
          <span>Résultats trouvés (${matches.length})</span>
          <span style="font-size: 0.76rem; color: #cf0072; text-transform: none; font-weight: 700;">« ${q} »</span>
        </div>
        <div class="hero-search-results-list">
          ${matches.slice(0, 5).map(p => `
            <div class="hero-search-item" onclick="window.miamApp.selectSearchResult('${p.id}')">
              <div class="hero-search-item-left">
                <img src="${(p.images && p.images[0]) || './images/product-mamba-pot.png'}" alt="${p.name}" class="hero-search-item-thumb">
                <div class="hero-search-item-info">
                  <h4 class="hero-search-item-title">${p.cardTitle || p.name}</h4>
                  <p class="hero-search-item-cat">${p.subtitle || p.cardDesc || p.category}</p>
                </div>
              </div>
              <div class="hero-search-item-right">
                <span class="hero-search-item-price">${p.price.toFixed(2)} €</span>
                <button type="button" class="hero-search-item-btn" onclick="event.stopPropagation(); window.miamApp.addProductDirectly('${p.id}')" title="Ajouter au panier">+</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="hero-search-dropdown-footer">
          <a href="#best-products-anchor" class="hero-search-footer-link" onclick="window.miamApp.submitSearch()">
            <span>Voir tous les délices trouvés (${matches.length})</span>
            <span>→</span>
          </a>
        </div>
      `;
    }
  }

  // ==========================================
  // DONNÉES & FONCTIONS DES SOUS-PAGES SPA (FAQ, Livraison, Contact, Blog, Histoire)
  // ==========================================
  const subpageState = {
    faqCat: 'all',
    faqSearch: '',
    blogCat: 'all'
  };

  const faqCategoriesData = [
    { id: "all", name: "Toutes les questions" },
    { id: "order", name: "Commandes & WhatsApp" },
    { id: "delivery", name: "Livraison & Expédition" },
    { id: "products", name: "Produits & Conservation" },
    { id: "packs", name: "Packs & Cadeaux" }
  ];

  const faqItemsData = [
    {
      id: "comment-passer-commande",
      category: "order",
      question: "Comment passer une commande sur le site Miam'cieuse ?",
      answer: "Vous pouvez commander directement en ligne en ajoutant vos spécialités au panier et en validant votre commande. Vous pouvez également commander en 1 clic via WhatsApp grâce au bouton présent sur chaque fiche produit : un message pré-rempli avec votre sélection de délices est instantanément transmis à notre équipe."
    },
    {
      id: "delais-livraison",
      category: "delivery",
      question: "Quels sont les délais et zones de livraison ?",
      answer: "Toutes nos commandes sont préparées sous 24h. Nous livrons en 24h à Pétion-Ville et dans toute la métropole de Port-au-Prince, en 48h à 72h dans toutes les villes de province en Haïti (Cap-Haïtien, Jacmel, Les Cayes, Saint-Marc, Gonaïves), et à l'international dans toute la diaspora (USA, Canada, France, DOM-TOM) via nos partenaires logistiques certifiés."
    },
    {
      id: "livraison-gratuite",
      category: "delivery",
      question: "Proposez-vous la livraison gratuite ?",
      answer: "Oui ! La livraison est offerte dès 45 € d'achats (ou équivalent en gourdes). Une jauge dynamique dans votre panier vous indique en direct le montant restant pour en bénéficier."
    },
    {
      id: "conservation-mamba",
      category: "products",
      question: "Comment conserver le Mamba et quelle est sa durée de conservation ?",
      answer: "Notre Mamba se conserve à température ambiante dans un endroit sec, à l'abri du soleil direct. Il n'a absolument pas besoin d'être placé au réfrigérateur. Une légère pellicule d'huile naturelle de cacahuète peut remonter à la surface : c'est le gage d'un produit 100% pur, sans additif ni huile hydrogénée ! Il suffit de remuer délicatement avant de déguster. Il se conserve 12 mois."
    },
    {
      id: "formats-disponibles",
      category: "products",
      question: "Quels sont les formats de Mamba disponibles ?",
      answer: "Nous proposons deux formats généreux : le pot standard 16 oz (environ 454g), idéal pour la consommation quotidienne, et le grand pot familial 32 oz (environ 908g), parfait pour toute la maison et les passionnés de Mamba."
    },
    {
      id: "mamba-pimente-degre",
      category: "products",
      question: "Le Mamba pimenté est-il très fort ?",
      answer: "Notre Mamba pimenté offre un équilibre exceptionnel : le véritable piment habanero haïtien (piman bouk) apporte une chaleur aromatique chaleureuse qui réveille le palais sans jamais brûler ou masquer le bon goût des cacahuètes torréfiées au feu doux."
    },
    {
      id: "packs-gourmands-economies",
      category: "packs",
      question: "Quels sont les avantages des packs gourmands ?",
      answer: "Nos packs réunissent nos meilleures spécialités (Mamba, Cassave, Chocolat Pays, Akasan) avec des remises allant jusqu'à -20% et la cassave artisanale souvent offerte."
    }
  ];

  const blogArticlesData = [
    {
      id: "qu-est-ce-que-le-mamba-haitien",
      title: "Qu'est-ce que le Mamba haïtien et pourquoi est-il unique au monde ?",
      category: "Culture & Terroir",
      readTime: "4 min de lecture",
      date: "10 Septembre 2026",
      author: "L'Équipe Miam'cieuse",
      image: "./images/product-mamba-pot.jpg",
      summary: "Découvrez l'histoire fascinante du Mamba haïtien, ce beurre de cacahuète artisanal torréfié au goût inimitable, décliné en version douce ou relevée au piment bouk.",
      content: `
        <h2>Une tradition ancrée au cœur d'Haïti</h2>
        <p>En Haïti, le <strong>Mamba</strong> n'est pas un simple beurre de cacahuète : c'est un monument de l'art de vivre et des petits-déjeuners partagés. Contrairement aux pâtes à tartiner industrielles chargées d'huiles de palme et de sucres raffinés, le Mamba traditionnel haïtien repose sur une méthode 100% naturelle.</p>
        <h3>Le secret : la torréfaction artisanale à cœur</h3>
        <p>Les arachides locales sont triées à la main, puis grillées à cœur dans de grands chaudrons en fonte. Cette torréfaction lente permet aux huiles naturelles de s'exprimer pleinement, libérant des arômes intenses de noisette grillée et de caramel toasté.</p>
        <blockquote style="border-left: 4px solid #cf0072; padding: 16px 20px; background: #fdf0f7; font-style: italic; color: #12351c; margin: 20px 0; border-radius: 0 8px 8px 0; font-size: 15px;">
          « Le Mamba, c'est le goût de la maison, la générosité des matins partagés et l'énergie pure de notre terroir. »
        </blockquote>
        <h3>Doux ou Piman Bouk : deux écoles, un même plaisir</h3>
        <p>La particularité qui enchante les gourmets est l'existence du <strong>Mamba Pimenté</strong>. L'incorporation subtile du piment habanero haïtien (<em>piman bouk</em>) crée un contraste magnifique entre la rondeur crémeuse de l'arachide et la vivacité aromatique du piment.</p>
      `
    },
    {
      id: "comment-manger-la-cassave-haitienne",
      title: "Comment déguster la Cassave haïtienne : 5 façons traditionnelles et modernes",
      category: "Guides & Recettes",
      readTime: "5 min de lecture",
      date: "5 Septembre 2026",
      author: "Chef Kreyòl Miam'cieuse",
      image: "./images/product-cassave-mamba.jpg",
      summary: "Héritage direct des Taïnos, la galette de manioc pur est le compagnon idéal du Mamba. Découvrez nos meilleures astuces pour la savourer chaude, croustillante et gourmande.",
      content: `
        <h2>La reine du manioc depuis des siècles</h2>
        <p>La <strong>cassave</strong> (<em>kasav</em> en créole) est l'un des aliments les plus anciens et résilients de la Caraïbe. Faite à 100% de racine de manioc doux râpée, pressée pour éliminer l'amidon liquide puis cuite à sec sur une grande platine en fonte, elle est naturellement <strong>sans gluten</strong> et d'une richesse nutritive remarquable.</p>
        <h3>1. Le classique incontournable : Cassave & Mamba chaud</h3>
        <p>Faites dorer votre galette de cassave 2 minutes au grille-pain ou dans une poêle sans matière grasse. Dès qu'elle redevient croustillante, étalez une généreuse couche de Mamba Miam'cieuse. La chaleur de la cassave fait fondre délicatement le beurre de cacahuète...</p>
        <h3>2. La version gourmande au Chocolat chaud pays</h3>
        <p>Trempez un morceau de cassave bien chaude directement dans une tasse fumante de chocolat pays préparé avec notre cacao grand cru. Une alliance réconfortante incomparable.</p>
        <h3>3. En version apéritif salé créole</h3>
        <p>Cassez la cassave en triangles croustillants et servez-les en dips avec du chiktay de hareng ou une sauce relevée Bon Savè Lakay.</p>
      `
    },
    {
      id: "recette-chocolat-chaud-haitien-baton",
      title: "Chocolat chaud traditionnel haïtien : la recette authentique au bâton de cacao",
      category: "Recettes Authentiques",
      readTime: "4 min de lecture",
      date: "20 Août 2026",
      author: "Chef Kreyòl Miam'cieuse",
      image: "./images/product-chocolat-cacao.jpg",
      summary: "Oubliez le chocolat en poudre industriel ! Apprenez à préparer le véritable chocolat pays haïtien au bâton de cacao pur, muscade, cannelle et zeste d'agrume.",
      content: `
        <h2>Un cacao sauvage d'exception</h2>
        <p>En Haïti, les fèves de cacao poussent sous la canopée tropicale de la Grand'Anse et du Nord. Récoltées à maturité, elles sont torréfiées puis broyées à chaud pour former une pâte dense roulée en bâtonnets.</p>
        <h3>Ingrédients pour 4 personnes :</h3>
        <ul>
          <li>1 bâton de Chocolat Pays Miam'cieuse (environ 100g râpé)</li>
          <li>750 ml d'eau de source + 250 ml de lait concentré ou lait entier</li>
          <li>1 bâton de cannelle et 1/2 cuillère à café de muscade fraîchement râpée</li>
          <li>1 zeste de citron vert bio</li>
          <li>2 cuillères à soupe de sucre de canne brut et 1 pincée de sel marin</li>
        </ul>
        <p>Faites frémir l'eau avec le cacao râpé et les épices pendant 10 minutes, puis ajoutez le lait et laissez mousser doucement avant de servir bien chaud.</p>
      `
    },
    {
      id: "akasan-histoire-et-tradition-haitienne",
      title: "Akasan haïtien : secrets de préparation et bienfaits de cette boisson légendaire",
      category: "Traditions & Saveurs",
      readTime: "6 min de lecture",
      date: "28 Août 2026",
      author: "L'Équipe Miam'cieuse",
      image: "./images/product-akasan.png",
      summary: "Douce, onctueuse et parfumée à la cannelle, l'Akasan est la boisson chaude préférée des petits-déjeuners haïtiens. Plongez dans ses origines et sa recette.",
      content: `
        <h2>Le réconfort absolu des matins ensoleillés</h2>
        <p>L'<strong>Akasan</strong> est une boisson onctueuse à base de farine de maïs très fine, parfumée aux épices douces : bâtons de cannelle, badiane (anis étoilé), zeste de citron vert et vanille naturelle. Elle apporte une énergie durable et une sensation de bien-être immédiate.</p>
        <h3>La clé d'un Akasan réussi</h3>
        <p>Pour obtenir cette texture soyeuse caractéristique sans aucun grumeau, la farine de maïs doit être dissoute à froid avant d'être incorporée lentement dans l'infusion d'épices frémissante. On termine par l'ajout de lait évaporé de qualité supérieure.</p>
      `
    },
    {
      id: "5-idees-recettes-au-mamba-gourmand",
      title: "5 recettes originales et rapides à réaliser avec votre pot de Mamba",
      category: "Recettes Créatives",
      readTime: "4 min de lecture",
      date: "02 Août 2026",
      author: "Chef Kreyòl Miam'cieuse",
      image: "./images/hero-feast.jpg",
      summary: "Smoothie énergisant, sauce saté créole pour grillades, cookies au cœur fondant... Sublimez votre pot de Mamba Miam'cieuse avec nos recettes faciles.",
      content: `
        <h2>Faites entrer le Mamba dans toutes vos créations</h2>
        <p>Le Mamba est d'une polyvalence remarquable en cuisine. Voici des manières faciles d'émerveiller vos convives :</p>
        <h3>1. Le Smoothie Énergie Créole</h3>
        <p>Mixez 1 banane mûre, 2 cuillères à soupe de Mamba Miam'cieuse doux, 250ml de lait végétal, 1 cuillère à café de miel et une pincée de cannelle.</p>
        <h3>2. Sauce Saté Créole pour Griot ou Grillades</h3>
        <p>Mélangez 3 cuillères de Mamba Pimenté avec un filet de jus de citron vert, une pointe de sauce soja, une gousse d'ail écrasée et un peu d'eau tiède pour émulsionner.</p>
        <h3>3. Cookies fondants cœur Mamba</h3>
        <p>Déposez une cuillère de Mamba au centre de vos boules de pâte à cookies avant d'enfourner 10 minutes à 180°C pour un cœur coulant irrésistible.</p>
      `
    }
  ];

  function renderSubpageTopBar(title, parentRoute, parentName) {
    return `
      <div class="subpage-top-bar">
        <div class="container subpage-top-bar-inner">
          <button type="button" class="subpage-back-btn" onclick="window.miamApp.navigate('${parentRoute || 'home'}')">
            <span>←</span>
            <span>Retour à l'accueil</span>
          </button>
          <nav class="subpage-breadcrumb" aria-label="Fil d'ariane">
            <a href="#" onclick="event.preventDefault(); window.miamApp.navigate('home')">Accueil</a>
            <span>›</span>
            <span style="font-weight:700; color:#12351c;">${title}</span>
          </nav>
        </div>
      </div>
    `;
  }

  function renderFaqPage(activeCat = 'all', searchQuery = '') {
    const container = document.getElementById('subpage-view-container');
    if (!container) return;
    subpageState.faqCat = activeCat;
    subpageState.faqSearch = searchQuery;

    let items = faqItemsData;
    if (activeCat && activeCat !== 'all') {
      items = items.filter(i => i.category === activeCat);
    }
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(i => i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q));
    }

    container.innerHTML = `
      ${renderSubpageTopBar('Foire Aux Questions')}
      <header class="subpage-hero-banner">
        <div class="subpage-hero-container">
          <div class="subpage-hero-content">
            <span class="hero-banner-tag">ASSISTANCE & GUIDE</span>
            <h1 class="subpage-hero-title">Foire Aux <span>Questions</span></h1>
            <p class="subpage-hero-desc">Toutes les réponses à vos questions sur vos commandes, les délais de livraison, la conservation du Mamba et nos packs gourmands.</p>
            <div class="subpage-hero-badges">
              <span class="subpage-hero-stat">⚡ <strong>Réponses</strong> Claires & Rapides</span>
              <span class="subpage-hero-stat">📦 <strong>Suivi</strong> de Commande</span>
              <span class="subpage-hero-stat">🇭🇹 <strong>Support</strong> Local & WhatsApp</span>
            </div>
          </div>
        </div>
      </header>

      <div class="faq-layout">
        <!-- Recherche FAQ -->
        <div class="faq-search-wrapper">
          <input type="text" value="${searchQuery}" placeholder="Rechercher une question (ex: conservation, livraison, piment...)" 
                 class="faq-search-input"
                 oninput="window.miamApp.searchFaq(this.value)">
          <span class="faq-search-icon">🔍</span>
        </div>

        <!-- Onglets Catégories -->
        <div class="faq-category-nav-wrapper">
          <div class="faq-category-nav">
            ${faqCategoriesData.map(cat => `
              <button type="button" class="faq-cat-btn ${cat.id === activeCat ? 'is-active' : ''}" onclick="window.miamApp.filterFaqCat('${cat.id}')">
                ${cat.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Liste des Questions -->
        <div class="faq-accordion-list">
          ${items.length === 0 ? `
            <div style="text-align:center; padding:40px 20px; background:#fff; border-radius:12px; border:1px solid #dce8db;">
              <p style="font-size:15px; color:#556758; margin-bottom:12px;">Aucune réponse ne correspond à votre recherche.</p>
              <button type="button" class="btn-subpage-primary" onclick="window.miamApp.filterFaqCat('all')">
                <span>Réinitialiser les filtres</span>
              </button>
            </div>
          ` : items.map(item => `
            <div class="faq-accordion-item" id="faq-item-${item.id}">
              <button type="button" class="faq-accordion-trigger" onclick="window.miamApp.toggleFaqItem('${item.id}')">
                <span>${item.question}</span>
                <span class="faq-chevron">▼</span>
              </button>
              <div class="faq-accordion-content">
                <p style="margin:0;">${item.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Bannière Aide WhatsApp -->
        <div class="subpage-cta-card">
          <div class="subpage-cta-content">
            <span class="subpage-cta-tag">SUPPORT DIRECT</span>
            <h3>Une question spécifique non listée ?</h3>
            <p>Notre équipe locale est à votre disposition en direct sur WhatsApp pour répondre à toutes vos interrogations en créole ou en français.</p>
            <div class="subpage-cta-actions">
              <a href="https://wa.me/50939424419" target="_blank" rel="noopener" class="btn-subpage-whatsapp">
                <span>💬</span>
                <span>Discuter sur WhatsApp (+509 39 42 4419)</span>
              </a>
              <button type="button" class="btn-subpage-secondary" onclick="window.miamApp.navigate('contact')">
                <span>Formulaire de contact</span>
                <span class="order-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderDeliveryPage() {
    const container = document.getElementById('subpage-view-container');
    if (!container) return;

    container.innerHTML = `
      ${renderSubpageTopBar('Modalités de Livraison')}
      <header class="subpage-hero-banner">
        <div class="subpage-hero-container">
          <div class="subpage-hero-content">
            <span class="hero-banner-tag">EXPÉDITION & TRANSPORTS</span>
            <h1 class="subpage-hero-title">Modalités de <span>Livraison</span></h1>
            <p class="subpage-hero-desc">Des saveurs d'Haïti préparées avec amour, emballées avec le plus grand soin et expédiées chez vous en toute sécurité.</p>
            <div class="subpage-hero-badges">
              <span class="subpage-hero-stat">🛵 <strong>24h</strong> Port-au-Prince</span>
              <span class="subpage-hero-stat">🚚 <strong>48h à 72h</strong> Villes de Province</span>
              <span class="subpage-hero-stat">✈️ <strong>Suivi</strong> International Diaspora</span>
            </div>
          </div>
        </div>
      </header>

      <div class="delivery-container">
        <!-- Grille des Zones -->
        <div class="delivery-cards-grid">
          <div class="delivery-card">
            <div class="delivery-card-icon">🛵</div>
            <span class="delivery-time-badge">24 Heures Chrono</span>
            <h3>Pétion-Ville & Port-au-Prince</h3>
            <p>Livraison locale ultra-rapide à domicile ou sur votre lieu de travail par nos coursiers de confiance.</p>
            <ul class="delivery-card-features">
              <li><span class="delivery-check">✓</span> Livré sous 24h ouvrées</li>
              <li><span class="delivery-check">✓</span> Remise en main propre sécurisée</li>
              <li><span class="delivery-check">✓</span> Paiement en gourdes ou devises</li>
              <li><span class="delivery-check">✓</span> Suivi coursier direct par WhatsApp</li>
            </ul>
          </div>

          <div class="delivery-card">
            <div class="delivery-card-icon">🚚</div>
            <span class="delivery-time-badge">48h à 72h</span>
            <h3>Villes de Province (Haïti)</h3>
            <p>Expédition vers Cap-Haïtien, Jacmel, Les Cayes, Saint-Marc, Gonaïves et toutes les grandes communes.</p>
            <ul class="delivery-card-features">
              <li><span class="delivery-check">✓</span> Acheminement sécurisé via agences partenaires</li>
              <li><span class="delivery-check">✓</span> Emballage renforcé anti-chocs & anti-casse</li>
              <li><span class="delivery-check">✓</span> Notification SMS dès l'arrivée du colis</li>
              <li><span class="delivery-check">✓</span> Retrait facile sur présentation d'une pièce</li>
            </ul>
          </div>

          <div class="delivery-card">
            <div class="delivery-card-icon">✈️</div>
            <span class="delivery-time-badge">International Suivi</span>
            <h3>Diaspora (USA, Canada & France)</h3>
            <p>Faites-vous livrer le goût authentique du pays directement aux États-Unis, au Canada, en France et dans les DOM-TOM.</p>
            <ul class="delivery-card-features">
              <li><span class="delivery-check">✓</span> Colis postal suivi avec numéro de tracking</li>
              <li><span class="delivery-check">✓</span> Pots scellés hermétiquement aux normes export</li>
              <li><span class="delivery-check">✓</span> Dédouanement pris en charge par le transporteur</li>
              <li><span class="delivery-check">✓</span> Réception directe en boîte aux lettres</li>
            </ul>
          </div>
        </div>

        <!-- Avantages & Engagements Miam'cieuse -->
        <div class="delivery-perks-banner">
          <div class="delivery-perk-item">
            <div class="delivery-perk-icon">🎁</div>
            <div>
              <h4>Livraison Offerte dès 45 €</h4>
              <p>Profitez des frais de port 100% gratuits à partir de 45 € d'achats en sélectionnant vos délices favoris.</p>
            </div>
          </div>
          <div class="delivery-perk-item">
            <div class="delivery-perk-icon">🛡️</div>
            <div>
              <h4>Garantie Fraîcheur & Zéro Casse</h4>
              <p>Chaque pot de Mamba et galette de cassave est protégé individuellement sous coussin de calage spécial.</p>
            </div>
          </div>
          <div class="delivery-perk-item">
            <div class="delivery-perk-icon">📲</div>
            <div>
              <h4>Suivi en Temps Réel</h4>
              <p>Vous recevez par SMS et e-mail l'avancement pas à pas de votre colis depuis notre atelier jusqu'à votre table.</p>
            </div>
          </div>
        </div>

        <!-- CTA Bottom -->
        <div class="subpage-cta-card">
          <div class="subpage-cta-content">
            <span class="subpage-cta-tag">EXPÉDITION IMMÉDIATE</span>
            <h3>Envie de passer votre commande dès aujourd'hui ?</h3>
            <p>Faites le plein de Mamba frais, de cassave croustillante et de chocolat pays en quelques clics.</p>
            <div class="subpage-cta-actions">
              <button type="button" class="btn-subpage-primary" onclick="window.miamApp.navigate('shop')">
                <span>Accéder à la Boutique</span>
                <span class="order-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
              <a href="https://wa.me/50939424419" target="_blank" rel="noopener" class="btn-subpage-whatsapp">
                <span>💬</span>
                <span>Commander sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderContactPage() {
    const container = document.getElementById('subpage-view-container');
    if (!container) return;

    container.innerHTML = `
      ${renderSubpageTopBar('Nous Contacter')}
      <header class="subpage-hero-banner">
        <div class="subpage-hero-container">
          <div class="subpage-hero-content">
            <span class="hero-banner-tag">SERVICE CLIENT & ATELIER</span>
            <h1 class="subpage-hero-title">Nous <span>Contacter</span></h1>
            <p class="subpage-hero-desc">Une question sur une commande, un besoin pour un événement ou envie de distribuer nos produits ? Contactez notre équipe locale avec plaisir.</p>
            <div class="subpage-hero-badges">
              <span class="subpage-hero-stat">💬 <strong>WhatsApp</strong> 7j/7</span>
              <span class="subpage-hero-stat">📞 <strong>+509</strong> 39 42 4419</span>
              <span class="subpage-hero-stat">📍 <strong>Pétion-Ville</strong>, Haïti</span>
            </div>
          </div>
        </div>
      </header>

      <div class="contact-container">
        <div class="contact-grid-wrap">
          <!-- Coordonnées Gauche (Dark Roasted Card) -->
          <div class="contact-info-card">
            <div>
              <span class="contact-info-tag">ATELIER ARTISANAL</span>
              <h2 class="contact-info-title">Miam'cieuse Haïti</h2>
              <p class="contact-info-tagline">
                « Le goût de la pure satisfaction. »<br>
                Nous préparons chaque commande avec amour et le respect rigoureux de nos traditions culinaires haïtiennes.
              </p>
            </div>

            <div class="contact-methods-list">
              <a href="https://wa.me/50939424419" target="_blank" rel="noopener" class="contact-method-entry">
                <div class="contact-method-icon">💬</div>
                <div>
                  <div class="contact-method-label">WhatsApp Direct (Réponse rapide)</div>
                  <div class="contact-method-val">+509 39 42 4419</div>
                </div>
              </a>

              <a href="tel:+50939424419" class="contact-method-entry">
                <div class="contact-method-icon">📞</div>
                <div>
                  <div class="contact-method-label">Téléphone Service Client</div>
                  <div class="contact-method-val">+509 39 42 4419 / 42 61 6756</div>
                </div>
              </a>

              <a href="mailto:Miamicieuse@gmail.com" class="contact-method-entry">
                <div class="contact-method-icon">✉️</div>
                <div>
                  <div class="contact-method-label">Courrier Électronique</div>
                  <div class="contact-method-val">Miamicieuse@gmail.com</div>
                </div>
              </a>

              <div class="contact-method-entry">
                <div class="contact-method-icon">📍</div>
                <div>
                  <div class="contact-method-label">Localisation de l'Atelier</div>
                  <div class="contact-method-val">Pétion-Ville, Haïti</div>
                </div>
              </div>

              <div class="contact-method-entry">
                <div class="contact-method-icon">⏰</div>
                <div>
                  <div class="contact-method-label">Horaires de Traitement</div>
                  <div class="contact-method-val">Lun - Sam : 8h00 - 19h00<br>Dimanche : 9h00 - 15h00</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire Droite (White Card) -->
          <div class="contact-form-box">
            <span class="hero-banner-tag" style="background:#fce8f3; color:#aa005e; border-color:#fad1e8; margin-bottom:12px;">MESSAGE EN LIGNE</span>
            <h3 style="font-size:1.6rem; color:#12351c; margin:0 0 8px; font-weight:900;">Envoyez-nous un message</h3>
            <p style="color:#556758; font-size:14px; margin:0 0 24px; line-height:1.5;">Remplissez ce formulaire et notre service client vous répondra dans un délai de 24h ouvrées.</p>

            <form onsubmit="window.miamApp.handleContactSubmit(event)" id="contact-page-form">
              <div class="contact-form-row">
                <div class="contact-form-group">
                  <label for="contact-input-name">Nom complet *</label>
                  <input type="text" id="contact-input-name" required class="contact-form-control" placeholder="Ex: Jean-Baptiste Paul">
                </div>
                <div class="contact-form-group">
                  <label for="contact-input-email">Adresse e-mail *</label>
                  <input type="email" id="contact-input-email" required class="contact-form-control" placeholder="nom@exemple.com">
                </div>
              </div>

              <div class="contact-form-row">
                <div class="contact-form-group">
                  <label for="contact-input-phone">Téléphone / WhatsApp</label>
                  <input type="tel" id="contact-input-phone" class="contact-form-control" placeholder="+509 ... ou +1 ...">
                </div>
                <div class="contact-form-group">
                  <label for="contact-input-subject">Sujet de votre demande</label>
                  <select id="contact-input-subject" class="contact-form-control">
                    <option value="order">Question sur une commande</option>
                    <option value="delivery">Délai ou modalité de livraison</option>
                    <option value="partnership">Partenariat & Distribution</option>
                    <option value="catering">Événement & Commande en gros</option>
                    <option value="other">Autre demande</option>
                  </select>
                </div>
              </div>

              <div class="contact-form-group">
                <label for="contact-input-message">Votre message *</label>
                <textarea id="contact-input-message" rows="5" required class="contact-form-control" style="resize:vertical;" placeholder="Précisez votre demande ou vos questions..."></textarea>
              </div>

              <button type="submit" class="btn-subpage-primary" style="width:100%; justify-content:center; padding:14px 24px; margin-top:10px;">
                <span>✉️ Envoyer le message</span>
                <span class="order-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  function renderStoryPage() {
    const container = document.getElementById('subpage-view-container');
    if (!container) return;

    container.innerHTML = `
      ${renderSubpageTopBar('Notre Histoire & Racines')}
      <header class="subpage-hero-banner">
        <div class="subpage-hero-container">
          <div class="subpage-hero-content">
            <span class="hero-banner-tag">TERROIR & HÉRITAGE</span>
            <h1 class="subpage-hero-title">Notre Histoire & <span>Nos Racines</span></h1>
            <p class="subpage-hero-desc">La passion inaltérable des saveurs authentiques d'Haïti : du Mamba torréfié au feu doux aux galettes de cassave millénaires.</p>
            <div class="subpage-hero-badges">
              <span class="subpage-hero-stat">🇭🇹 <strong>100%</strong> Terroir Haïtien</span>
              <span class="subpage-hero-stat">🔥 <strong>Torréfaction</strong> Douce & Lente</span>
              <span class="subpage-hero-stat">🌱 <strong>Zéro</strong> Conservateur Chimique</span>
            </div>
          </div>
        </div>
      </header>

      <div class="story-full-container">
        <div class="story-full-section">
          <div class="story-section-header">
            <span class="story-num-badge">01</span>
            <h2>La Genèse : Faire revivre le goût vrai</h2>
          </div>
          <p class="story-lead">Miam'cieuse est née d'un souvenir d'enfance profondément enraciné : l'odeur envoûtante des arachides fraîches que l'on torréfiait au lever du soleil dans la cour familiale en Haïti. Ce parfum chaud, boisé et toasté qui annonçait les plus doux petits-déjeuners.</p>
          <p>Face à l'omniprésence des pâtes industrielles saturées d'huiles hydrogénées et de conservateurs, nous avons pris un engagement solennel : <strong>rendre hommage au terroir haïtien en proposant des spécialités 100% artisanales, pures et généreuses.</strong></p>
        </div>

        <div class="story-full-section">
          <div class="story-section-header">
            <span class="story-num-badge">02</span>
            <h2>L'Art de la Torréfaction et le Piman Bouk</h2>
          </div>
          <p>Notre Mamba n'est pas un simple beurre de cacahuète. Les arachides proviennent de nos terroirs locaux réputés pour leur saveur concentrée. Elles sont triées une à une à la main, puis torréfiées lentement sur feu doux dans de traditionnels chaudrons en fonte.</p>
          <blockquote class="story-quote">
            « Le Mamba, c'est l'essence du matin haïtien : la force de la terre, le croquant du pain ou de la cassave, et cette pointe de piment bouk qui fait frissonner le cœur. »
          </blockquote>
          <p>Pour notre version relevée, nous incorporons le véritable piment habanero haïtien (piman bouk). Le mariage entre l'onctuosité des cacahuètes et la chaleur piquante crée une explosion aromatique inimitable.</p>
        </div>

        <div class="story-full-section">
          <div class="story-section-header">
            <span class="story-num-badge">03</span>
            <h2>La Kasav : Héritage sacré des Taïnos</h2>
          </div>
          <p>La cassave (kasav) est le trésor le plus résilient de la gastronomie des Caraïbes. Travaillée à partir de la racine de manioc doux, pressée dans les règles de l'art pour éliminer l'amidon liquide puis cuite à sec sur de grandes platines fumantes, elle est naturellement sans gluten et croustille sous la dent.</p>
          <p>Manger une cassave chaude tartinée de Mamba Miam'cieuse, c'est renouer avec des siècles d'artisanat culinaire transmis de génération en génération.</p>

          <div class="story-values-grid">
            <div class="story-value-card">
              <div class="story-value-icon">🥜</div>
              <h4>100% Terroir Haïtien</h4>
              <p>Des arachides locales récoltées et transformées dans le respect des producteurs de notre île.</p>
            </div>
            <div class="story-value-card">
              <div class="story-value-icon">🔥</div>
              <h4>Torréfaction Douce</h4>
              <p>Une cuisson lente au chaudron qui préserve les nutriments, les bonnes graisses et concentre les arômes.</p>
            </div>
            <div class="story-value-card">
              <div class="story-value-icon">🌱</div>
              <h4>Zéro Conservateur</h4>
              <p>Aucune huile de palme, aucun additif artificiel. Uniquement des ingrédients sains et purs.</p>
            </div>
            <div class="story-value-card">
              <div class="story-value-icon">❤️</div>
              <h4>Fait avec Fierté</h4>
              <p>Chaque bocal et chaque galette est préparé à la main avec une exigence absolue de qualité.</p>
            </div>
          </div>
        </div>

        <!-- CTA Bottom -->
        <div class="subpage-cta-card">
          <div class="subpage-cta-content">
            <span class="subpage-cta-tag">SAVOIR-FAIRE UNIQUE</span>
            <h3>Goûtez la différence du terroir haïtien</h3>
            <p>Commandez votre pot de Mamba artisanal ou votre coffret dégustation dès maintenant et recevez-le chez vous.</p>
            <div class="subpage-cta-actions">
              <button type="button" class="btn-subpage-primary" onclick="window.miamApp.navigate('shop')">
                <span>Visiter la Boutique</span>
                <span class="order-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
              <button type="button" class="btn-subpage-secondary" onclick="window.miamApp.navigate('packs')">
                <span>Voir les Packs Gourmands</span>
                <span class="order-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderBlogPage(activeCat = 'all') {
    const container = document.getElementById('subpage-view-container');
    if (!container) return;
    subpageState.blogCat = activeCat;

    let articles = blogArticlesData;
    if (activeCat && activeCat !== 'all') {
      articles = articles.filter(a => a.category === activeCat);
    }

    const categories = ['all', ...new Set(blogArticlesData.map(a => a.category))];

    container.innerHTML = `
      ${renderSubpageTopBar('Blog & Recettes')}
      
      <header class="subpage-hero-banner blog-hero-banner">
        <div class="subpage-hero-container blog-hero-container">
          <div class="subpage-hero-content blog-hero-content">
            <span class="hero-banner-tag">JOURNAL GOURMAND</span>
            <h1 class="subpage-hero-title blog-hero-title">Le Blog & Les Recettes <span>Miam'cieuse</span></h1>
            <p class="subpage-hero-desc blog-hero-desc">Secrets de fabrication, histoires du terroir caribéen et idées de recettes faciles pour sublimer votre quotidien.</p>
            <div class="subpage-hero-badges blog-hero-badges">
              <span class="subpage-hero-stat blog-hero-stat">📚 <strong>5</strong> Articles & Recettes</span>
              <span class="subpage-hero-stat blog-hero-stat">🇭🇹 <strong>100%</strong> Terroir Haïtien</span>
              <span class="subpage-hero-stat blog-hero-stat">🥜 <strong>Secrets</strong> du Mamba</span>
            </div>
          </div>
        </div>
      </header>

      <div class="blog-main-container">
        <!-- Filtres Catégories Blog (Scrollable & Stylés comme l'accueil) -->
        <div class="blog-category-nav-wrapper">
          <div class="blog-category-nav">
            ${categories.map(cat => {
              const icon = cat === 'all' ? '✨' : (cat.includes('Culture') ? '🥜' : (cat.includes('Guides') ? '📖' : (cat.includes('Chocolat') || cat.includes('Authentiques') ? '🍫' : (cat.includes('Traditions') ? '🌽' : '💡'))));
              const label = cat === 'all' ? 'Tous les articles' : cat;
              return `
                <button type="button" class="blog-cat-btn ${cat === activeCat ? 'is-active' : ''}" onclick="window.miamApp.filterBlogCat('${cat}')">
                  <span>${icon}</span>
                  <span>${label}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Grille des Articles -->
        <div class="articles-grid">
          ${articles.map(article => `
            <article class="article-card" onclick="window.miamApp.navigate('article', '${article.id}')">
              <div class="article-card-image-wrap">
                <img src="${article.image}" alt="${article.title}" loading="lazy">
                <span class="article-meta-badge">${article.category}</span>
              </div>
              <div class="article-card-body">
                <div class="article-time-row">
                  <span>📅 ${article.date}</span>
                  <span>•</span>
                  <span>⏱️ ${article.readTime}</span>
                </div>
                <h3 class="article-card-title">${article.title}</h3>
                <p class="article-card-summary">${article.summary}</p>
                <div class="article-card-footer">
                  <span>Lire l'article & recettes</span>
                  <span class="order-arrow-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Bannière CTA dans le style de l'accueil -->
        <div class="blog-cta-card">
          <div class="blog-cta-content">
            <span class="blog-cta-tag">SAVEURS À LA MAISON</span>
            <h3>Envie d'essayer une recette chez vous ?</h3>
            <p>Retrouvez tous les ingrédients indispensables (Mamba pur, Cassave artisanale, Chocolat Pays) livrés directement à votre porte.</p>
            <button type="button" class="btn-primary" onclick="window.miamApp.navigate('shop')">
              <span>Commander les ingrédients</span>
              <span class="order-arrow-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderArticlePage(articleId) {
    const container = document.getElementById('subpage-view-container');
    if (!container) return;

    const article = blogArticlesData.find(a => a.id === articleId) || blogArticlesData[0];

    container.innerHTML = `
      <div class="subpage-top-bar">
        <div class="container subpage-top-bar-inner">
          <button type="button" class="subpage-back-btn" onclick="window.miamApp.navigate('blog')">
            <span>←</span>
            <span>Retour au blog</span>
          </button>
          <nav class="subpage-breadcrumb" aria-label="Fil d'ariane">
            <a href="#" onclick="event.preventDefault(); window.miamApp.navigate('home')">Accueil</a>
            <span>›</span>
            <a href="#" onclick="event.preventDefault(); window.miamApp.navigate('blog')">Blog & Recettes</a>
            <span>›</span>
            <span style="font-weight:700; color:#cf0072;">${article.category}</span>
          </nav>
        </div>
      </div>

      <article class="article-single-view">
        <header class="article-single-header">
          <span class="badge" style="background:#fce8f3; color:#aa005e; padding:6px 14px; border-radius:8px; font-weight:800; font-size:12px; text-transform:uppercase; margin-bottom:14px; display:inline-block;">${article.category}</span>
          <h1 class="article-single-title">${article.title}</h1>
          <div class="article-time-row" style="justify-content:center; font-size:14px; margin-bottom:24px;">
            <span>✍️ Par ${article.author}</span>
            <span>•</span>
            <span>📅 ${article.date}</span>
            <span>•</span>
            <span>⏱️ ${article.readTime}</span>
          </div>
        </header>

        <img src="${article.image}" alt="${article.title}" class="article-featured-img">

        <div class="article-rich-content">
          ${article.content}
        </div>

        <div class="blog-cta-card" style="margin-top: 50px;">
          <div class="blog-cta-content">
            <span class="blog-cta-tag">AU TERROIR HAÏTIEN</span>
            <h3>Sublimez votre table avec nos délices artisanaux</h3>
            <p>Tous les produits de cette recette sont disponibles dans notre boutique en ligne avec expédition express sécurisée.</p>
            <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:16px;">
              <button type="button" class="btn-primary" onclick="window.miamApp.navigate('shop')">
                <span>Commander les produits</span>
                <span class="order-arrow-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
              <button type="button" class="subpage-back-btn" onclick="window.miamApp.navigate('blog')" style="background:rgba(255,255,255,0.15); color:#ffffff; border-color:rgba(255,255,255,0.3);">
                ← Plus d'articles & recettes
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // ==========================================
  // API Publique window.miamApp
  // ==========================================
  window.miamApp = {
    navigate: function(route, param) {
      if (this.closeMobileMenu) this.closeMobileMenu();

      const subpageContainer = document.getElementById('subpage-view-container');
      const homeSections = document.getElementById('home-sections-wrap');

      if (route === 'home') {
        if (subpageContainer) subpageContainer.style.display = 'none';
        if (homeSections) homeSections.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(animateStatsCounters, 100);
      } else if (route === 'shop') {
        if (subpageContainer) subpageContainer.style.display = 'none';
        if (homeSections) homeSections.style.display = 'block';
        const target = document.getElementById('best-products-anchor');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (route === 'packs') {
        if (subpageContainer) subpageContainer.style.display = 'none';
        if (homeSections) homeSections.style.display = 'block';
        filterState.category = 'packs';
        renderProductsGrid();
        const target = document.getElementById('packs-anchor') || document.getElementById('best-products-anchor');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else if (route === 'story') {
        if (subpageContainer && homeSections) {
          homeSections.style.display = 'none';
          subpageContainer.style.display = 'block';
          renderStoryPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(animateStatsCounters, 100);
        }
      } else if (route === 'faq') {
        if (subpageContainer && homeSections) {
          homeSections.style.display = 'none';
          subpageContainer.style.display = 'block';
          renderFaqPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (route === 'delivery') {
        if (subpageContainer && homeSections) {
          homeSections.style.display = 'none';
          subpageContainer.style.display = 'block';
          renderDeliveryPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (route === 'contact') {
        if (subpageContainer && homeSections) {
          homeSections.style.display = 'none';
          subpageContainer.style.display = 'block';
          renderContactPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (route === 'blog') {
        if (subpageContainer && homeSections) {
          homeSections.style.display = 'none';
          subpageContainer.style.display = 'block';
          renderBlogPage();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (route === 'article') {
        if (subpageContainer && homeSections) {
          homeSections.style.display = 'none';
          subpageContainer.style.display = 'block';
          renderArticlePage(param);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        if (subpageContainer) subpageContainer.style.display = 'none';
        if (homeSections) homeSections.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },

    // Recherche Dropdown & Actions
    showSearchDropdown: function() {
      const dropdown = document.getElementById('hero-search-dropdown');
      if (dropdown) {
        renderSearchDropdown();
        dropdown.style.display = 'flex';
      }
    },

    hideSearchDropdown: function() {
      const dropdown = document.getElementById('hero-search-dropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    },

    handleSearch: function(query) {
      filterState.searchQuery = query;
      const clearBtn = document.getElementById('hero-search-clear-btn');
      if (clearBtn) {
        clearBtn.style.display = query.trim().length > 0 ? 'flex' : 'none';
      }
      renderProductsGrid();
      this.showSearchDropdown();
    },

    clearSearch: function() {
      const input = document.getElementById('hero-app-search');
      if (input) {
        input.value = '';
        input.focus();
      }
      filterState.searchQuery = '';
      const clearBtn = document.getElementById('hero-search-clear-btn');
      if (clearBtn) clearBtn.style.display = 'none';
      renderProductsGrid();
      this.showSearchDropdown();
    },

    quickSearch: function(term) {
      const input = document.getElementById('hero-app-search');
      if (input) input.value = term;
      this.handleSearch(term);
      this.submitSearch();
    },

    submitSearch: function() {
      this.hideSearchDropdown();
      const target = document.getElementById('best-products-anchor');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },

    selectSearchResult: function(id) {
      this.hideSearchDropdown();
      this.openQuickProduct(id);
    },

    handleSearchKey: function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.submitSearch();
      } else if (e.key === 'Escape') {
        this.hideSearchDropdown();
      }
    },

    // Modal Filtre
    openFilterModal: function() {
      const backdrop = document.getElementById('filter-modal-backdrop');
      if (backdrop) {
        updateFilterUI();
        backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    },

    closeFilterModal: function() {
      const backdrop = document.getElementById('filter-modal-backdrop');
      if (backdrop) {
        backdrop.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    },

    toggleFilterModal: function() {
      const backdrop = document.getElementById('filter-modal-backdrop');
      if (backdrop && backdrop.classList.contains('is-open')) {
        this.closeFilterModal();
      } else {
        this.openFilterModal();
      }
    },

    setFilterCategory: function(cat, el) {
      filterState.category = cat;
      updateFilterUI();
    },

    setFilterPrice: function(price) {
      filterState.maxPrice = parseFloat(price);
      updateFilterUI();
    },

    setFilterSort: function(sort, el) {
      filterState.sortBy = sort;
      updateFilterUI();
    },

    toggleFilterBestseller: function(checked) {
      filterState.bestsellerOnly = !!checked;
      updateFilterUI();
    },

    toggleFilterInStock: function(checked) {
      filterState.inStockOnly = !!checked;
      updateFilterUI();
    },

    resetAllFilters: function() {
      filterState = {
        category: 'all',
        searchQuery: '',
        maxPrice: 40,
        sortBy: 'popular',
        bestsellerOnly: false,
        inStockOnly: true
      };
      const searchInput = document.getElementById('hero-app-search');
      if (searchInput) searchInput.value = '';
      renderProductsGrid();
      showToast('Filtres réinitialisés');
    },

    applyFiltersAndClose: function() {
      renderProductsGrid();
      this.closeFilterModal();
      const target = document.getElementById('best-products-anchor');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      const matches = getFilteredProducts().length;
      showToast(`${matches} délice${matches > 1 ? 's' : ''} trouvé${matches > 1 ? 's' : ''} !`);
    },

    // Témoignages Vidéo Instagram
    openVideoTestimonial: function(index) {
      const item = videoTestimonials[index];
      if (!item) return;

      const backdrop = document.getElementById('video-player-backdrop');
      const mediaWrap = document.getElementById('video-player-media');
      const avatar = document.getElementById('video-player-avatar');
      const author = document.getElementById('video-player-author');
      const badge = document.getElementById('video-player-product-badge');
      const quote = document.getElementById('video-player-quote');
      const shopBtn = document.getElementById('video-player-add-btn');
      const igLink = document.getElementById('video-player-ig-link');

      if (!backdrop) return;

      if (avatar) avatar.src = item.avatar;
      if (author) author.textContent = `${item.author} (${item.handle})`;
      if (badge) badge.textContent = item.productName;
      if (quote) quote.textContent = item.quote;
      if (igLink) igLink.href = item.instagramUrl;
      if (shopBtn) {
        shopBtn.onclick = function() {
          window.miamApp.closeVideoModal();
          window.miamApp.addProductDirectly(item.productId);
        };
      }

      if (mediaWrap) {
        if (item.videoSrc) {
          mediaWrap.innerHTML = `
            <video 
              src="${item.videoSrc}" 
              controls 
              autoplay 
              playsinline 
              style="width:100%; height:100%; max-height:65vh; object-fit:contain; background:#071f10; display:block;">
            </video>
          `;
        } else {
          const embedSrc = item.embedUrl || (item.instagramUrl ? (item.instagramUrl.replace(/\/+$/, '') + '/embed/') : '');
          if (embedSrc) {
            mediaWrap.innerHTML = `
              <iframe 
                src="${embedSrc}" 
                width="100%" 
                height="450" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true" 
                allowfullscreen="true"
                style="border:0; width:100%; min-height:440px; display:block; background:#ffffff;">
              </iframe>
            `;
          } else {
            mediaWrap.innerHTML = `
              <div style="position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#071f10; overflow:hidden;">
                <img src="${item.image}" alt="${item.productName}" style="width:100%; height:100%; object-fit:cover; opacity:0.88; filter: brightness(0.9);">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(7,31,16,0.2) 0%, rgba(7,31,16,0.65) 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; padding:20px; text-align:center;">
                  <a href="${item.instagramUrl}" target="_blank" rel="noopener" style="width:58px; height:58px; border-radius:50%; background:#cf0072; color:#ffffff; display:flex; align-items:center; justify-content:center; box-shadow:0 6px 18px rgba(207,0,114,0.45); text-decoration:none; transform:scale(1); transition:transform 0.2s, background 0.2s; border:2px solid #ffffff; padding-left:3px;" onmouseenter="this.style.transform='scale(1.08)'; this.style.background='#aa005e'" onmouseleave="this.style.transform='scale(1)'; this.style.background='#cf0072'" title="Lire sur Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
                  </a>
                  <span style="color:#ffffff; font-weight:800; font-size:13px; letter-spacing:-0.01em; text-shadow:0 2px 8px rgba(0,0,0,0.6); display:flex; align-items:center; gap:6px;">
                    Regarder sur Instagram ↗
                  </span>
                </div>
              </div>
            `;
          }
        }
      }

      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    },

    closeVideoModal: function() {
      const backdrop = document.getElementById('video-player-backdrop');
      const mediaWrap = document.getElementById('video-player-media');
      if (mediaWrap) {
        const vid = mediaWrap.querySelector('video');
        if (vid) vid.pause();
        mediaWrap.innerHTML = '';
      }
      if (backdrop) {
        backdrop.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    },

    filterCategory: function(cat, el) {
      filterState.category = cat;
      renderProductsGrid();
      const target = document.getElementById('best-products-anchor');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    },

    filterByCategory: function(cat) {
      this.filterCategory(cat);
    },

    toggleFavorite: function(id, btn) {
      const idx = favorites.indexOf(id);
      if (idx > -1) {
        favorites.splice(idx, 1);
        if (btn) btn.classList.remove('is-active');
        showToast('Retiré des favoris');
      } else {
        favorites.push(id);
        if (btn) btn.classList.add('is-active');
        showToast('Ajouté aux favoris ❤️');
      }
      try {
        localStorage.setItem('miamcieuse_favs', JSON.stringify(favorites));
      } catch(e) {}
    },

    openCart: function() {
      openDrawer();
    },

    openMobileMenu: function() {
      const mobDrawer = document.getElementById('mobile-nav-backdrop');
      if (mobDrawer) {
        mobDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    },

    closeMobileMenu: function() {
      const mobDrawer = document.getElementById('mobile-nav-backdrop');
      if (mobDrawer) {
        mobDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    },

    toggleShopDropdown: function(event) {
      if (event) event.preventDefault();
      const wrap = document.getElementById('shop-menu-dropdown-wrap');
      const btn = document.getElementById('shop-menu-dropdown-btn');
      if (wrap) {
        const isOpen = wrap.classList.toggle('is-open');
        if (btn) {
          btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      }
    },

    selectCollection: function(catId) {
      if (this.closeMobileMenu) this.closeMobileMenu();
      const wrap = document.getElementById('shop-menu-dropdown-wrap');
      if (wrap) wrap.classList.remove('is-open');

      const subpageContainer = document.getElementById('subpage-view-container');
      const homeSections = document.getElementById('home-sections-wrap');
      if (subpageContainer) subpageContainer.style.display = 'none';
      if (homeSections) homeSections.style.display = 'block';

      if (catId === 'packs') {
        filterState.category = 'packs';
        renderProductsGrid();
        const target = document.getElementById('packs-anchor') || document.getElementById('best-products-anchor');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else {
        filterState.category = catId || 'all';
        renderProductsGrid();
        const target = document.getElementById('best-products-anchor');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    },

    selectDropdownProduct: function(id) {
      if (this.closeMobileMenu) this.closeMobileMenu();
      const wrap = document.getElementById('shop-menu-dropdown-wrap');
      if (wrap) wrap.classList.remove('is-open');
      this.viewProduct(id);
    },

    addToCart: function(id) {
      const p = products.find(prod => prod.id === id);
      if (!p) return;
      const exist = cart.find(item => item.id === id);
      if (exist) {
        exist.quantity += 1;
      } else {
        cart.push({
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.images[0],
          quantity: 1
        });
      }
      saveCart();
      showToast(`« ${p.cardTitle || p.name} » ajouté au panier ! 🥜`);
    },

    addProductDirectly: function(id) {
      this.addToCart(id);
      openDrawer();
    },

    updateCartQty: function(id, qty) {
      const item = cart.find(i => i.id === id);
      if (!item) return;
      if (qty <= 0) {
        cart = cart.filter(i => i.id !== id);
      } else {
        item.quantity = qty;
      }
      saveCart();
    },

    removeFromCart: function(id) {
      cart = cart.filter(i => i.id !== id);
      saveCart();
      showToast('Article retiré du panier');
    },

    viewProduct: function(id) {
      this.openQuickProduct(id);
    },

    openQuickProduct: function(id) {
      const p = products.find(prod => prod.id === id);
      if (!p) return;
      const backdrop = document.getElementById('quickview-modal-backdrop');
      const content = document.getElementById('quickview-modal-content');
      if (!backdrop || !content) return;

      content.innerHTML = `
        <button class="modal-close-btn" onclick="window.miamApp.closeQuickView()">✕</button>
        <div style="padding: 2.5rem; display: grid; grid-template-columns: 1fr 1.1fr; gap: 2rem;">
          <div style="border-radius: var(--radius-lg); overflow: hidden; background: #FFF5EC; aspect-ratio: 1/1;">
            <img src="${p.images[0]}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div>
            <span class="badge badge-pink" style="margin-bottom: 0.5rem;">${p.badge || 'Spécialité'}</span>
            <h2 style="font-size: 1.8rem; margin-bottom: 0.35rem; color: var(--color-dark);">${p.name}</h2>
            <p style="color: var(--color-pink); font-weight: 700; margin-bottom: 0.75rem;">${p.subtitle}</p>
            <div style="color: #F59E0B; margin-bottom: 1rem;">★★★★★ <span style="color: #333; font-weight: 700;">${p.rating}</span></div>
            <div style="font-size: 2rem; font-weight: 900; color: var(--color-dark); margin-bottom: 1.25rem;">
              ${p.price.toFixed(2)} €
            </div>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #555; margin-bottom: 1.75rem;">
              ${p.description}
            </p>
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn-primary btn-lg" onclick="window.miamApp.addProductDirectly('${p.id}'); window.miamApp.closeQuickView();">
                <span>🛒</span> Ajouter au panier
              </button>
              <a href="https://wa.me/50939424419?text=Bonjour%20Miam'cieuse%20👋%20Je%20souhaite%20commander%20:%20${encodeURIComponent(p.name)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    },

    closeQuickView: function() {
      const backdrop = document.getElementById('quickview-modal-backdrop');
      if (backdrop) {
        backdrop.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    },

    closeCart: function() {
      closeDrawer();
    },

    switchLang: function(lang) {
      currentLang = lang;
      try { localStorage.setItem('miamcieuse_lang', lang); } catch(e){}
      showToast(lang === 'ht' ? 'Lang chanje an Kreyòl Ayisyen 🇭🇹' : 'Langue changée en Français 🇫🇷');
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
      });
    },

    setHeroSlide: function(index) {
      const slides = document.querySelectorAll('#hero-banner-slider .hero-slide');
      const dots = document.querySelectorAll('#hero-banner-slider .hero-dot');
      if (!slides.length) return;
      const nextIdx = (index + slides.length) % slides.length;
      slides.forEach(function(slide, idx) {
        slide.classList.toggle('is-active', idx === nextIdx);
      });
      dots.forEach(function(dot, idx) {
        dot.classList.toggle('is-active', idx === nextIdx);
      });
    },

    nextHeroSlide: function() {
      const slides = document.querySelectorAll('#hero-banner-slider .hero-slide');
      if (!slides.length) return;
      let currentIdx = 0;
      slides.forEach(function(slide, idx) {
        if (slide.classList.contains('is-active')) currentIdx = idx;
      });
      this.setHeroSlide(currentIdx + 1);
    },

    prevHeroSlide: function() {
      const slides = document.querySelectorAll('#hero-banner-slider .hero-slide');
      if (!slides.length) return;
      let currentIdx = 0;
      slides.forEach(function(slide, idx) {
        if (slide.classList.contains('is-active')) currentIdx = idx;
      });
      this.setHeroSlide(currentIdx - 1);
    },

    handleNewsletter: function(e) {
      e.preventDefault();
      showToast('🎉 Félicitations ! Votre code -10% (MIAM10) est validé !');
      e.target.reset();
    },

    toggleFaqItem: function(id) {
      const el = document.getElementById('faq-item-' + id);
      if (el) {
        el.classList.toggle('is-open');
      }
    },

    filterFaqCat: function(cat) {
      renderFaqPage(cat, subpageState.faqSearch);
    },

    searchFaq: function(query) {
      renderFaqPage(subpageState.faqCat, query);
    },

    handleContactSubmit: function(e) {
      if (e) e.preventDefault();
      const form = document.getElementById('contact-page-form');
      const nameInput = document.getElementById('contact-input-name');
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Cher gourmand';
      if (form) form.reset();
      showToast(`Merci ${name} ! Votre message a bien été envoyé. Notre équipe vous répondra sous 24h.`);
    },

    filterBlogCat: function(cat) {
      renderBlogPage(cat);
    },

    handleLogoClick: function(e) {
      if (e) e.preventDefault();
      if (this.closeMobileMenu) this.closeMobileMenu();
      const subpageContainer = document.getElementById('subpage-view-container');
      const isSubpageOpen = subpageContainer && subpageContainer.style.display !== 'none';
      if (isSubpageOpen || window.scrollY > 80) {
        this.navigate('home');
      } else {
        window.location.reload();
      }
    },
    toggleTestimonialsMarquee: function() {
      const track = document.getElementById('testimonials-marquee-track');
      const icon = document.getElementById('testimonials-pause-icon');
      const text = document.getElementById('testimonials-pause-text');
      if (!track) return;
      
      const isPaused = track.classList.toggle('is-paused');
      if (icon && text) {
        if (isPaused) {
          icon.textContent = '▶️';
          text.textContent = 'Reprendre le défilement';
        } else {
          icon.textContent = '⏸️';
          text.textContent = 'Mettre en pause';
        }
      }
    },
    animateStatsCounters: function() {
      animateStatsCounters();
    }
  };

  // Animation dynamique des chiffres clés (Stats Counters)
  function animateStatsCounters() {
    const statElements = document.querySelectorAll('.stat-number[data-counter]');
    if (!statElements.length) return;

    function runCounter(el) {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';

      const target = parseFloat(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = ease * target;

        if (decimals > 0) {
          el.textContent = prefix + currentVal.toFixed(decimals) + suffix;
        } else {
          el.textContent = prefix + Math.floor(currentVal) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          if (decimals > 0) {
            el.textContent = prefix + target.toFixed(decimals) + suffix;
          } else {
            el.textContent = prefix + target + suffix;
          }
        }
      }

      requestAnimationFrame(update);
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      statElements.forEach(el => {
        if (el.dataset.animated !== 'true') {
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          el.textContent = prefix + (0).toFixed(decimals) + suffix;
          observer.observe(el);
        }
      });
    } else {
      statElements.forEach(runCounter);
    }
  }

  var heroSliderTimer = null;
  function initHeroSlider() {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
    const slider = document.getElementById('hero-banner-slider');
    if (!slider) return;

    heroSliderTimer = setInterval(function() {
      if (window.miamApp && window.miamApp.nextHeroSlide) {
        window.miamApp.nextHeroSlide();
      }
    }, 5000);

    slider.onmouseenter = function() {
      if (heroSliderTimer) clearInterval(heroSliderTimer);
    };
    slider.onmouseleave = function() {
      if (heroSliderTimer) clearInterval(heroSliderTimer);
      heroSliderTimer = setInterval(function() {
        if (window.miamApp && window.miamApp.nextHeroSlide) {
          window.miamApp.nextHeroSlide();
        }
      }, 5000);
    };

    // Support du glisser / swipe tactile sur le hero banner
    let touchStartX = 0;
    let touchEndX = 0;
    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        window.miamApp.nextHeroSlide();
      } else if (touchEndX - touchStartX > 45) {
        window.miamApp.prevHeroSlide();
      }
    }, { passive: true });
  }

  // Support du drag-to-scroll sur les catégories
  function initCategoryDragScroll() {
    document.querySelectorAll('.category-circles-scroll').forEach(slider => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      slider.addEventListener('mousedown', function(e) {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', function() {
        isDown = false;
      });
      slider.addEventListener('mouseup', function() {
        isDown = false;
      });
      slider.addEventListener('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  }

  // Initialisation des écouteurs au chargement du DOM
  document.addEventListener('DOMContentLoaded', function() {
    updateCartUI();
    renderProductsGrid();
    initHeroSlider();
    initCategoryDragScroll();
    animateStatsCounters();

    // Toggle Panier
    document.querySelectorAll('.cart-toggle-btn').forEach(b => {
      b.addEventListener('click', function(e) {
        e.preventDefault();
        openDrawer();
      });
    });

    const closeBtn = document.getElementById('cart-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) closeDrawer();
      });
    }

    // Modal Quick View
    const quickBackdrop = document.getElementById('quickview-modal-backdrop');
    if (quickBackdrop) {
      quickBackdrop.addEventListener('click', function(e) {
        if (e.target === quickBackdrop) window.miamApp.closeQuickView();
      });
    }

    // Modal Filtres
    const filterBackdrop = document.getElementById('filter-modal-backdrop');
    if (filterBackdrop) {
      filterBackdrop.addEventListener('click', function(e) {
        if (e.target === filterBackdrop) window.miamApp.closeFilterModal();
      });
    }

    // Modal Lecteur Vidéo
    const videoBackdrop = document.getElementById('video-player-backdrop');
    if (videoBackdrop) {
      videoBackdrop.addEventListener('click', function(e) {
        if (e.target === videoBackdrop) window.miamApp.closeVideoModal();
      });
    }

    // Fermeture du dropdown de recherche au clic à l'extérieur
    document.addEventListener('click', function(e) {
      const searchWrap = document.getElementById('hero-search-input-wrap');
      if (searchWrap && !searchWrap.contains(e.target)) {
        window.miamApp.hideSearchDropdown();
      }
    });

    // Touche Echap
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        window.miamApp.hideSearchDropdown();
        window.miamApp.closeFilterModal();
        window.miamApp.closeQuickView();
        window.miamApp.closeVideoModal();
        closeDrawer();
      }
    });

    // Bouton Retour en Haut
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }, { passive: true });

      backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Sticky Header au défilement
    window.addEventListener('scroll', function() {
      const h = document.getElementById('site-header');
      if (h) {
        if (window.scrollY > 30) h.classList.add('is-scrolled');
        else h.classList.remove('is-scrolled');
      }
    }, { passive: true });

    // Menu mobile
    const mobBtn = document.getElementById('mobile-menu-btn');
    const mobDrawer = document.getElementById('mobile-nav-backdrop');
    const mobClose = document.getElementById('mobile-nav-close-btn');
    if (mobBtn && mobDrawer) {
      mobBtn.addEventListener('click', function() {
        mobDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
      const closeMob = function() {
        mobDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      };
      if (mobClose) mobClose.addEventListener('click', closeMob);
      mobDrawer.addEventListener('click', function(e) {
        if (e.target === mobDrawer) closeMob();
      });
      document.querySelectorAll('.mobile-nav-item:not(.menu-dropdown-toggle)').forEach(item => item.addEventListener('click', closeMob));
    }
  });
})();
