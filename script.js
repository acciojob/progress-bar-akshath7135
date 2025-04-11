//your JS code here. If required.
let currentStep = 1; // Start at the first circle

// Function to update the progress bar
function updateProgress() {
    const circles = document.querySelectorAll('.circle');
    const progressLine = document.querySelector('.progress-line');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Update circles
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Update progress line width
    const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
    progressLine.style.width = `${progressWidth}%`;

    // Enable/disable buttons
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === circles.length;
}

// Next button click event
document.getElementById('next').addEventListener('click', () => {
    if (currentStep < 5) {
        currentStep++;
        updateProgress();
    }
});

// Previous button click event
document.getElementById('prev').addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

// Initial update to set the correct state
updateProgress();