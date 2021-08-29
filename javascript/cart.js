//VARIABLES
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carritoTotal = document.querySelector('#itemCarritoTotal');
let articulosCarrito = [];
const botonFiltro = document.querySelectorAll(".botonFiltro");
const items = document.querySelectorAll(".item");



//EVENTOS
cargarEventListeners();
function cargarEventListeners(){
    $("#lista-items").on('click', agregarItem);

    $("#carrito").on('click', eliminarProducto);
}

$(".carrito2").click(() => { 
    $("#carrito").toggle("fast");
});

$("#enviarMensaje").on('click', enviarFormulario);



//FUNCIONES

//carrito
function agregarItem(e){
    e.preventDefault();
    if(e.target.classList.contains('button')){
        const productoSeleccionado = e.target.parentElement;
        
        leerDatosItems(productoSeleccionado);
    }

}


function eliminarProducto(e){
    
    if(e.target.classList.contains('delete')){
        const productoId = e.target.getAttribute('id');

        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

        carritoHtml();
    }
}


function leerDatosItems(producto){

    const infoProducto = {
        imagen: producto.querySelector('img').src,
        producto: producto.querySelector('h5').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('button').getAttribute('id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some( producto => producto.id === infoProducto.id);

    if(existe){
        const articulos = articulosCarrito.map(producto => {
            if(producto.id === infoProducto.id){
                producto.cantidad++;
                return producto;
            }else{
                return producto;
            }
        });
        articulosCarrito = [...articulos];
    }else{
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    carritoHtml();
}

function carritoHtml(){

    limpiarHtml();

    articulosCarrito.forEach( producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            
            <td class="table__productos">
                <img src=${producto.imagen} alt="">
            </td>
            <td>
                <h6 class="titulo-carrito">${producto.producto}</h6>
            </td>
            <td class="table__precio"><p>${producto.precio}</p></td>
            <td class="table__cantidad">
                ${producto.cantidad}
                <button class="delete btn btn-danger" id="${producto.id}">x</button>
            </td>
        `
        contenedorCarrito.append(row);
    })
    sumaCarritoTotal();
}


function limpiarHtml(){
    contenedorCarrito.innerHTML = '';
}


function sumaCarritoTotal (){
    let total = 0;
    articulosCarrito.forEach((producto) => {
        const precio = Number(producto.precio.replace("$", ''))
        total = total + precio*producto.cantidad
    })
    carritoTotal.innerHTML = `Total: $ ${total}`
}



//filtro categorias

for (let index = 0; index < botonFiltro.length; index++) {
    botonFiltro[index].addEventListener("click", (e) => {
        e.preventDefault();

        const filtro = e.target.dataset.filter;

        items.forEach((productito) => {
            if(filtro == "todos"){
                productito.style.display = "block";
            }else{
                if(productito.classList.contains(filtro)){
                    productito.style.display = "block"
                }else{
                    productito.style.display = "none";
                    }
            }  
        })
    })
}


//formulario contacto

function enviarFormulario(e){
    e.preventDefault();
    
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const envio = {formulario: "enviado"};

    $.ajax({
        url: URL,
        type: 'POST',
        data: envio,
    })
    .done(function(response){
        console.log('respuesta:', response)
    })
    .fail(function(error){
        console.log('error', error)
    })
}

