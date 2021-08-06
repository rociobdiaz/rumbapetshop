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


/*MODIFICACION DE H2 EN EL HEADER DEL INDEX POR DOM
SE CAMBIÓ EL TÍTULO "ALIMENTOS BALANCEADOS"*/
const tituloSeccionProductos = document.getElementById('titulo-seccion');
tituloSeccionProductos.innerHTML = 'Nuestros Productos Disponibles';


// PRIMERAS MODIFICACIONES PARA EL CARRITO - EN PROCESO
//USO DE DOM, EVENTOS, OBJETOS, ARRAY, 

const Clickbutton = [...document.getElementsByClassName('button')];
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.item')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.img-card').src
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        images: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)

}

function addItemCarrito(newItem){
    const inputElemento = tbody.getElementsByClassName('input-element');

    for(let i =0; i < carrito.length ; i++){
        if (carrito[i].title === newItem.title.trim()) {
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i]
            inputValue.value++;
            carritoTotal()
            return null;
        }
    }

    carrito.push(newItem)

    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = '' 
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content = `
        <th scope="row">1</th>
                <td class="table__productos">
                    <img src=${item.images} alt="">
                    <h6 class="title-carrito">${item.title}</h6>
                </td>
                <td class="table__precio"><p>${item.precio}</p></td>
                <td class="table__cantidad">
                    <input type="number" min="1" value=${item.cantidad} class="input-element">
                    <button class="delete btn btn-danger">x</button>
                </td>
        `

        tr.innerHTML = Content;
        tbody.append(tr)

    })

    carritoTotal()
    
}

function carritoTotal(){
    let total = 0;
    const itemCarritoTotal = document.querySelector('.itemCarritoTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio*item.cantidad
    })

    itemCarritoTotal.innerHTML = `Total ${total}`
}
