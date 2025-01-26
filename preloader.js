// preloader.js

// Ensure Lottie is loaded
if (typeof lottie === 'undefined') {
    console.error('Lottie library is not loaded.');
} else {
    console.log('Lottie library loaded successfully.');

    // Create an overlay container
    const overlay = document.createElement('div');
    overlay.id = 'customLottieLoader';
    overlay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 9999;
    `;

    // Create a container for the Lottie animation
    const lottieContainer = document.createElement('div');
    lottieContainer.id = 'lottieContainer';
    lottieContainer.style.cssText = `
        width: 200px;
        height: 200px;
        position: relative;
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(lottieContainer);

    function hideFlutterLoaderAndShowLottie() {
        console.log('Hiding Flutter loader and initializing Lottie animation.');

        const flutterLoader = document.getElementById('loader');
        if (flutterLoader) {
            flutterLoader.style.display = 'none';
            console.log('Flutter loader hidden.');
        } else {
            console.warn('Flutter loader element not found.');
        }

        const animation = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://cdn.lottielab.com/l/DCJm8qB85FqDuW.json',
        });

        // Correct Lottie event (if needed)
        animation.addEventListener('DOMLoaded', () => {
            console.log('Lottie animation loaded.');
        });
    }

    // Ensure both arguments are passed
    document.addEventListener('DOMContentLoaded', hideFlutterLoaderAndShowLottie);
}
