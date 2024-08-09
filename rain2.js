document.addEventListener("DOMContentLoaded", function() {
    const numImages = 20; 
    const kityRainContainer = document.getElementById('kityRain');

    for (let i = 0; i < numImages; i++) {
        const kity = document.createElement('img');
        kity.src = 'kity.png'; // Ruta a la imagen de Kuromi
        kity.classList.add('kity');
        
        // Estilo de cada imagen Kuromi
        kity.style.left = Math.random() * 100 + 'vw';
        kity.style.animationDuration = Math.random() * 3 + 2 + 's';
        kity.style.animationDelay = Math.random() * 5 + 's'; 
        
        kityRainContainer.appendChild(kity);
    }
});