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
    // On attend 3000 ms (3 secondes)
    setTimeout(() => {
        const links = document.querySelectorAll('.clean-menu a');
        
        links.forEach(link => {
            // 1. On remplace "DESIGN" par le vrai mot (stocké dans data-real)
            link.innerText = link.dataset.real;
            
            // 2. On change les classes pour activer la couleur blanche et le hover
            link.classList.remove('init-design');
            link.classList.add('loaded');
        });
        
    }, 3000);
});
