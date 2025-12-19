const fechaInicio = new Date(2023, 03, 30); // AJUSTA TU FECHA AQUÍ (Año, Mes-1, Día)

// 1. MENSAJE SEGÚN LA HORA (Saludo inteligente)
const horas = new Date().getHours();
const greeting = document.getElementById('greeting');
if (horas >= 6 && horas < 18) {
    greeting.innerText = "Incluso bajo el sol, tú brillas más";
} else {
    greeting.innerText = "Bajo la luz de la luna";
}

// 2. GALAXIA DE ESTRELLAS
function crearGalaxia() {
    const contenedor = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const estrella = document.createElement('div');
        estrella.className = 'star-dot';
        const tamano = Math.random() * 2 + 1;
        estrella.style.width = `${tamano}px`;
        estrella.style.height = `${tamano}px`;
        estrella.style.top = `${Math.random() * 100}%`;
        estrella.style.left = `${Math.random() * 100}%`;
        estrella.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        contenedor.appendChild(estrella);
    }
}
crearGalaxia();

// 3. FARO DE LUZ Y PALABRAS OCULTAS
const handleMove = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
    
    document.querySelectorAll('.glow-word').forEach(palabra => {
        const rect = palabra.getBoundingClientRect();
        const dist = Math.sqrt(Math.pow(x - (rect.left + rect.width/2), 2) + Math.pow(y - (rect.top + rect.height/2), 2));
        palabra.style.opacity = dist < 140 ? 0.6 : 0.02;
    });
};
window.addEventListener('mousemove', handleMove);
window.addEventListener('touchmove', handleMove);

// 4. RELOJ
function actualizarReloj() {
    const diff = new Date() - fechaInicio;
    document.getElementById('days').innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((diff / 3600000) % 24).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((diff / 60000) % 60).toString().padStart(2, '0');
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// 5. BOTÓN NO
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    noBtn.style.left = `${Math.random() * maxX}px`;
    noBtn.style.top = `${Math.random() * maxY}px`;
});

// 6. REVELACIÓN FINAL
const textoAmor = "Cada segundo a tu lado es un regalo del universo. Eres mi estrella más brillante y mi lugar seguro. Te amo infinitamente. ❤️";
document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.question').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    noBtn.style.display = 'none';
    document.getElementById('secretContent').style.display = 'block';
    
    let i = 0;
    function escribir() {
        if (i < textoAmor.length) {
            document.getElementById('typewriter').innerHTML += textoAmor.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    escribir();
});
