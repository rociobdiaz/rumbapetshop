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

const alimentoRoyalCachorro = new alimentoPerro ("Royal Canin", "Cachorro", "7kg", 4500);
const alimentoRoyalPerro = new alimentoPerro ("Royal Canin", "Adulto", "7kg", 5500);
const alimentoPurinaCachorro = new alimentoPerro ("Purina Pro Plan", "Cachorro", "7kg", 3000);
const alimentoPurinaPerro = new alimentoPerro ("Purina Pro Plan", "Adulto", "7kg", 4000);

const todosLosAlimentos = [alimentoRoyalCachorro, alimentoRoyalPerro, alimentoPurinaCachorro, alimentoPurinaPerro];

console.log(todosLosAlimentos);



/*CREACION DE ELEMENTO DESDE OBJETO POR DOM 
DIV CON INFORMACION ACERCA DEL PRODUCTO ROYAL CANIN CACHORRO
EN HTML ESTÁ COMENTADO*/

let producto = document.getElementsByClassName('royal-cachorro');

let newDiv = document.createElement('div');
newDiv.innerHTML = `<h5>${alimentoRoyalCachorro.marca}</h5>
                    <p>Perro ${alimentoRoyalCachorro.edad} ${alimentoRoyalCachorro.kilos}</p>
                    <p>$${alimentoRoyalCachorro.precio}</p>`

producto[0].appendChild(newDiv);


/*MODIFICACION DE H2 EN EL HEADER DEL INDEX POR DOM
SE CAMBIÓ EL TÍTULO "ALIMENTOS BALANCEADOS"*/
const tituloSeccionProductos = document.getElementById('titulo-seccion');
tituloSeccionProductos.innerHTML = 'Nuestros Productos Disponibles';



