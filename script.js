document.getElementById('languageSelect').addEventListener('change', function() {
    var lang = this.value;
    var elements = document.querySelectorAll('.lang');
    elements.forEach(function(element) {
        element.style.display = element.classList.contains(lang) ? 'block' : 'none';
    });
});

// Initial load
document.getElementById('languageSelect').dispatchEvent(new Event('change'));

/* --- EFFET DE BROUILLAGE (SCRAMBLE EFFECT) --- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const menuLinks = document.querySelectorAll(".cyber-menu a");

// Fonction générique pour animer le texte
const scrambleText = (element, finalWord) => {
    let iteration = 0;
    
    // On arrête l'intervalle précédent s'il y en a un pour éviter les bugs
    clearInterval(element.dataset.intervalId);

    const intervalId = setInterval(() => {
        element.innerText = finalWord
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return finalWord[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= finalWord.length) {
            clearInterval(intervalId);
        }

        iteration += 1 / 3; // Vitesse de décryptage
    }, 30); // Vitesse de l'animation (ms)

    // On stocke l'ID de l'intervalle dans l'élément pour pouvoir le couper
    element.dataset.intervalId = intervalId;
};

// 1. SCENARIO CHARGEMENT PAGE
// Au début c'est écrit "DESIGN" (dans le HTML).
// On attend 2 secondes, puis on révèle le vrai nom (data-value).
window.addEventListener('load', () => {
    setTimeout(() => {
        menuLinks.forEach(link => {
            scrambleText(link, link.dataset.value);
        });
    }, 2000);
});

// 2. SCENARIO SURVOL (HOVER)
menuLinks.forEach(link => {
    
    // Quand la souris entre : on brouille vers "DESIGN"
    link.addEventListener("mouseenter", () => {
        // Petite condition : si on est déjà en train d'afficher DESIGN, on évite de relancer
        if (link.innerText !== "DESIGN") {
            scrambleText(link, "DESIGN");
        }
    });

    // Quand la souris sort : on brouille vers le vrai nom (MUSIC, etc.)
    link.addEventListener("mouseleave", () => {
        scrambleText(link, link.dataset.value);
    });
});
