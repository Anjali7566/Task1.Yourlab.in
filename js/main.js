document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeSelect = document.getElementById('theme-select');

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSelect.value = savedTheme;

    // Toggle theme on button click
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

    // Change theme on select change
    themeSelect.addEventListener('change', (event) => {
        const newTheme = event.target.value;
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
