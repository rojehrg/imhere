
const gradientContainer = document.querySelector('.gradient-container');
const colors = ['#88d8d8', '#a8c0ff', '#f0a0ff', '#ffc0c0', '#f8e0a0'];
let currentColorIndex = 0;

function updateGradient() {
    const startColor = colors[currentColorIndex];
    const endColor = colors[(currentColorIndex + 1) % colors.length];

    gradientContainer.style.background = `linear-gradient(${startColor}, ${endColor})`;
    
    // Update the gradient colors gradually using CSS transitions
    gradientContainer.style.transition = 'background 10s ease-in-out';

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Update gradient colors every 10 seconds (adjust the interval as needed)
setInterval(updateGradient, 10000); // 10000 milliseconds = 10 seconds
// Initialize gradient
updateGradient();
gradientContainer.addEventListener('click', (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Save the clicked point using local storage
    localStorage.setItem('lastClick', JSON.stringify({ x: clickX, y: clickY }));

    // Display the clicked point
    const clickMarker = document.createElement('div');
    clickMarker.className = 'click-marker';
    clickMarker.style.left = clickX + 'px';
    clickMarker.style.top = clickY + 'px';
    gradientContainer.appendChild(clickMarker);

    // Add fading effect after a delay
    setTimeout(() => {
        clickMarker.classList.add('fade-out');
        setTimeout(() => {
            gradientContainer.removeChild(clickMarker);
        }, 1000); // Wait for the fade animation to complete
    }, 2000); // Adjust the delay as needed
});

