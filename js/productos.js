function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

async function getProductos()
{
    let response = await fetch('./data/data.json');
    
    return response.json();
}