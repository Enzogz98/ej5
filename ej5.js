let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCronometro() {
    intervalo = setInterval(function() {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
        }
        actualizarCronometro();
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalo);
}

function resetearCronometro() {
    segundos = 0;
    minutos = 0;
    horas = 0;
    actualizarCronometro();
    pausarCronometro();
}

function actualizarCronometro() {
    const cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = `${agregarCero(horas)}:${agregarCero(minutos)}:${agregarCero(segundos)}`;
}

function agregarCero(valor) {
    return valor < 10 ? `0${valor}` : valor;
}