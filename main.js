// Slideshow logic
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const slides = box.querySelectorAll('.slide');
  let current = 0;
  
  function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[current].classList.add('active');
    current = (current + 1) % slides.length;
  }
  
  showSlide();
  setInterval(showSlide, 3000); // Change slide every 3 seconds
});

// Popup logic
function showPopup(text) {
  document.getElementById('popup-text').textContent = text;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
