
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





//waterfall moon 

const moonContainer = document.querySelector(".moon-container");

function createFallingMoon() {
  const moon = document.createElement("div");
  moon.classList.add("moon");

  // Randomize the horizontal position
  moon.style.left = Math.random() * 100 + "vw";

  // Randomize the size and animation duration
  moon.style.width = moon.style.height = Math.random() * 20 + 10 + "px"; // Same size randomization as heart
  moon.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random duration for animation

  moonContainer.appendChild(moon);

  // Remove the moon after it falls off the screen
  setTimeout(() => {
    moon.remove();
  }, 1969); // يحذف القمر من الصفحة بعد 5 ثوانٍ
}

// Start generating moons and stop after 15 seconds
const moonInterval = setInterval(createFallingMoon, 100); // ينشئ قمر كل 20 ميللي ثانية
setTimeout(() => {
  clearInterval(moonInterval); // Stop generating moons after 15 seconds
}, 2500); // تستمر بالسقوط لهذه المدة







// الحصول على الزر
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');


window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show'); // يظهر الزر بعد التمرير 200px
    } else {
        scrollToTopBtn.classList.remove('show'); // يختفي الزر إذا لم يكن هناك تم scrolling
    }
});

// جعل الزر يقوم بالتمرير للأعلى عند النقر عليه
scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // التمرير بشكل سلس
    });
});
