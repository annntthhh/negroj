const fechaInicio = new Date(2023, 2, 30); 

function establecerClima() {
    const horas = new Date().getHours();
    const body = document.body;
    const mainIcon = document.getElementById('main-icon');
    
    body.classList.remove('sunrise', 'day', 'sunset', 'night');

    if (horas >= 6 && horas < 9) {
        body.classList.add('sunrise');
        mainIcon.innerText = "🌅";
    } else if (horas >= 9 && horas < 17) {
        body.classList.add('day');
        mainIcon.innerText = "☀️";
    } else if (horas >= 17 && horas < 19) {
        body.classList.add('sunset');
        mainIcon.innerText = "🌇";
    } else {
        body.classList.add('night');
        mainIcon.innerText = "🌙";
        crearEstrellas();
    }
    crearNubes(10);
}

const noBtn = document.getElementById('noBtn');

const escapar = () => {
    // Activa el modo escape
    if (!noBtn.classList.contains('escaped')) {
        noBtn.classList.add('escaped');
    }

    // Mostrar el texto flotante
    const original = document.getElementById('lo-sabia-text');
    const aviso = original.cloneNode(true);
    const rect = noBtn.getBoundingClientRect();
    aviso.style.left = rect.left + 'px';
    aviso.style.top = rect.top + 'px';
    aviso.classList.add('show');
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 800);

    // Mover a posición aleatoria
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
};

noBtn.addEventListener('mouseover', escapar);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); escapar(); });

document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.button-group').style.display = 'none';
    document.getElementById('secretContent').style.display = 'block';
    
    const texto = "No miento, es difícil estar contigo pero yo también te amo negro, y demasiado. Siempre más que tú a mí";
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

// Reloj
setInterval(() => {
    const diff = new Date() - fechaInicio;
    document.getElementById('days').innerText = Math.floor(diff / 86400000);
    document.getElementById('hours').innerText = Math.floor((diff / 3600000) % 24);
    document.getElementById('minutes').innerText = Math.floor((diff / 60000) % 60);
}, 1000);

function crearNubes(n) {
    const cont = document.getElementById('clouds-container');
    for(let i=0; i<n; i++) {
        const c = document.createElement('div');
        c.className = 'cloud';
        c.style.width = '150px'; c.style.height = '40px';
        c.style.top = Math.random() * 80 + '%';
        c.style.setProperty('--speed', (Math.random()*20 + 20)+'s');
        cont.appendChild(c);
    }
}

establecerClima();
