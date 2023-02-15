const urlbase = "api/producto/";
const urlMarca = "api/marca/";
export async function mostrarProd(){

    try {
        const response = await fetch(urlbase + "Lista");
        return await response.json();

    } catch (e) {
        console.log(e);
    }  
    
}

export async function nuevoProducto(producto)
{
    console.log(producto);
    try {
        const res = await fetch(urlbase + "Nuevo",
            {

                method: "POST",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(producto)


            });

        console.log(res);
        return await res.json();
    } catch (e) {
        console.error(e);
    }
}


export async function modificarprod(producto)
{

    try {
        const res = await fetch(urlbase + "Modificar",
            {

                method: "PUT",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(producto)


            });

        return await res.json();
    } catch (e) {
        console.log(e);
    }

}

export async function borrarprod(idproducto) {

    try {

        var respuesta = window.confirm("Desea eliminar el producto seleccionado ?")
        if (!respuesta)
        {
            return;

        }

        const res = await fetch(urlbase + "Borrar/" + idproducto,
            {

                method:"DELETE"


            })
   
        return await res.json();
    } catch (e) {
        console.log(e);
    }

}

export async function mostrarmarca()
{

    try {
        const response = await fetch(urlMarca + "Lista");
        return await response.json();

    } catch (e) {
        console.log(e);
    }  

}


 

