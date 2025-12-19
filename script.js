// 1. CONFIGURACIÓN: Pon aquí la fecha en que se hicieron novios (Año, Mes-1, Día)
// Enero es 0, Febrero es 1, etc. Ejemplo: 15 de marzo de 2023 -> (2023, 2, 15)
const fechaInicio = new Date(2022, 03, 30); 

// 2. CONTADOR DE TIEMPO
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const h = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diferencia / (1000 * 60)) % 60);

    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 3. BOTÓN QUE ESCAPA (PARA EL "NO")
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.position = 'fixed';
});

// 4. EFECTO DE ESCRITURA Y REVELACIÓN
const yesBtn = document.getElementById('yesBtn');
const secretContent = document.getElementById('secretContent');
const typewriterElement = document.getElementById('typewriter');
const texto = "Eres mi estrella favorita en este cielo infinito. Gracias por cada segundo a mi lado. Te amo para siempre.";

let i = 0;
function escribirTexto() {
    if (i < texto.length) {
        typewriterElement.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribirTexto, 50); // Velocidad de escritura
    }
}

yesBtn.addEventListener('click', () => {
    secretContent.style.display = 'block';
    noBtn.style.display = 'none'; // Desaparece el botón "No"
    yesBtn.style.display = 'none'; // Desaparece el botón "Si"
    document.querySelector('.question').style.display = 'none';
    escribirTexto();
});
