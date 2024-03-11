document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    zoomableImages.forEach(function(image) {
        image.addEventListener('click', function() {
            // Create a modal overlay
            const modalOverlay = document.createElement('div');
            modalOverlay.classList.add('modal-overlay');

            // Create a modal container
            const modalContainer = document.createElement('div');
            modalContainer.classList.add('modal-container');

            // Create an image element within the modal
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;

            // Append the image to the modal container
            modalContainer.appendChild(modalImg);
            
            // Append the modal container to the modal overlay
            modalOverlay.appendChild(modalContainer);

            // Append the modal overlay to the body
            document.body.appendChild(modalOverlay);

            // Close modal when clicking outside of the image
            modalOverlay.addEventListener('click', function(event) {
                if (event.target === modalOverlay || event.target === modalContainer) {
                    modalOverlay.remove();
                }
            });
        });
    });
});