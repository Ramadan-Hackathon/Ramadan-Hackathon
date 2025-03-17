
const items = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.carousel-indicators');

let currentIndex = 0;

// Create indicators
items.forEach((item, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.addEventListener('click', () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function showSlide() {
  items.forEach(item => item.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  items[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide();
}

function goToSlide(index) {
  currentIndex = index;
  showSlide();
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide();