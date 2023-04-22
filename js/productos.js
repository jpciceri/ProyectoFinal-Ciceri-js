async function getProductos()
{
    let response = await fetch('./data/data.json');    
    return response.json();
}