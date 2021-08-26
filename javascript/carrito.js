
// PRIMERAS MODIFICACIONES PARA EL CARRITO - EN PROCESO
//USO DE DOM, EVENTOS, OBJETOS, ARRAY, 

const clickBoton = [...document.getElementsByClassName('button')];
const tbody = document.querySelector('.tbody');
let carrito = []
const cantidadTotal = document.getElementsByClassName('elemento-input');


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

    addItemCarrito(nuevoItem);
    

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





function renderCarrito(){
    tbody.innerHTML = '' 
    carrito.map(item => {
        /* tbody.append(
            `
            <tr>
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
            </tr>
        `
        ) */
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
        tbody.append(tr) //append para crear el tr en tbody

        $(".delete").on('click', eliminarItemCarrito); //selector clase delete y metodo on
        
    })

    carritoTotal();


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





//eliminar productos - en construccion

function eliminarItemCarrito(e){
    const botonEliminar = e.target
    const treliminar = botonEliminar.closest('.ItemCarrito')
    const titulo = treliminar.querySelector('.item');
    for(let i=0; i < carrito.length ; i++){
        if(carrito[i].titulo.trim() === titulo){
            carrito.splice(i, 1);
            
        }
    }
        
    treliminar.remove()


    carritoTotal()//no funciona cuando llamo esta funcion para actualizar el total
}

