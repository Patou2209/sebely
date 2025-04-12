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



      