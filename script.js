const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');
const music = document.getElementById('backgroundMusic');

button.addEventListener('click', function() {
    // 1. Mostrar el mensaje
    message.style.display = 'block';
    
    // 2. REINTENTO DE AUDIO FORZADO
    // Cargamos el archivo de nuevo para asegurar la ruta
    music.src = "musica.mp3"; 
    music.load(); 
    
    // Reproducimos con una promesa para detectar errores
    let playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            console.log("¡Éxito! La música está sonando.");
        }).catch(error => {
            console.log("Error al sonar: " + error);
            // Si falla, intentamos una vez más sin silencio
            music.muted = false;
            music.play();
        });
    }

    button.textContent = "¡Te amo mucho! ❤️";
});
