let currentIndex = 0;
const slide = document.getElementById("carouselSlide");
const totalImages = slide.children.length;

function updateSlide() {
  const offset = -currentIndex * 100;
  slide.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlide();
}

setInterval(nextSlide,4000);