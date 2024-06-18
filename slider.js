
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const prevInvisibleButton = document.getElementById('prev-invisible');
const nextInvisibleButton = document.getElementById('next-invisible');

let currentIndex = 0;
let autoSlideInterval;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length - 2) {
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
  currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 3;
    }
    updateSlider();
}
prevButton.addEventListener('click', () => {
    prevSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
});


function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);
