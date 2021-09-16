
//VARIABLES
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carritoTotal = document.querySelector('#itemCarritoTotal');
let articulosCarrito = [];
const botonFiltro = document.querySelectorAll(".botonFiltro");
const items = document.querySelector(".contenedor__principal--productos");





//EVENTOS
cargarEventListeners();

function cargarEventListeners(){
    $("#lista-items").on('click', agregarItem);

    $("#carrito").on('click', eliminarProducto);

    $(".carrito2").click(() => { 
    $("#carrito").toggle("fast");
    });

    $("#enviarMensaje").on('click', enviarFormulario);

}


//FUNCIONES


//productos index html

function cajasProductos (){
    
    items.innerHTML = `
        <div class="item gatos purina" id="items">
            <img class="img-card" src="./imagenes/proplancatadult.jpg" alt="pro plan gato adulto">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Gato Adulto 7kg</p>
            <p><span class="precio">$ 3000</span></p>
            <button type="button" id="p01" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item gatos purina" id="items">
            <img class="img-card" src="./imagenes/proplancatkitten.jpg" alt="pro plan kitten">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Gato Kitten 7kg</p>
            <p><span class="precio">$2000</span></p>
            <button type="button" id="p02" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item gatos royal" id="items">
            <img class="img-card" src="./imagenes/royalcatadult.jpg" alt="royal canin gato adulto">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Gato Adulto 7kg</p>
            <p><span class="precio">$4500</span></p>
            <button type="button" id="p03" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item gatos royal" id="items">
            <img class="img-card" src="./imagenes/royalcatkitten.jpg" alt="royal canin kitten">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Gato Kitten 7kg</p>
            <p><span class="precio">$3500</span></p>
            <button type="button" id="p04" class="btn btn-warning button">Comprar</button>
        </div>
        
        <div class="item perros purina" id="items">
            <img class="img-card" src="./imagenes/proplandogadult.jpg" alt="pro plan perro adulto">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Perro Adulto 7kg</p>
            <p><span class="precio">$4000</span></p>
            <button type="button" id="p05" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item perros purina" id="items">
            <img class="img-card" src="./imagenes/proplandogpuppy.jpg" alt="pro plan perro cachorro">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Perro Cachorro 7kg</p>
            <p><span class="precio">$3000</span></p>
            <button type="button" id="p06" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item perros royal" id="items">
            <img class="img-card" src="./imagenes/royaldogadult.jpg" alt="royal canin perro adulto">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Perro Adulto 7kg</p>
            <p><span class="precio">$5500</span></p>
            <button type="button" id="p07" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item perros royal" id="items">
            <img class="img-card" src="./imagenes/royaldogpuppy.jpg" alt="royal canin perro cachorro">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Perro Cachorro 7kg</p>
            <p><span class="precio">$4500</span></p>
            <button type="button" id="p08" class="btn btn-warning button">Comprar</button>
        </div>
    `    
}
cajasProductos();


//filtro categorias del aside

for (let index = 0; index < botonFiltro.length; index++) {
    botonFiltro[index].addEventListener("click", (e) => {
        e.preventDefault();

        const filtro = e.target.dataset.filter;
        const itemcitos = document.querySelectorAll('.item');

        itemcitos.forEach(productito => {
            if(filtro == "todos"){
                productito.style.display = "block";
            }else{
                if(productito.classList.contains(filtro)){
                    productito.style.display = "block";
                }else{
                    productito.style.display = "none";
                }
            }
        })
        
    })
}


//funciones referentes al carrito

function agregarItem(e){
    e.preventDefault();
    if(e.target.classList.contains('button')){
        const productoSeleccionado = e.target.parentElement;
        
        leerDatosItems(productoSeleccionado);
    }

}


function eliminarProducto(e){
    e.preventDefault();
    
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



