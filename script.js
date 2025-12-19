const btn = document.getElementById('magicButton');
const content = document.getElementById('hiddenMessage');

btn.addEventListener('click', () => {
    // Revelar el mensaje con animación
    content.style.display = 'block';
    
    // Cambiar el botón para que ya no distraiga
    btn.style.opacity = '0.5';
    btn.textContent = "Con amor ❤️";
    btn.style.pointerEvents = 'none';
});
