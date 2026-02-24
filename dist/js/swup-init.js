// Wait for Swup to be available and initialize
function initSwup() {
  if (typeof Swup === 'undefined') {
    console.error('Swup not loaded yet');
    return;
  }

  // Initialize Swup for smooth page transitions
  const swup = new Swup({
    containers: ['#swup'],
    animationSelector: '[class*="transition-"]',
    linkSelector: 'a[href*=".html"]:not([target]):not([data-no-swup])',
  });

  // Keep track of menu button state
  let menuBtn;
  let mobileMenu;
  let showMenu = false;

  // Initialize menu functionality (extracted to be reusable)
  function initializeMenu() {
    menuBtn = document.querySelector('.menu-btn');
    mobileMenu = document.querySelector('.mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    // Remove any existing listeners by cloning and replacing
    const newMenuBtn = menuBtn.cloneNode(true);
    menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);
    menuBtn = newMenuBtn;
    
    // Close menu when navigating
    showMenu = false;
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    
    menuBtn.addEventListener('click', function toggleMenu() {
      if (!showMenu) {
        menuBtn.classList.add('open');
        mobileMenu.classList.add('open');
        showMenu = true;
      } else {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        showMenu = false;
      }
    });
  }

  // Update the active nav item based on the current page URL
  function updateActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach((item) => {
      const link = item.querySelector('a');
      if (!link) return;
      const linkPage = link.getAttribute('href').split('/').pop();
      const isActive = linkPage === currentPath || (currentPath === '' && linkPage === 'index.html');
      item.classList.toggle('current', isActive);
    });
  }

  // Reinitialize menu functionality after page transition
  swup.hooks.on('content:replace', () => {
    initializeMenu();
    updateActiveNav();
  });

  // Initialize menu on first load
  initializeMenu();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwup);
} else {
  initSwup();
}
