// Wait for Swup to be available and initialize
function initSwup() {
  // #region agent log
  fetch('http://127.0.0.1:7498/ingest/77c77376-6489-4a6e-a680-7c01fac519e2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'16d5bd'},body:JSON.stringify({sessionId:'16d5bd',location:'swup-init.js:initSwup',message:'initSwup called',data:{swupDefined:typeof Swup!=='undefined',url:location.href,readyState:document.readyState},timestamp:Date.now(),hypothesisId:'H-B'})}).catch(()=>{});
  // #endregion

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

  // #region agent log
  const grainEl = document.getElementById('grain-root');
  fetch('http://127.0.0.1:7498/ingest/77c77376-6489-4a6e-a680-7c01fac519e2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'16d5bd'},body:JSON.stringify({sessionId:'16d5bd',location:'swup-init.js:afterSwupNew',message:'Swup instance created',data:{swupContainerFound:!!document.getElementById('swup'),grainRootFound:!!grainEl,grainRootChildCount:grainEl?grainEl.childElementCount:null},timestamp:Date.now(),hypothesisId:'H-A'})}).catch(()=>{});
  // #endregion

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

  swup.hooks.on('visit:start', (visit) => {
    // #region agent log
    fetch('http://127.0.0.1:7498/ingest/77c77376-6489-4a6e-a680-7c01fac519e2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'16d5bd'},body:JSON.stringify({sessionId:'16d5bd',location:'swup-init.js:visit:start',message:'Swup visit started',data:{to:visit&&visit.to&&visit.to.url},timestamp:Date.now(),hypothesisId:'H-B'})}).catch(()=>{});
    // #endregion
  });

  // Reinitialize menu functionality after page transition
  swup.hooks.on('content:replace', () => {
    // #region agent log
    const grainAfter = document.getElementById('grain-root');
    fetch('http://127.0.0.1:7498/ingest/77c77376-6489-4a6e-a680-7c01fac519e2',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'16d5bd'},body:JSON.stringify({sessionId:'16d5bd',location:'swup-init.js:content:replace',message:'content replaced',data:{grainRootFound:!!grainAfter,grainRootChildCount:grainAfter?grainAfter.childElementCount:null,url:location.href},timestamp:Date.now(),hypothesisId:'H-C'})}).catch(()=>{});
    // #endregion
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
