// FUNCIONES PARA REPLICAR TEXTOS DE INPUTS EN TARJETAS //

// NOMBRE TARJETA //
const cardName = document.getElementById('cardName');
const reflectedName = document.getElementById('reflectedName');

cardName.addEventListener('input', () => {
    reflectedName.textContent = cardName.value;
});

// NUMERO TARJETA //

const cardNumber = document.getElementById('cardNumber');
const reflectedNumber = document.getElementById('reflectedNumber');

cardNumber.addEventListener('input', () => {
    reflectedNumber.textContent = cardNumber.value;
});

// FECHA DE VENCIMIENTO //
const mm = document.getElementById('mm');
const reflectedDateMm = document.getElementById('reflectedDateMm');

mm.addEventListener('input', () => {
    reflectedDateMm.textContent = mm.value;
});

const yy = document.getElementById('yy');
const reflectedDateYy = document.getElementById('reflectedDateYy');

yy.addEventListener('input', () => {
    reflectedDateYy.textContent = yy.value;
});

const sonNumeros = function (evento) { // FUNCION PARA LIMITAR EL INPUT A NUMEROS //
    return !isNaN(evento.key);
}

mm.onkeypress = sonNumeros;
yy.onkeypress = sonNumeros;

// CODIGO CVC //
const cvcCode = document.getElementById('cvcCode');
const reflectedCvc = document.getElementById('reflectedCvc');

cvcCode.addEventListener('input', () => {
    reflectedCvc.textContent = cvcCode.value;
});

cvcCode.onkeypress = sonNumeros;


// FUNCION PARA EL BOTON DE CONFIRM //

const cambiarVisibilidad = () =>  {

    const alertaCardName = document.getElementById('alertaCardName');
    const alertaCardNumber = document.getElementById('alertaCardNumber');
    const alertaCvc = document.getElementById('alertaCvc');
    const alertaMm = document.getElementById('alertaMm');
    const alertaYy = document.getElementById('alertaYy');

    const erroresCardName = [];
    const erroresCardNumber = [];
    const erroresCVC = [];
    const erroresMM = [];
    const erroresYY = [];

    // ERRORES EN CARDHOLDER NAME

    alertaCardName.innerHTML = '';
    if (cardName.value.length == 0) {
        erroresCardName.push('Este campo no debe estar vacío');
    }

    // Se iteran los errores para mostrarlos en el HTML
    for (let i = 0; i < erroresCardName.length; i++) {
        alertaCardName.innerHTML += `<p>${erroresCardName[i]}</p>`;
    }

    if (erroresCardName.length > 0) {
        alertaCardName.style.display = 'block'; // Mostrar el contenedor si hay errores
    } else {
        alertaCardName.style.display = 'none'; // Ocultar el contenedor si no hay errores
    }

    // ERRORES EN CARD NUMBER

    alertaCardNumber.innerHTML = '';
    if (cardNumber.value.length == 0) {
        erroresCardNumber.push('Este campo no debe estar vacío');
    }
    if (cardNumber.value.length != 16) {
        erroresCardNumber.push('El número de tarjeta debe tener 16 dígitos');
    }
    if (isNaN(cardNumber.value)) {
        erroresCardNumber.push('Este campo solo acepta números');
    }

    // Se iteran los errores para mostrarlos en el HTML
    for (let i = 0; i < erroresCardNumber.length; i++) {
        alertaCardNumber.innerHTML += `<p>${erroresCardNumber[i]}</p>`;
    }

    if (erroresCardNumber.length > 0) {
        alertaCardNumber.style.display = 'block'; // Mostrar el contenedor si hay errores
    } else {
        alertaCardNumber.style.display = 'none'; // Ocultar el contenedor si no hay errores
    }

    // ERRORES EN CVC

    alertaCvc.innerHTML = '';

    if (cvcCode.value.length == 0) {
        erroresCVC.push('Este campo no debe estar vacío');
    }
    if (cvcCode.value.length != 3) {
        erroresCVC.push('El cvc debe tener 3 dígitos');
    }

    // Se iteran los errores para mostrarlos en el HTML
    for (let i = 0; i < erroresCVC.length; i++) {
        alertaCvc.innerHTML += `<p>${erroresCVC[i]}</p>`;
    }

    if (erroresCVC.length > 0) {
        alertaCvc.style.display = 'block'; // Mostrar el contenedor si hay errores
    } else {
        alertaCvc.style.display = 'none'; // Ocultar el contenedor si no hay errores
    }

    // ERRORES EN YY

    alertaYy.innerHTML = '';
    if (yy.value.length == 0) {
        erroresYY.push('Este campo no debe estar vacío');
    }
    if (yy.value.length != 2) {
        erroresYY.push('El mm debe tener 2 dígitos');
    }
    // Se iteran los errores para mostrarlos en el HTML
    for (let i = 0; i < erroresYY.length; i++) {
        alertaYy.innerHTML += `<p>${erroresYY[i]}</p>`;
    }

    if (erroresYY.length > 0) {
        alertaYy.style.display = 'block'; // Mostrar el contenedor si hay errores
    } else {
        alertaYy.style.display = 'none'; // Ocultar el contenedor si no hay errores
    }

    // ERRORES EN MM

    alertaMm.innerHTML = '';
    if (mm.value.length == 0) {
        erroresMM.push('Este campo no debe estar vacío');
    }
    if (mm.value.length != 2) {
        erroresMM.push('El mm debe tener 2 dígitos');
    }
     const mmPattern = /^(0[1-9]|1[0-2])$/; // Acepta valores entre 01 y 12

    if (!mmPattern.test(mm.value)) {
        erroresMM.push('El valor de mm debe estar entre 01 y 12');
    }

    // Se iteran los errores para mostrarlos en el HTML
    for (let i = 0; i < erroresMM.length; i++) {
        alertaMm.innerHTML += `<p>${erroresMM[i]}</p>`;
    }

    if (erroresMM.length > 0) {
        alertaMm.style.display = 'block'; // Mostrar el contenedor si hay errores
    } else {
        alertaMm.style.display = 'none'; // Ocultar el contenedor si no hay errores
    }

    // Se valida si los arrays de errores están vacíos
    if (erroresCardNumber.length === 0 && erroresCardName.length === 0 && erroresCVC.length === 0 && erroresMM.length === 0 && erroresYY.length === 0) {

        const divOculto = document.getElementById('divOculto');
        const divVisible = document.getElementById('divVisible');

        divVisible.style.visibility = 'hidden';
        divOculto.style.visibility = 'visible';

    }
}

// FUNCION PARA EL BOTON DE CONFIRM //

const botonContinuar = document.getElementById('botonConfirm');
botonContinuar.onclick = cambiarVisibilidad;


// FUNCION PARA EL BOTON DE CONTINUE //

const reiniciar = () => location.reload();

const botonReiniciar = document.getElementById("botonReiniciar");
botonReiniciar.onclick = reiniciar;