const theme = document.querySelectorAll('.changeTheme');

theme.forEach(swither => {
    swither.addEventListener('click', function () {
        
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme)
        
    });
});

function applyTheme(themeName) {
    let themeUrl = `../css/Theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
    
}


let activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
    applyTheme('light');
}
else {
    applyTheme(activeTheme);
}