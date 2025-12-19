// CONFIGURACIÓN: Cambia los números por tu fecha real (Año, Mes-1, Día)
const fechaInicio = new Date(2023, 11, 1); 

// 1. CREAR GALAXIA DE ESTRELLAS
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

// 2. FARO DE LUZ Y PALABRAS OCULTAS
window.addEventListener('mousemove', (e) => {
    actualizarFaro(e.clientX, e.clientY);
});
window.addEventListener('touchmove', (e) => {
    actualizarFaro(e.touches[0].clientX, e.touches[0].clientY);
});

function actualizarFaro(x, y) {
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
    
    document.querySelectorAll('.glow-word').forEach(palabra => {
        const rect = palabra.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;
        const distancia = Math.sqrt(Math.pow(x - centroX, 2) + Math.pow(y - centroY, 2));
        
        if (distancia < 140) {
            palabra.style.color = 'rgba(255, 182, 193, 0.6)';
            palabra.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        } else {
            palabra.style.color = 'rgba(255, 255, 255, 0.02)';
            palabra.style.textShadow = 'none';
        }
    });
}

// 3. CONTADOR DE TIEMPO
function actualizarReloj() {
    const diff = new Date() - fechaInicio;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// 4. BOTÓN NO (SE DESLIZA SUAVEMENTE)
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    noBtn.style.left = `${Math.random() * maxX}px`;
    noBtn.style.top = `${Math.random() * maxY}px`;
});

// 5. REVELACIÓN FINAL (MÁQUINA DE ESCRIBIR)
const textoAmor = "Cada segundo a tu lado es un regalo del universo. Eres mi estrella más brillante y mi lugar seguro. Te amo infinitamente. ❤️";
const btnSi = document.getElementById('yesBtn');

btnSi.addEventListener('click', () => {
    document.querySelector('.question').style.display = 'none';
    btnSi.style.display = 'none';
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
