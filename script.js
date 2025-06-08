// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Script for navigation bar slide in from left
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
  
    // Ajoute la classe "hidden" au chargement de la page
    header.classList.add("hidden");
  
    // Retire la classe "hidden" après un délai pour déclencher l'animation
    setTimeout(() => {
      header.classList.remove("hidden");
    }, 1000); // Délai de 100ms pour s'assurer que l'animation démarre
  });

// Script for select language
document.querySelectorAll('select#language').forEach(languageSelect => {
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        // Redirige l'utilisateur vers la version correspondante de la page
        if (selectedLanguage === 'fr') {
            window.location.href = 'index.html';
        } else if (selectedLanguage === 'en') {
            window.location.href = 'indexx_en.html';
        } else if (selectedLanguage === '') {
            window.location.href = 'index.html';
        }
    });
});

// Script for activating the current language 
const francais = document.querySelectorAll('.francais');
francais.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.francais').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    });
});
