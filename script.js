const fechaInicio = new Date(2023, 2, 30); // 2 = Marzo

// 1. CLIMA DINÁMICO
const horas = new Date().getHours();
const body = document.body;
if (horas >= 6 && horas < 18) {
    body.classList.add('day');
    document.getElementById('greeting').innerText = "Incluso bajo el sol, tú brillas más";
} else {
    body.classList.add('night');
    document.getElementById('greeting').innerText = "Bajo la luz de la luna";
    crearEstrellas();
}

function crearEstrellas() {
    const contenedor = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star-dot';
        s.style.width = s.style.height = '2px';
        s.style.top = Math.random() * 100 + '%';
        s.style.left = Math.random() * 100 + '%';
        s.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        contenedor.appendChild(s);
    }
}

// 2. FARO DE LUZ
window.addEventListener('mousemove', (e) => {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    document.documentElement.style.setProperty('--x', x + 'px');
    document.documentElement.style.setProperty('--y', y + 'px');
    
    document.querySelectorAll('.glow-word').forEach(palabra => {
        const rect = palabra.getBoundingClientRect();
        const dist = Math.sqrt(Math.pow(x - (rect.left + rect.width/2), 2) + Math.pow(y - (rect.top + rect.height/2), 2));
        palabra.style.opacity = dist < 140 ? 0.6 : 0.04;
    });
});

// 3. RELOJ
setInterval(() => {
    const diff = new Date() - fechaInicio;
    document.getElementById('days').innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((diff / 3600000) % 24).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((diff / 60000) % 60).toString().padStart(2, '0');
}, 1000);

// 4. BOTÓN NO Y AVISO "LO SABÍA"
const noBtn = document.getElementById('noBtn');
const loSabiaOriginal = document.getElementById('lo-sabia-text');

const escapar = () => {
    if (!noBtn.classList.contains('escaped')) {
        noBtn.classList.add('escaped');
    }

    const aviso = loSabiaOriginal.cloneNode(true);
    const rect = noBtn.getBoundingClientRect();
    aviso.style.left = rect.left + 'px';
    aviso.style.top = rect.top + 'px';
    aviso.classList.add('show');
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 800);

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
};

noBtn.addEventListener('mouseover', escapar);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); escapar(); });

// 5. BOTÓN SÍ
document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.question').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    noBtn.style.display = 'none';
    document.getElementById('secretContent').style.display = 'block';
    
    const texto = "Cada segundo a tu lado es un regalo del universo. Eres mi estrella más brillante y mi lugar seguro. Te amo infinitamente. ❤️";
    let i = 0;
    function escribir() {
        if (i < texto.length) {
            document.getElementById('typewriter').innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    escribir();
});
