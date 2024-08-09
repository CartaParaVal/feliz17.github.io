document.addEventListener("DOMContentLoaded", function() {
    const numImages = 20; // Número de imágenes de Kuromi que caerán
    const kuromiRainContainer = document.getElementById('kuromiRain');

    for (let i = 0; i < numImages; i++) {
        const kuromi = document.createElement('img');
        kuromi.src = 'kuromi.png'; // Ruta a la imagen de Kuromi
        kuromi.classList.add('kuromi');
        
        // Estilo de cada imagen Kuromi
        kuromi.style.left = Math.random() * 100 + 'vw';
        kuromi.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria entre 2 y 5 segundos
        kuromi.style.animationDelay = Math.random() * 5 + 's'; // Retardo aleatorio para el inicio
        
        kuromiRainContainer.appendChild(kuromi);
    }
});