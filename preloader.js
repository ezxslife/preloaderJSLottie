// preloader.js
if (typeof lottie === 'undefined') {
  console.error('Lottie library not loaded!');
} else {
  console.log('Lottie loaded successfully');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'customLottieLoader';
  
  // Create animation container
  const lottieContainer = document.createElement('div');
  lottieContainer.style.cssText = `
    width: 200px;
    height: 200px;
    position: relative;
  `;

  // Append elements
  document.body.appendChild(overlay);
  overlay.appendChild(lottieContainer);

  function initializePreloader() {
    console.log('Starting custom preloader');

    // Hide Flutter's default loader
    const flutterLoader = document.getElementById('loading');
    if (flutterLoader) {
      flutterLoader.style.display = 'none';
      console.log('Hidden Flutter loader');
    }

    // Load Lottie animation
    const animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://cdn.lottielab.com/l/DCJm8qB85FqDuW.json'
    });

    // Handle animation load
    animation.addEventListener('data_ready', () => {
      console.log('Lottie animation ready');
      // Optional: Hide overlay after animation
      // overlay.style.display = 'none';
    });
  }

  // Safe initialization
  if (document.readyState === 'complete') {
    initializePreloader();
  } else {
    document.addEventListener('DOMContentLoaded', initializePreloader);
  }
}
