const toggle = document.getElementById('themeToggle');
    const label  = document.getElementById('theme-label');
    const html   = document.documentElement;

    const saved = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', saved);
    toggle.checked = saved === 'light';
    label.textContent = saved === 'light' ? 'Light' : 'Dark';

    toggle.addEventListener('change', () => {
      const t = toggle.checked ? 'light' : 'dark';
      html.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      label.textContent = t === 'light' ? 'Light' : 'Dark';
    });