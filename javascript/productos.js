const listaItems = document.getElementById('#lista-items');

function cajasProductos (){
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="item gatos purina" >
            <img class="img-card" src="./imagenes/proplancatadult.jpg" alt="pro plan gato adulto">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Gato Adulto 7kg</p>
            <p><span class="precio">$ 3000</span></p>
            <button type="button" id="p01" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item gatos purina" >
            <img class="img-card" src="./imagenes/proplancatkitten.jpg" alt="pro plan kitten">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Gato Kitten 7kg</p>
            <p><span class="precio">$2000</span></p>
            <button type="button" id="p02" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item gatos royal" >
            <img class="img-card" src="./imagenes/royalcatadult.jpg" alt="royal canin gato adulto">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Gato Adulto 7kg</p>
            <p><span class="precio">$4500</span></p>
            <button type="button" id="p03" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item gatos royal" >
            <img class="img-card" src="./imagenes/royalcatkitten.jpg" alt="royal canin kitten">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Gato Kitten 7kg</p>
            <p><span class="precio">$3500</span></p>
            <button type="button" id="p04" class="btn btn-warning button">Comprar</button>
        </div>

        <!-- cajas con alimento de perros
        <div class="item perros purina" >
            <img class="img-card" src="./imagenes/proplandogadult.jpg" alt="pro plan perro adulto">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Perro Adulto 7kg</p>
            <p><span class="precio">$4000</span></p>
            <button type="button" id="p05" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item perros purina" >
            <img class="img-card" src="./imagenes/proplandogpuppy.jpg" alt="pro plan perro cachorro">
            <h5 class="card-title">Purina Pro Plan</h5>
            <p class="descripcion">Perro Cachorro 7kg</p>
            <p><span class="precio">$3000</span></p>
            <button type="button" id="p06" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="item perros royal" >
            <img class="img-card" src="./imagenes/royaldogadult.jpg" alt="royal canin perro adulto">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Perro Adulto 7kg</p>
            <p><span class="precio">$5500</span></p>
            <button type="button" id="p07" class="btn btn-warning button">Comprar</button>
        </div>

        <div class="royal-cachorro item perros" >
            <img class="img-card" src="./imagenes/royaldogpuppy.jpg" alt="royal canin perro cachorro">
            <h5 class="card-title">Royal Canin</h5>
            <p class="descripcion">Perro Cachorro 7kg</p>
            <p><span class="precio">$4500</span></p>
            <button type="button" id="p08" class="btn btn-warning button">Comprar</button>
        </div>
    `
    listaItems.append(div);
}