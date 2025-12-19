const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');
const music = document.getElementById('backgroundMusic');

button.addEventListener('click', function() {
    // 1. Mostrar mensaje
    message.style.display = 'block';
    
    // 2. Forzar música
    music.volume = 1.0; // Volumen al máximo
    music.play().catch(error => {
        console.log("Error crítico de audio: ", error);
        // Intento secundario
        music.load();
        music.play();
    });

    // 3. Cambiar texto del botón
    button.textContent = "¡Te amo! ❤️";
});
