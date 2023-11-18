function setupPopupEventHandlers() {
    // Close popup when clicking outside of the video
    window.onclick = closePopupOnClick;
    window.ontouchstart = closePopupOnClick; // Handle touch events for mobile devices
}

function closePopupOnClick(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
}

// Call this function when the page loads
setupPopupEventHandlers();