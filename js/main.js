document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeSelect = document.getElementById('theme-select');

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const themeOptions = themeSelect.options;
        let newTheme = 'light';

        for (let i = 0; i < themeOptions.length; i++) {
            if (themeOptions[i].value === currentTheme) {
                newTheme = themeOptions[(i + 1) % themeOptions.length].value;
                break;
            }
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeSelect.value = newTheme;
    });

    themeSelect.addEventListener('change', (event) => {
        const newTheme = event.target.value;
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
