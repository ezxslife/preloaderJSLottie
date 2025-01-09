// Create an overlay container
const overlay = document.createElement('div');
overlay.id = 'loader';
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
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append containers to the document body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to hide the overlay and display the Lottie animation
function hideOverlay() {
    overlay.style.display = 'none'; // Hide the overlay
    lottie.loadAnimation({
        container: lottieContainer, // the container element
        renderer: 'svg', // Use SVG rendering
        loop: true, // Enable looping
        autoplay: true, // Enable autoplay
        path: 'https://cdn.lottielab.com/l/DCJm8qB85FqDuW.json', // Replace with your Lottie JSON URL
    });
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    hideOverlay(); // Initialize the Lottie animation after DOM is loaded
});
