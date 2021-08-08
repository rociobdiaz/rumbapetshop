class alimentos{
    constructor(id, marca, edad, kilos, precio){
        this.id = id;
        this.marca = marca;
        this.edad = edad;
        this.kilos = kilos;
        this.precio = precio;
    }
    alimento() {
        console.log("ID: " + this.id, "Alimento marca: " + this.marca , "Edad: " + this.edad, "Kilos: " + this.kilos, "Precio: " + this.precio);
    }
}

const alimentoPurinaGato = new alimentos ("p01", "Purina Pro Plan", "Gato adulto", "7kg", 3000);
const alimentoPurinaKitten = new alimentos ("p02", "Purina Pro Plan", "Kitten", "7kg", 2000);
const alimentoRoyalGato = new alimentos ("p03", "Royal Canin", "Gato adulto", "7kg", 4500);
const alimentoRoyalKitten = new alimentos ("p04", "Royal Canin", "Kitten", "7kg", 3500);
const alimentoPurinaPerro = new alimentos ("p05", "Purina Pro Plan", "Perro adulto", "7kg", 4000);
const alimentoPurinaCachorro = new alimentos ("p06", "Purina Pro Plan", "Cachorro", "7kg", 3000);
const alimentoRoyalPerro = new alimentos ("p07", "Royal Canin", "Perro adulto", "7kg", 5500);
const alimentoRoyalCachorro = new alimentos ("p08", "Royal Canin", "Cachorro", "7kg", 4500);

const todosLosAlimentos = [alimentoRoyalCachorro, alimentoRoyalPerro, alimentoPurinaCachorro, alimentoPurinaPerro, alimentoRoyalKitten, alimentoRoyalGato, alimentoPurinaKitten, alimentoPurinaGato];



//LOCALSTORAGE


const productosJSON = JSON.stringify(todosLosAlimentos);

localStorage.setItem('productos', productosJSON);

let productosEnStock = JSON.parse(localStorage.getItem('productos'));

console.log(productosEnStock);

