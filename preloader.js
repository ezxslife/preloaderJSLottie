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
        z-index: 999;
    `;

    // Create a container for the Lottie animation
    const lottieContainer = document.createElement('div');
    lottieContainer.id = 'lottieContainer';
    lottieContainer.style.cssText = `
        max-width: 300px;
        max-height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    // Append containers to the document body
    document.body.appendChild(overlay);
    document.body.appendChild(lottieContainer);

    // Function to hide Flutter’s loader and show the Lottie animation
    function hideFlutterLoaderAndShowLottie() {
        console.log('Hiding Flutter loader and initializing Lottie animation.');

        // Attempt to hide any existing Flutter loader
        const flutterLoader = document.getElementById('loader'); // Adjust the ID if different
        if (flutterLoader) {
            flutterLoader.style.display = 'none';
            console.log('Flutter loader hidden.');
        } else {
            console.warn('Flutter loader element with ID "loader" not found.');
        }

        // Initialize the Lottie animation
        lottie.loadAnimation({
            container: lottieContainer, // the container element
            renderer: 'svg', // Use SVG rendering
            loop: true, // Enable looping
            autoplay: true, // Enable autoplay
            path: 'https://cdn.lottielab.com/l/DCJm8qB85FqDuW.json', // Your Lottie JSON URL
        });

        console.log('Lottie animation initialized.');
    }

    // Wait for the DOM to fully load before initializing
    document.addEventListener('DOMContentLoaded', hideFlutterLoaderAndShowLottie);
}
