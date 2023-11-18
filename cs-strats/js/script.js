function openPopup(videoId) {
    var popup = document.getElementById(videoId);
    if (popup) {
        popup.style.display = 'flex'; // Use flex to center the video
    }
}

// Close popup when clicking outside of the video
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
}