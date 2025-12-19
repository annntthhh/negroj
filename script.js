const fechaInicio = new Date(2023, 2, 30); 

function establecerClima() {
    const horas = new Date().getHours();
    const body = document.body;
    const icon = document.getElementById('main-icon');
    
    body.classList.remove('sunrise', 'day', 'sunset', 'night');

    if (horas >= 6 && horas < 9) {
        body.classList.add('sunrise'); icon.innerText = "🌅";
    } else if (horas >= 9 && horas < 17) {
        body.classList.add('day'); icon.innerText = "☀️";
    } else if (horas >= 17 && horas < 19) {
        body.classList.add('sunset'); icon.innerText = "🌇";
    } else {
        body.classList.add('night'); icon.innerText = "🌙";
    }
}

const noBtn = document.getElementById('noBtn');

const escapar = () => {
    if (!noBtn.classList.contains('escaped')) noBtn.classList.add('escaped');
    
    const original = document.getElementById('lo-sabia-text');
    const aviso = original.cloneNode(true);
    const rect = noBtn.getBoundingClientRect();
    aviso.style.left = rect.left + 'px';
    aviso.style.top = rect.top + 'px';
    aviso.classList.add('show');
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 800);

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
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

setInterval(() => {
    const diff = new Date() - fechaInicio;
    document.getElementById('days').innerText = Math.floor(diff / 86400000).toString().padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((diff / 3600000) % 24).toString().padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((diff / 60000) % 60).toString().padStart(2, '0');
}, 1000);

establecerClima();
