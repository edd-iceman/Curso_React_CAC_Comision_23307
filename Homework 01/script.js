//Se declaran las variables

let estado = 'apagado';
let gunShot = document.querySelector('#joker_encendido');
let clickSound = document.querySelector('#joker_click');
let joker = document.querySelector('#joker');

// Se añade un capturador de evento que se
// activa con el click del mouse

joker.addEventListener('click', () => controlarJoker())

// activa con el click del mouse

function controlarJoker () {
    if (estado == 'apagado') {
        estado = 'encendido';
        joker.classList.add("joker_activo");
    } else {
        estado = 'apagado';
        joker.classList.remove("joker_activo");
    }
    shootingSound()
}

function shootingSound () {
    clickSound.play()
    if (gunShot.paused) {
        gunShot.play();
    } else {
        gunShot.pause();
    }
}