/* OnlyDigits = /^[0-9]+$/;

let newsletter = prompt ("¿Te gustaría inscribirte a nuestro newsletter? ¡Dejanos tu e-mail");

if ((newsletter === "") || (OnlyDigits.test(newsletter))) {
    alert("¡Ups! Ingreso erróneo.");
}else if (newsletter === null) {
    alert("Newsletter cancelada.")
}else {
    alert(`Tu e-mail es ${newsletter}. ¡Te enviaremos ofertas en breve!`);
}
 */


/* CORRECCIÓN ENTREGA CLASE 4 */

/* OnlyDigits = /^[0-9]+$/;

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
ingresoEmail(); */






//CLASE 5 y 6



//OPCION 1
/* 
alert("Este es nuestro catálogo de alimentos");

function dogFood(marca, edad, kilos, precio) {
    this.marca = marca;
    this.edad = edad;
    this.kilos = kilos;
    this.precio = precio;
    this.alimento = `Alimento marca: ${marca} </br> Edad: ${edad}  </br> Kilos: ${kilos} </br> Precio: ${precio} </br></br>`;
}

const dogFood1 = new dogFood ("Royal Canin", "cachorro", 3, 3000);
const dogFood2 = new dogFood ("Royal Canin", "adulto", 7, 4500);

document.write(dogFood1.alimento);
document.write(dogFood2.alimento); */




//OPCION 2
/* class dogFood{
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

const dogFood1 = new dogFood ("Royal Canin", "cachorro", 3, 3000);
dogFood1.alimento(); */


//OPCION 3


/* 
const dogFood1 = {
    marca: 'Royal Canin', 
    descripcion: 'Alimento para cachorros', 
    kilos: 3,
    precio: {
        moneda: 'pesos',
        valor: 3500
    },
    categoria: ['Perros', 'Alimento seco']
}

const dogFood2 = {
    marca: 'Royal Canin', 
    descripcion: 'Alimento para perros adultos', 
    kilos: 7,
    precio: {
        moneda: 'pesos',
        valor: 4500
    },
    categoria: ['Perros', 'Alimento seco']
}

const dogFood3 = {
    marca: 'Purina Pro Plan', 
    descripcion: 'Alimento para cachorros', 
    kilos: 3,
    precio: {
        moneda: 'pesos',
        valor: 3500
    },
    categoria: ['Perros', 'Alimento seco']
}

const dogFood4 = {
    marca: 'Purina Pro Plan', 
    descripcion: 'Alimento para perros adultos', 
    kilos: 7,
    precio: {
        moneda: 'pesos',
        valor: 4500
    },
    categoria: ['Perros', 'Alimento seco']
}


const dogFood = [dogFood1, dogFood2, dogFood3, dogFood4];

console.log(dogFood); */
