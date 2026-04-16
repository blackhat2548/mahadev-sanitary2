/* ==========================================================================
   MAHADEV SANITARY — PRODUCTS PAGE JS
   Category filtering + enquire modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');

  if (filterTabs.length === 0) return;

  /* ---------- FILTER TABS ---------- */
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const category = this.getAttribute('data-filter');

      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Filter products with fade animation
      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          card.classList.remove('is-hidden');
          // Re-trigger AOS if used
          card.style.display = '';
        } else {
          card.classList.add('is-hidden');
          // Hide fully after animation
          setTimeout(() => {
            if (card.classList.contains('is-hidden')) {
              card.style.display = 'none';
            }
          }, 400);
        }
      });

      // Refresh tilt after filter
      setTimeout(() => {
        if (typeof VanillaTilt !== 'undefined') {
          productCards.forEach(card => {
            if (card.vanillaTilt) card.vanillaTilt.destroy();
          });
          const visibleCards = document.querySelectorAll('.product-card:not(.is-hidden)');
          VanillaTilt.init(visibleCards, {
            max: 6,
            speed: 600,
            glare: true,
            'max-glare': 0.12,
            scale: 1.02,
          });
        }
      }, 450);
    });
  });

  /* ---------- ENQUIRE/BUY BUTTON ---------- */
  const enquireBtns = document.querySelectorAll('.product-cta');
  enquireBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openStoreModal();
    });
  });
});
