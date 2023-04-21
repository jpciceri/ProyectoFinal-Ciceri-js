
function init(){
    renderProductos();
    renderBotonCarrito();
    
    let buscar = document.getElementById('texto_busqueda');
    buscar.addEventListener("keyup", (ev) => {        
        if(ev.key === "Enter"){
            renderProductos(ev.target.value);
        }        
    });

    document.getElementById('boton_buscar').addEventListener("click", (ev) => {
        renderProductos(document.getElementById('texto_busqueda').value.toLowerCase());
    });
}

async function renderProductos(filter) {
    let productos = await getProductos();
    
    if(filter != null && filter.length > 0){
        productos = productos.filter(item => item.nombre.toLowerCase().indexOf(filter) !== -1);
    }

    let salida = "";
    document.getElementById("productos").innerHTML = '';

    for (producto of productos) {
        salida += `<div class="col-md-3 my-3">
            <div class="card text-center border-0">
                <img src="${"images/" + producto.imagen}" alt="${producto.nombre}" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$${producto.precio}</p>
                    <p><button class="btn btn-secondary" onclick="agregarAlCarrito(${producto.id});" title="Agregar Producto">Agregar (+)</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}
