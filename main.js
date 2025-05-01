const chickenImages = [
  "/image/chickenleg1.jpg", "/image/checkleg2.jpg", "/image/checkleg3.jpg", 
  "/image/checkleg4.jpg", "/image/chickenleg5.jpg", "/image/chickenleg6.jpg", "/image/chickenleg7.jpg", "/image/chickenleg8.jpg"
];
const luluImages = ["/image/lulu1.jpg", "/image/lulu2.jpg", "/image/lulu3.jpg"];
const brooksImages = ["/image/brooks1.jpg", "/image/brooks2.jpg", "/image/brooks3.jpg", "/image/brooks4.jpg"];
const rabbitImages = ["/image/bunny1.jpg", "/image/bunn2.jpg", "/image/bunny3.jpg", "/image/bunny4.jpg"];

// Ordered list content
const chickenList = ["cow", "frogs", "nuggets", "pickles", "sloth", "strawberry", "turtles"];
const luluList = ["Wake up", "Brush teeth", "Eat breakfast"];
const brooksList = ["Step 1", "Step 2", "Step 3"];
const rabbitList = ["Rabbit eats", "Rabbit hops", "Rabbit naps"];

// Paragraph text
const chickenText = "This is the ultimate collection of chicken leg imagery and companions.";
const luluText = "A breezy morning routine powered by Lululemon's mindset.";
const brooksText = "These steps outline your Brooks-powered performance day.";
const rabbitText = "A quick look into the whimsical world of rabbits.";

let slideshowInterval;

function showPopup(title, images, listItems, paragraph) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-description").textContent = paragraph;

  const list = document.getElementById("popup-list");
  list.innerHTML = '';
  listItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  const slideshow = document.getElementById("slideshow-container");
  slideshow.innerHTML = `<img src="${images[0]}" id="slideshow-image" style="width:100%; max-height:250px; object-fit:cover; border-radius:8px;">`;

  let index = 0;
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slideshow-image").src = images[index];
  }, 2500);

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  clearInterval(slideshowInterval);
  document.getElementById("popup").style.display = "none";
}