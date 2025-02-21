// preloader.js
(function () {
  // Check if Lottie is loaded
  if (typeof lottie === 'undefined') {
    console.error('Lottie library not loaded!');
    return;
  }
  console.log('Lottie loaded successfully');

  // Create overlay element for the preloader
  const overlay = document.createElement('div');
  overlay.id = 'customLottieLoader';
  // Force dark background using inline style with !important
  overlay.style.setProperty('background-color', 'rgba(0, 0, 0, 0.7)', 'important');

  // Create container for the Lottie animation
  const lottieContainer = document.createElement('div');
  lottieContainer.style.cssText = `
    width: 200px;
    height: 200px;
    position: relative;
  `;

  // Append the container to the overlay and the overlay to the document body
  overlay.appendChild(lottieContainer);
  document.body.appendChild(overlay);

  // Function to initialize the custom preloader
  function initializePreloader() {
    console.log('Starting custom preloader');

    // Hide Flutter's default loader if it exists
    const flutterLoader = document.getElementById('loading');
    if (flutterLoader) {
      flutterLoader.style.display = 'none';
      console.log("Hidden Flutter's loader");
    }

    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://cdn.lottielab.com/l/DCJm8qB85FqDuW.json'
    });

    // Attach an event listener to know when the animation is loaded.
    if (typeof animation.addEventListener === 'function') {
      animation.addEventListener('DOMLoaded', () => {
        console.log('Lottie animation loaded (DOMLoaded event)');
        // Optional: Hide overlay after the animation has loaded
        // overlay.style.display = 'none';
      });
    } else {
      console.warn('The animation object does not support addEventListener.');
    }
  }

  // Initialize the preloader once the DOM is ready
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initializePreloader();
  } else {
    document.addEventListener('DOMContentLoaded', initializePreloader);
  }
})();
