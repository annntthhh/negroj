const fechaInicio = new Date(2023, 2, 30); 

function establecerClima() {
    const horas = new Date().getHours();
    const body = document.body;
    const mainIcon = document.getElementById('main-icon');
    const greeting = document.getElementById('greeting');
    
    body.classList.remove('sunrise', 'day', 'sunset', 'night');

    if (horas >= 6 && horas < 9) {
        body.classList.add('sunrise');
        mainIcon.innerText = "🌅";
        greeting.innerText = "Un nuevo día para amarte";
        crearNubes(8);
    } else if (horas >= 9 && horas < 17) {
        body.classList.add('day');
        mainIcon.innerText = "☀️";
        greeting.innerText = "Incluso bajo el sol, tú brillas más";
        crearNubes(12);
    } else if (horas >= 17 && horas < 19) {
        body.classList.add('sunset');
        mainIcon.innerText = "🌇";
        greeting.innerText = "Eres mi atardecer favorito";
        crearNubes(10);
    } else {
        body.classList.add('night');
        mainIcon.innerText = "🌙";
        greeting.innerText = "Bajo la luz de la luna";
        crearEstrellas();
        crearNubes(6);
    }
}

function crearNubes(num) {
    const contenedor = document.getElementById('clouds-container');
    contenedor.innerHTML = ''; 
    for (let i = 0; i < num; i++) {
        const nube = document.createElement('div');
        nube.className = 'cloud';
        nube.style.top = Math.random() * 70 + '%';
        nube.style.setProperty('--speed', (Math.random() * 50 + 40) + 's');
        nube.style.opacity = Math.random() * 0.4 + 0.2;
        nube.style.transform = `scale(${Math.random() * 1.2 + 0.3})`;
        contenedor.appendChild(nube);
    }
}

function crearEstrellas() {
    const contenedor = document.getElementById('stars');
    contenedor.innerHTML = '';
    for (let i = 0; i < 80; i++) {
        const s = document.createElement('div');
        s.className = 'star-dot';
        s.style.width = s.style.height = '2px';
        s.style.top = Math.random() * 100 + '%';
        s.style.left = Math.random() * 100 + '%';
        s.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        contenedor.appendChild(s);
    }
}

const noBtn = document.getElementById('noBtn');
const loSabiaOriginal = document.getElementById('lo-sabia-text');

const escapar = () => {
    if (!noBtn.classList.contains('escaped')) noBtn.classList.add('escaped');
    const aviso = loSabiaOriginal.cloneNode(true);
    const rect = noBtn.getBoundingClientRect();
    aviso.style.left = rect.left + 'px';
    aviso.style.top = rect.top + 'px';
    aviso.classList.add('show');
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 1000);

    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
};

noBtn.addEventListener('mouseover', escapar);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); escapar(); });

document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.question').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    noBtn.style.display = 'none';
    document.getElementById('secretContent').style.display = 'block';
    
    const texto = "No miento, es díficil estar contigo pero yo también te amo, y demasiado.";
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

window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

setInterval(() => {
    const diff = new Date() - fechaInicio;
    document.getElementById('days').innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((diff / 3600000) % 24).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((diff / 60000) % 60).toString().padStart(2, '0');
}, 1000);

establecerClima();
