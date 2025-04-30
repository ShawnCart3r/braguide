function showPopup(title, items) {
  document.getElementById('popup-title').textContent = title;

  const list = document.getElementById('popup-list');
  list.innerHTML = ''; // Clear old list

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Slideshow logic for each .box
document.querySelectorAll('.box').forEach(box => {
  const slides = box.querySelectorAll('.slide');
  let index = 0;

  // Hide all except first
  slides.forEach((img, i) => {
    img.style.display = i === 0 ? 'block' : 'none';
  });

  // Rotate every 2.5 seconds
  setInterval(() => {
    slides[index].style.display = 'none'; // Hide current
    index = (index + 1) % slides.length;  // Advance
    slides[index].style.display = 'block'; // Show next
  }, 2500);
});