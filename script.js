const fechaInicio = new Date(2023, 2, 30); 

// 1. CLIMA DINÁMICO
const horas = new Date().getHours();
const body = document.body;
const mainIcon = document.getElementById('main-icon');

if (horas >= 6 && horas < 18) {
    body.classList.add('day');
    mainIcon.innerText = "☀️";
    document.getElementById('greeting').innerText = "Incluso bajo el sol, tú brillas más";
} else {
    body.classList.add('night');
    mainIcon.innerText = "🌙";
    document.getElementById('greeting').innerText = "Bajo la luz de la luna";
    crearEstrellas();
}
crearNubes(10); // Más nubes para que se vea real

function crearNubes(num) {
    const contenedor = document.getElementById('clouds-container');
    for (let i = 0; i < num; i++) {
        const nube = document.createElement('div');
        nube.className = 'cloud';
        nube.style.top = Math.random() * 80 + '%';
        nube.style.setProperty('--speed', (Math.random() * 40 + 40) + 's');
        nube.style.opacity = Math.random() * 0.3 + 0.1;
        nube.style.transform = `scale(${Math.random() * 2 + 0.5})`;
        contenedor.appendChild(nube);
    }
}

function crearEstrellas() {
    const contenedor = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
        const s = document.createElement('div');
        s.style.position = 'absolute';
        s.style.background = 'white';
        s.style.width = s.style.height = '2px';
        s.style.borderRadius = '50%';
        s.style.top = Math.random() * 100 + '%';
        s.style.left = Math.random() * 100 + '%';
        s.style.opacity = Math.random();
        contenedor.appendChild(s);
    }
}

// 2. BOTÓN NO Y AVISO "LO SABÍA"
const noBtn = document.getElementById('noBtn');
const loSabiaOriginal = document.getElementById('lo-sabia-text');

const escapar = () => {
    if (!noBtn.classList.contains('escaped')) {
        noBtn.classList.add('escaped');
    }
    // Aviso fugaz
    const aviso = loSabiaOriginal.cloneNode(true);
    const rect = noBtn.getBoundingClientRect();
    aviso.style.left = rect.left + 'px';
    aviso.style.top = rect.top + 'px';
    aviso.classList.add('show');
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 800);

    // Mover botón con margen de seguridad
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
};

noBtn.addEventListener('mouseover', escapar);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); escapar(); });

// 3. BOTÓN SÍ
document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.question').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    noBtn.style.display = 'none';
    document.getElementById('secretContent').style.display = 'block';
    
    const texto = "Cada segundo a tu lado es un regalo del universo. Eres mi estrella más brillante y mi lugar seguro. Te amo infinitamente. ❤️";
    let i = 0;
    const tv = document.getElementById('typewriter');
    function escribir() {
        if (i < texto.length) {
            tv.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    escribir();
});

// 4. FARO DE LUZ
window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});
