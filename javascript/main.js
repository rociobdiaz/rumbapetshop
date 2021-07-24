/* función utilizando prompt, alerts, condicionales,
operadores logicos para que se muestre en pantalla la
opción de suscribirse a un newsletter */

OnlyDigits = /^[0-9]+$/;

function ingresoEmail () {
    let email = prompt("¿Te gustaría inscribirte a nuestro newsletter? ¡Dejanos tu e-mail");

    if ((email === "") || (OnlyDigits.test(email))) {
        alert("¡Ups! Ingreso erróneo.");

    }else if (email === null) {
        alert("Newsletter cancelada.");

    }else {
        alert(`Te has suscrito a nuestro newsletter con el e-mail: ${email}`);

    }
}
ingresoEmail();


/* funcion constructora, objeto, metodos personalizados,
array, para que en consola se muestren los productos disponibles */
class alimentoPerro{
    constructor(marca, edad, kilos, precio){
        this.marca = marca;
        this.edad = edad;
        this.kilos = kilos;
        this.precio = precio;
    }
    alimento() {
        console.log("Alimento marca: " + this.marca , "Edad: " + this.edad, "Kilos: " + this.kilos, "Precio: " + this.precio);
    }
}

const alimentoPerro1 = new alimentoPerro ("Royal Canin", "cachorro", 3, 3000);
const alimentoPerro2 = new alimentoPerro ("Royal Canin", "adulto", 7, 5000);
const alimentoPerro3 = new alimentoPerro ("Purina Pro Plan", "cachorro", 3, 2000);
const alimentoPerro4 = new alimentoPerro ("Purina Pro Plan", "adulto", 7, 4000);

const todosLosAlimentos = [alimentoPerro1, alimentoPerro2, alimentoPerro3, alimentoPerro4];

console.log(todosLosAlimentos);
