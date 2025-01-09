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

// Function to hide Flutter’s loader, then show your custom Lottie
function hideFlutterLoaderAndShowLottie() {
    // 1. Attempt to hide any existing Flutter loader
    const flutterLoader = document.getElementById('loader'); // or whatever ID Flutter uses
    if (flutterLoader) {
        flutterLoader.style.display = 'none'; 
    }

    // 2. Now start up your Lottie animation
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://cdn.lottielab.com/l/DCJm8qB85FqDuW.json',
    });
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    hideFlutterLoaderAndShowLottie();
});
