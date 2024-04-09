const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
    gallery.style.transform = `translateX(-${index * 400}px)`; /* Adjust based on image width */
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

showImage(currentIndex); // Show the initial image
