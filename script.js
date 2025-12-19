// CONFIGURACIÓN: Cambia a tu fecha (Año, Mes-1, Día)
const fechaInicio = new Date(2023, 11, 1); // Ejemplo: 1 de Dic de 2023

// 1. FARO DE LUZ
const glow = document.getElementById('glow');
const handleMove = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;
    glow.style.setProperty('--x', x + 'px');
    glow.style.setProperty('--y', y + 'px');
};
window.addEventListener('mousemove', handleMove);
window.addEventListener('touchmove', handleMove);

// 2. CONTADOR
function actualizarContador() {
    const diferencia = new Date() - fechaInicio;
    const d = Math.floor(diferencia / 86400000);
    const h = Math.floor((diferencia / 3600000) % 24);
    const m = Math.floor((diferencia / 60000) % 60);
    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 3. BOTÓN QUE ESCAPA
const noBtn = document.getElementById('noBtn');
const escapar = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
};
noBtn.addEventListener('mouseover', escapar);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); escapar(); });

// 4. ESCRITURA MÁGICA
const texto = "Cada segundo a tu lado es un regalo del universo. Eres mi estrella más brillante. Te amo infinitamente. ❤️";
const typewriterElement = document.getElementById('typewriter');
let i = 0;

function escribir() {
    if (i < texto.length) {
        typewriterElement.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 50);
    }
}

document.getElementById('yesBtn').addEventListener('click', () => {
    document.getElementById('secretContent').style.display = 'block';
    document.getElementById('yesBtn').style.display = 'none';
    noBtn.style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    escribir();
});
