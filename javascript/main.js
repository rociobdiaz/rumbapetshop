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





// PRIMERAS MODIFICACIONES PARA EL CARRITO - EN PROCESO
//USO DE DOM, EVENTOS, OBJETOS, ARRAY, 

const clickBoton = [...document.getElementsByClassName('button')];
const tbody = document.querySelector('.tbody')
let carrito = []


//agregar items al carrito
clickBoton.forEach(btn => {
    btn.addEventListener('click', agregarItemCarrito)
})

function agregarItemCarrito(e){
    const button = e.target
    const item = button.closest('.item')
    const itemTitulo = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent
    const itemImg = item.querySelector('.img-card').src
    
    const nuevoItem = {
        titulo: itemTitulo,
        precio: itemPrecio,
        images: itemImg,
        cantidad: 1
    }

    addItemCarrito(nuevoItem)

}

function addItemCarrito(nuevoItem){
    const inputElemento = tbody.getElementsByClassName('elemento-input');

    for(let i =0; i < carrito.length ; i++){
        if (carrito[i].titulo === nuevoItem.titulo.trim()) {
            carrito[i].cantidad ++;
            const inputValue = inputElemento[i]
            inputValue.value++;
            carritoTotal()
            return null;
        }
    }

    carrito.push(nuevoItem)

    renderCarrito()
}

//diseño del carrito
function renderCarrito(){
    tbody.innerHTML = '' 
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const contenido = `
        <th scope="row">1</th>
                <td class="table__productos">
                    <img src=${item.images} alt="">
                    <h6 class="titulo-carrito">${item.titulo}</h6>
                </td>
                <td class="table__precio"><p>${item.precio}</p></td>
                <td class="table__cantidad">
                    <input type="number" min="1" value=${item.cantidad} class="elemento-input">
                    <button class="delete btn btn-danger">x</button>
                </td>
        `

        tr.innerHTML = contenido;
        tbody.append(tr)

    })

    carritoTotal()
    
}

//suma el precio de los productos
function carritoTotal(){
    let total = 0;
    const itemCarritoTotal = document.querySelector('.itemCarritoTotal')
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio*item.cantidad
    })

    itemCarritoTotal.innerHTML = `Total: $ ${total}`
}
