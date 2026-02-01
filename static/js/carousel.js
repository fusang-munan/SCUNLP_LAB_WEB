// Carousel functionality
(function() {
  'use strict';

  function initCarousel() {
    const carouselSection = document.querySelector('.home-carousel-section');
    if (!carouselSection) return;

    const slides = carouselSection.querySelectorAll('.carousel-slide');
    const indicators = carouselSection.querySelectorAll('.carousel-indicator');
    const prevBtn = carouselSection.querySelector('.carousel-prev');
    const nextBtn = carouselSection.querySelector('.carousel-next');

    if (slides.length === 0) return;

    // Apply custom object-position from data-position attribute
    slides.forEach(function(slide) {
      const img = slide.querySelector('img');
      const position = slide.getAttribute('data-position');
      if (img && position) {
        img.style.objectPosition = position;
      }
    });

    let currentSlide = 0;
    let autoplayInterval;
    const AUTOPLAY_DELAY = 3000; // 3 seconds

    function goToSlide(index) {
      // Remove active class from current slide and indicator
      slides[currentSlide].classList.remove('active');
      indicators[currentSlide].classList.remove('active');

      // Update current slide index
      currentSlide = index;

      // Add active class to new slide and indicator
      slides[currentSlide].classList.add('active');
      indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }

    function prevSlide() {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(prev);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Event listeners for navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        prevSlide();
        stopAutoplay();
        // Restart autoplay after user interaction
        setTimeout(startAutoplay, AUTOPLAY_DELAY);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        nextSlide();
        stopAutoplay();
        // Restart autoplay after user interaction
        setTimeout(startAutoplay, AUTOPLAY_DELAY);
      });
    }

    // Event listeners for indicators
    indicators.forEach(function(indicator, index) {
      indicator.addEventListener('click', function() {
        goToSlide(index);
        stopAutoplay();
        // Restart autoplay after user interaction
        setTimeout(startAutoplay, AUTOPLAY_DELAY);
      });
    });

    // Pause autoplay on hover
    carouselSection.addEventListener('mouseenter', stopAutoplay);
    carouselSection.addEventListener('mouseleave', startAutoplay);

    // Pause autoplay when page is not visible
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        stopAutoplay();
        setTimeout(startAutoplay, AUTOPLAY_DELAY);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopAutoplay();
        setTimeout(startAutoplay, AUTOPLAY_DELAY);
      }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselSection.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselSection.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          nextSlide();
        } else {
          // Swipe right - previous slide
          prevSlide();
        }
        stopAutoplay();
        setTimeout(startAutoplay, AUTOPLAY_DELAY);
      }
    }

    // Start autoplay
    startAutoplay();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
