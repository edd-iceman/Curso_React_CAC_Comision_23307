//Se declaran las variables
// estado, sonidoBatman y sonidoClick

let estado = 'apagado';
let sonidoBatman = document.querySelector('#bati_encendido');
let sonidoClick = document.querySelector('#bati_click');

// Se declaran los Divs

let batman = document.querySelector('#batman');
let batiBoton = document.querySelector('#bati_boton');

// Se añade un capturador de evento que se
// activa con el click del mouse

batiBoton.addEventListener('click', () => controlarBatman())

// Se declaran las funciones para controlar a Batman
// y para activar el sonido y luz de linterna

function controlarBatman () {
    if (estado == 'apagado') {
        estado = 'encendido'
        batman.classList.add("batman_activo")
    } else {
        estado = 'apagado'
        batman.classList.remove("batman_activo")
    }
    sonidoLinterna()
}

function sonidoLinterna () {
    sonidoClick.play()
    if (sonidoBatman.paused) {
        sonidoBatman.play()
    } else {
        sonidoBatman.pause()
    }
}