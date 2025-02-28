const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Changer le texte du bouton selon le mode
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "Mode Clair";
    } else {
        darkModeToggle.textContent = "Mode Sombre";
    }
});
