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
