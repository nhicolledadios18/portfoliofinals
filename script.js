document.addEventListener('DOMContentLoaded', function() {
  // Add animation to sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      if (isInViewport(section)) {
          section.classList.add('animated');
      }
  });

  // Check if element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Add animation when section comes into viewport
  window.addEventListener('scroll', function() {
      sections.forEach(section => {
          if (isInViewport(section)) {
              section.classList.add('animated');
          }
      });
  });
});
