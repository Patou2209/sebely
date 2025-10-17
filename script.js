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
const francais = document.querySelectorAll('.francais');
francais.forEach((element) => {
    element.addEventListener('click', () => {
      francais.forEach(el => el.classList.remove('active')); // retire 'active' partout
        element.classList.add('active'); // ajoute 'active' à l'élément cliqué
        window.location.href = 'index.html'; // redirection ici
    });
});
const english = document.querySelectorAll('.english');
english.forEach((element) => {
    element.addEventListener('click', () => {
    english.forEach(el => el.classList.remove('active')); // retire 'active' partout
        element.classList.add('active'); // ajoute 'active' à l'élément cliqué
         window.location.href = 'indexx_en.html'; // redirection ici
    });
});
