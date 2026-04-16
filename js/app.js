let currentCategory = 'all';

    function setCategory(cat) {
      currentCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${cat}'`));
      });
      filterItems();
    }

    function filterItems() {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      const cards = document.querySelectorAll('.card');
      let visibleCount = 0;

      cards.forEach(card => {
        const name = card.querySelector('.card-name').innerText.toLowerCase();
        const category = card.getAttribute('data-cat');
        const matchesSearch = name.includes(searchTerm);
        const matchesCategory = (currentCategory === 'all' || category.includes(currentCategory));

        if (matchesSearch && matchesCategory) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      document.getElementById('count').textContent = visibleCount;
    }

    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    toggle.addEventListener('change', () => {
      const t = toggle.checked ? 'light' : 'dark';
      html.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
    });