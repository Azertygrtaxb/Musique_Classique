// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour activer les animations lorsque l'élément est visible
function activateAnimations() {
    var elements = document.querySelectorAll('.animate-text, .animate-image');
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Écouteur d'événement pour déclencher les animations lors du défilement
window.addEventListener('scroll', activateAnimations);
window.addEventListener('load', activateAnimations);
