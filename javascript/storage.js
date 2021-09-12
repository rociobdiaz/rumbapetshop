let carrito = document.querySelectorAll('.button'); 

class alimento{
    constructor(id, marca, descripcion, precio, cantidad){
        this.id = id;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const alimentoPurinaGato = new alimento ("p01", "Purina Pro Plan", "Gato adulto 7kg", 3000, 0);
const alimentoPurinaKitten = new alimento ("p02", "Purina Pro Plan", "Kitten 7kg", 2000, 0);
const alimentoRoyalGato = new alimento ("p03", "Royal Canin", "Gato adulto 7kg", 4500, 0);
const alimentoRoyalKitten = new alimento ("p04", "Royal Canin", "Kitten 7kg", 3500, 0);
const alimentoPurinaPerro = new alimento ("p05", "Purina Pro Plan", "Perro adulto 7kg", 4000, 0);
const alimentoPurinaCachorro = new alimento ("p06", "Purina Pro Plan", "Cachorro 7kg", 3000, 0);
const alimentoRoyalPerro = new alimento ("p07", "Royal Canin", "Perro adulto 7kg", 5500, 0);
const alimentoRoyalCachorro = new alimento ("p08", "Royal Canin", "Cachorro 7kg", 4500, 0);


const productos = [alimentoPurinaGato, alimentoPurinaKitten, alimentoRoyalGato, alimentoRoyalKitten, alimentoPurinaPerro, alimentoPurinaCachorro, alimentoRoyalPerro, alimentoRoyalCachorro];


for (let i=0; i< carrito.length; i ++){
    carrito[i].addEventListener('click', () => { 
        numeroProductos(productos[i]);
        costoTotal(productos[i]);
    }) 
}



function numeroProductos(producto) { 
    
    let productNumbers = localStorage.getItem('numeroProductos');

    productNumbers = parseInt(productNumbers); 

    if(productNumbers){ 
        localStorage.setItem('numeroProductos', productNumbers + 1); 
        
    }else{
        localStorage.setItem('numeroProductos', 1); 
        
    }   

    setItems(producto); 
    
}

function setItems(producto) { 
    let itemsCarrito = localStorage.getItem('productosCantidad');
    itemsCarrito = JSON.parse(itemsCarrito); 
    
    if(itemsCarrito != null){ 
        
        if(itemsCarrito[producto.id] == undefined){ 
            itemsCarrito = {
                ...itemsCarrito,
                [producto.id]: producto
            }
        }
        itemsCarrito[producto.id].cantidad += 1; 
    }else{
        producto.cantidad = 1;
        itemsCarrito = {
            [producto.id]: producto 
        }
    }

    localStorage.setItem("productosCantidad", JSON.stringify(itemsCarrito));
}

function costoTotal(producto){
    let carritoCosto = localStorage.getItem('costoTotal');
    
    if(carritoCosto != null){ 
        carritoCosto = parseInt(carritoCosto);
        localStorage.setItem('costoTotal', carritoCosto + producto.precio);
    }else{
        localStorage.setItem("costoTotal", producto.precio);
    }
    
}
