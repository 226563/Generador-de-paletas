const generarBoton = document.getElementById("boton-generar");
const paletaColores = document.getElementById("colores");
const paleta= document.getElementById("paleta");
const mostrarColores = document.getElementById("mostrar-colores");
const formatoSelect = document.getElementById("formato");
let paletaActual = [];

generarBoton.addEventListener('click', () => {
    const cantidadColores = Number(paletaColores.value);
    console.log(cantidadColores);
    const formatoElegido = formatoSelect.value;
    const nuevaPaleta = [];
    
    
    mostrarColores.innerHTML = '';
    for (let i = 0; i < cantidadColores; i++) {
        let entrada = paletaActual[i];
        if (entrada === undefined || entrada.bloqueado === false) {
            entrada = { color: generarColorAleatorio(), bloqueado: false };
        }
        nuevaPaleta.push(entrada);

        const color = entrada.color;
        const codigoParaMostrar = formatoElegido === "hsl" ? color.hsl : color.hex;
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color.hex;
        colorDiv.innerHTML = `<p>${codigoParaMostrar}</p>`;

        const botonBloqueo = document.createElement('button');
        botonBloqueo.type = 'button';
        botonBloqueo.classList.add('button');
        botonBloqueo.textContent = entrada.bloqueado ? 'Desbloquear' : 'Bloquear';
        botonBloqueo.addEventListener('click', () => {
            entrada.bloqueado = !entrada.bloqueado;
            botonBloqueo.textContent = entrada.bloqueado ? 'Desbloquear' : 'Bloquear';
        });
        colorDiv.appendChild(botonBloqueo);
        mostrarColores.appendChild(colorDiv);
    }
    paletaActual = nuevaPaleta;
});
generarBoton.click()

function getRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;

}

function generarColorAleatorio( ) {
    const hue = getRandomNumber(0, 359);
    const saturation = getRandomNumber(0, 100);
    const lightness = getRandomNumber(0, 100);
    const hex = hslToHex(hue, saturation, lightness);
    const hexSinNumeral = hex.slice(1);
    const rojo = parseInt(hexSinNumeral.slice(0, 2), 16);
    const verde = parseInt(hexSinNumeral.slice(2, 4), 16);
    const azul = parseInt(hexSinNumeral.slice(4, 6), 16);
    
    return {
        hex: hex,
        hexSinNumeral: hexSinNumeral,
         hue : hue,
         saturation: saturation,
         lightness : lightness,
        hsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        rojo: rojo,
        verde: verde,
        azul: azul,
        rgba: `rgba(${rojo}, ${verde}, ${azul}, 1)`,   
        
       
    };
}
function hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}




 
