document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
            }
        });
    };
    
    fadeElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transition = "opacity 0.6s ease";
    });
    
    fadeInOnScroll();
        
    window.addEventListener('scroll', fadeInOnScroll);
});

// Adicione este código ao final do seu arquivo scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código de fade-in existente) ...

    // Lógica para as abas da seção de capacidades
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Desativa todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Ativa o botão clicado e o conteúdo correspondente
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
