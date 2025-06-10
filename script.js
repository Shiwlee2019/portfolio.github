let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 2000);

document.addEventListener('DOMContentLoaded', () => {
  showSlide();

  const toggleBtn = document.getElementById('toggle-theme');
  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Toggle icon
    if (document.body.classList.contains('light-mode')) {
      icon.className = 'fas fa-sun';  // ☀️ for light mode
    } else {
      icon.className = 'fas fa-moon'; // 🌙 for dark mode
    }
  });
});
