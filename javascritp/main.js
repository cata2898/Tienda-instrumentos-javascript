// Bienvenida al comprador
let nombreComprador = prompt("Bienvenido a la tienda de música, ¿Cuál es tu nombre?");

if (nombreComprador === "") {
    alert("Bienvenid@, esperamos que puedas encontrar el instrumento perfecto para ti.");
} else {
    alert("¡Hola, " + nombreComprador + "! Es un placer tenerte en nuestra tienda virtual de músicos. ¡Esperamos que encuentres el instrumento perfecto para ti!");
}

const tasaImpuesto = 0.16;
let carrito = []; // Array para el carrito

const instrumentos = [
    { id: 1, nombre: "Guitarra", precio: 100 },
    { id: 2, nombre: "Piano", precio: 1000 },
    { id: 3, nombre: "Batería", precio: 700 },
    { id: 4, nombre: "Violín", precio: 300 },
    { id: 5, nombre: "Flauta", precio: 120 }
];

// Función para elegir un instrumento
function elegirInstrumento() {
    let mensaje = "Elige un instrumento:\n";

    for (let instrumento of instrumentos) {
        mensaje += instrumento.id + ": " + instrumento.nombre + "\n";
    }

    let seleccion = prompt(mensaje);
    seleccion = parseInt(seleccion);

    if (seleccion && seleccion >= 1 && seleccion <= instrumentos.length) {
        let instrumentoElegido = instrumentos.find(inst => inst.id === seleccion);
        alert("Elegiste el instrumento: " + instrumentoElegido.nombre);
        agregarAlCarrito(seleccion); // Llamar a la función para agregar al carrito después de elegir
    } else {
        alert("Tu selección es inválida. Por favor, elige un número correspondiente al instrumento que deseas.");
    }
}

// Llamar a la función para que el cliente elija un instrumento
elegirInstrumento();

// Función para agregar al carrito
function agregarAlCarrito(instrumentoId) {
    const instrumento = instrumentos.find(inst => inst.id === instrumentoId);

    if (instrumento) {
        carrito.push(instrumento);
        console.log(instrumento.nombre + " ha sido agregado al carrito!");
        mostrarCarrito();
    } else {
        console.log("Instrumento no encontrado.");
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    console.log("Contenido del carrito:");
    for (let item of carrito) {
        console.log(item.nombre + " - Precio: $" + item.precio);
    }

    const totalConIva = calcularTotal();
    console.log("Total con IVA: $" + totalConIva.toFixed(2));
}

// Función para calcular el total con IVA del carrito
function calcularTotal() {
    let total = 0;
    for (let item of carrito) {
        total += item.precio;
    }
    const totalConIva = total + (total * tasaImpuesto);
    return totalConIva;
}


