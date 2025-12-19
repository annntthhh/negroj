const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');
const music = document.getElementById('backgroundMusic');

button.addEventListener('click', function() {
    // Muestra el mensaje
    message.classList.toggle('hidden');
    
    // Intenta reproducir la música
    music.play().catch(error => {
        console.log("El navegador bloqueó el inicio automático, pero se activará al interactuar.");
    });

    // Cambia el texto del botón
    if (message.classList.contains('hidden')) {
        button.textContent = "Haz clic aquí";
    } else {
        button.textContent = "¡Sorpresa! ✨";
    }
});
