const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');
const music = document.getElementById('backgroundMusic');

button.addEventListener('click', function() {
    // Esto muestra el mensaje
    message.style.display = 'block';
    
    // Esto arranca la música (el navegador lo permite porque hubo un clic)
    music.play();

    // Cambia el texto del botón
    button.textContent = "❤️";
});
