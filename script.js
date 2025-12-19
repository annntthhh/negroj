// Seleccionamos los elementos
const button = document.getElementById('magicButton');
const message = document.getElementById('hiddenMessage');

// Agregamos el evento al botón
button.addEventListener('click', function() {
    // Mostramos el mensaje secreto
    message.classList.toggle('hidden');
    
    // Cambiamos el texto del botón
    if (message.classList.contains('hidden')) {
        button.textContent = "Haz clic aquí";
    } else {
        button.textContent = "¡Sorpresa! ✨";
    }
});
