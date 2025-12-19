const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');
const music = document.getElementById('backgroundMusic');

button.addEventListener('click', function() {
    // 1. Mostrar el mensaje oculto
    message.classList.toggle('hidden');
    
    // 2. Activar la música si está pausada
    if (music.paused) {
        music.play().catch(error => {
            console.log("Error al reproducir audio:", error);
        });
    }

    // 3. Cambiar el texto del botón
    if (message.classList.contains('hidden')) {
        button.textContent = "Haz clic aquí";
    } else {
        button.textContent = "¡Sorpresa! ✨";
    }
});
