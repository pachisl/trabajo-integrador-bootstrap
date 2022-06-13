const valorTickets = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("is-invalid");
    }
}

function total_a_pagar() {
    quitarClaseError();
    if (nombre.value === "") {
        alert("Por favor, escribi tu nombre")
        nombre.classlist.add("is-invalid");
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        alert("Por favor, escribi tu apellido")
        apellido.classlist.add("is-invalid");
        apellido.focus();
        return;
    }
    if (correo.value === "") {
        alert("Por favor, escribi tu correo")
        correo.classlist.add("is-invalid");
        correo.focus();
        return;
    }
    const emailValido = correo => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
    }
    if (!emailValido(correo.value)) {
        alert("Por favor, escribi correo electronico valido")
        correo.classlist.add("is-invalid");
        correo.focus();
        return;
    }
    if ((cantidad.value == 0) || (isNaN(cantidad.value))) {
        alert("Por favor, ingresa la cantidad de tickets");
        cantidad.classlist.add("is-invalid");
        cantidad.focus();
        return;
    }
    if (categoria.value === "") {
        alert("Por favor, elegí tu categoria")
        categoria.classlist.add("is-invalid");
        categoria.focus();
        return;
    }
    let totalValorTickets = (cantidad.value) * valorTickets
    
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    totalPago.innerHTML = totalValorTickets;
    
}
btnResumen.addEventListener("click", total_a_pagar)
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = " ";
}
btnBorrar.addEventListener("click",reset_total_a_pagar)