
// Utility to handle intersection observer animations
// This replaces the missing inview module

export const initInViewAnimations = () => {
  // Select all elements with data-animate attribute
  const elements = document.querySelectorAll('[data-animate]');
  
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the class that triggers the animation
        entry.target.classList.add('inview-visible');
        
        // Handle stagger delays if present
        const delay = entry.target.getAttribute('data-delay') || 0;
        if (delay) {
          entry.target.style.transitionDelay = `${delay}s`;
        }
        
        // Handle custom duration if present
        const duration = entry.target.getAttribute('data-duration');
        if (duration) {
          entry.target.style.setProperty('--inview-duration', `${duration}s`);
        }
        
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
  });

  elements.forEach((el) => {
    // Add initial class to hide/prepare element
    el.classList.add('inview-init');
    
    // Set initial styles based on animation type
    const type = el.getAttribute('data-animate');
    switch(type) {
      case 'fade':
        el.style.opacity = '0';
        break;
      case 'slide':
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        break;
      case 'scale':
        el.style.opacity = '0';
        el.style.transform = 'scale(0.95)';
        break;
      default:
        el.style.opacity = '0';
    }
    
    observer.observe(el);
  });
  
  // Store observer on window to clean up later if needed
  window.__inviewObserver = observer;
};

export const destroyInViewAnimations = () => {
  if (window.__inviewObserver) {
    window.__inviewObserver.disconnect();
    window.__inviewObserver = null;
  }
};
