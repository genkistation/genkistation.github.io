document.getElementById('languageSelect').addEventListener('change', function() {
    var lang = this.value;
    var elements = document.querySelectorAll('.lang');
    elements.forEach(function(element) {
        element.style.display = element.classList.contains(lang) ? 'block' : 'none';
    });
});

// Initial load
document.getElementById('languageSelect').dispatchEvent(new Event('change'));

/* --- GESTION DU MENU (3 SECONDES) --- */

window.addEventListener('load', () => {
    setTimeout(() => {
        const links = document.querySelectorAll('.clean-menu a');
        links.forEach(link => {
            link.innerText = link.dataset.real;
            link.classList.remove('init-design');
            link.classList.add('loaded');
            
            // On réactive le clic uniquement pour les liens valides
            if (!link.classList.contains('no-click')) {
                link.style.pointerEvents = "auto";
            }
        });
    }, 3000);
});

