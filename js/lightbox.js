document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and its components
    const modal = document.getElementById("lightbox-modal");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.getElementById("close-btn");
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");

    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    // Variables to track touch positions
    let touchStartX = 0;
    let touchEndX = 0;

    // Open the lightbox when an image is clicked
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function () {
            currentIndex = index; // Set current image index
            openModal(img.src); // Open modal with the selected image
        });
    });

    // Open modal and add transitions for the image
    function openModal(src) {
        lightboxImage.src = src; // Set the lightbox image source
        modal.style.display = "flex"; // Show the modal
        setTimeout(() => {
            lightboxImage.style.opacity = 1; // Fade the image in
            lightboxImage.style.transform = 'scale(1)'; // Scale image to normal size
        }, 50); // Add a small delay to allow opacity transition
    }

    // Close the lightbox
    function closeModal() {
        lightboxImage.style.opacity = 0; // Fade out the image
        lightboxImage.style.transform = 'scale(0.95)'; // Scale the image down
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal after animation
        }, 400); // Match the duration of the transition
    }

    // Close the lightbox when clicking outside the image
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal(); // Trigger close action if background is clicked
        }
    });

    // Close the lightbox when the Esc key is pressed
    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeModal(); // Close the modal if it's open
        }

        if (modal.style.display === "flex") { // Only allow navigation if modal is open
            // Arrow key functionality for previous and next image
            if (e.key === "ArrowLeft") {
                goToPreviousImage();
            } else if (e.key === "ArrowRight") {
                goToNextImage();
            }

            // 'X' key functionality to close the modal
            if (e.key === "x" || e.key === "X") {
                closeModal(); // Close the modal if 'X' key is pressed
            }
        }
    });

    // Left arrow click to go to previous image
    prevArrow.addEventListener('click', function() {
        goToPreviousImage();
    });

    // Right arrow click to go to next image
    nextArrow.addEventListener('click', function() {
        goToNextImage();
    });

    // Function to go to the previous image
    function goToPreviousImage() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = galleryImages.length - 1; // Go to last image
        }
        openModal(galleryImages[currentIndex].src); // Update and open modal with new image
    }

    // Function to go to the next image
    function goToNextImage() {
        if (currentIndex < galleryImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Go to first image
        }
        openModal(galleryImages[currentIndex].src); // Update and open modal with new image
    }

    // Listen for swipe gestures on mobile (touch events)
    const handleSwipe = (e) => {
        touchEndX = e.changedTouches[0].screenX; // Get the end position of the swipe

        // Calculate the swipe distance
        let swipeDistance = touchStartX - touchEndX;

        // If swipe distance is positive, it's a right swipe (next image)
        if (swipeDistance > 50) {
            goToNextImage();
        }
        // If swipe distance is negative, it's a left swipe (previous image)
        else if (swipeDistance < -50) {
            goToPreviousImage();
        }
    };

    // Detect the start of the swipe
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX; // Capture the start position
    });

    // Detect the end of the swipe
    modal.addEventListener('touchend', handleSwipe); // Handle swipe logic

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
});
