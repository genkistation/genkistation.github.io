window.addEventListener('load', () => {
    
    // --- 1. LOGIQUE DU MENU (DESIGN -> VRAIS MOTS) ---
    setTimeout(() => {
        const links = document.querySelectorAll('.clean-menu a');
        links.forEach(link => {
            link.innerText = link.dataset.real;
            link.classList.remove('init-design');
            link.classList.add('loaded');
            if (!link.classList.contains('no-click')) {
                link.style.pointerEvents = "auto";
            }
        });
    }, 3000);

    // --- 2. LOGIQUE DU CARROUSEL DE PHRASES ---
    const phrases = document.querySelectorAll('.changing-phrase');
    let currentIndex = 0;

    setInterval(() => {
        // Enlève la classe active de la phrase actuelle
        phrases[currentIndex].classList.remove('active');

        // Passe à la phrase suivante (boucle à la fin)
        currentIndex = (currentIndex + 1) % phrases.length;

        // Ajoute la classe active à la nouvelle phrase
        phrases[currentIndex].classList.add('active');
    }, 3000); // Change toutes les 3 secondes
});
