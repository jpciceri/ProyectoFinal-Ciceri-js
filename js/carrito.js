function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function getProductosCarritoStorage() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

function estaEnElCarrito(id) {
    const carrito = getProductosCarritoStorage();
    return carrito.some(item => item.id === id);
}

function inicializarStorage(){
    var carrito = localStorage.getItem("carrito");
    if(carrito == '' || carrito == null){
        localStorage.setItem("carrito", '[]');
    }
}

function agregarAlCarrito(id) {   
    let carrito = getProductosCarritoStorage();

    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProductoFromData(id);

        if(producto != null){
            producto.cantidad = 1;
            carrito.push(producto);
        }      
    }
    guardarProductosCarrito(carrito);
    renderBotonCarrito();    
}

function guardarCarritoLS(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function eliminarProducto(id) {
    const carrito = getProductosCarritoStorage();
    const productos = carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProductoFromData(id) {     
    return productos.find(item => item.id === id); 
}

function totalProductosCarrito() {
    const productos = getProductosCarritoStorage();

    return productos.reduce((total, item) => total += item.cantidad, 0);
}

function totalPagarCarrito() {
    const productos = getProductosCarritoStorage();

    return productos.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

function renderBotonCarrito() {
    document.getElementById("carrito").innerText = totalProductosCarrito();
}