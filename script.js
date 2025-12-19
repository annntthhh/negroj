// CONFIGURACIÓN: Cambia a tu fecha (Año, Mes-1, Día)
const fechaInicio = new Date(2023, 11, 1); // Ejemplo: 1 de Dic de 2023

// 1. FARO DE LUZ Y MENSAJES OCULTOS
const glow = document.getElementById('glow');
const glowWords = document.querySelectorAll('.glow-word');

const handleMove = (e) => {
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
    glow.style.setProperty('--x', clientX + 'px');
    glow.style.setProperty('--y', clientY + 'px');

    // Revisar si el cursor está cerca de alguna palabra oculta
    glowWords.forEach(word => {
        const rect = word.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(clientY - (rect.top + rect.height / 2), 2)
        );
        if (distance < 100) { // Si está a menos de 100px
            word.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
            word.style.color = 'rgba(255, 255, 255, 0.6)';
        } else {
            word.style.textShadow = 'none';
            word.style.color = 'rgba(255, 255, 255, 0.05)';
        }
    });
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

// 4. EFECTO GALAXIA (PARTÍCULAS)
const createParticleBurst = (x, y) => {
    const container = document.getElementById('particle-burst-container');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = particle.style.height = `${Math.random() * 5 + 2}px`; // Tamaño aleatorio
        
        // Posición inicial: donde se hizo clic
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Dirección aleatoria
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80 + 20; // Distancia de expansión
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        
        container.appendChild(particle);
        // Eliminar partícula después de la animación
        particle.addEventListener('animationend', () => particle.remove());
    }
};

// 5. ESCRITURA MÁGICA Y REVELACIÓN FINAL
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

document.getElementById('yesBtn').addEventListener('click', (e) => {
    // Coordenadas del clic para la explosión de partículas
    const rect = e.target.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2;
    createParticleBurst(clickX, clickY);

    document.getElementById('secretContent').style.display = 'block';
    document.getElementById('yesBtn').style.display = 'none';
    noBtn.style.display = 'none';
    document.querySelector('.question').style.display = 'none';
    escribir();
});
