document.getElementById('languageSelect').addEventListener('change', function() {
    var lang = this.value;
    var elements = document.querySelectorAll('.lang');
    elements.forEach(function(element) {
        element.style.display = element.classList.contains(lang) ? 'block' : 'none';
    });
});

// Initial load
document.getElementById('languageSelect').dispatchEvent(new Event('change'));
