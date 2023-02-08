const urlMarca = "api/marca/";
export async function mostrarmarca() {

    try {
        const response = await fetch(urlMarca + "Lista");
        return await response.json();

    } catch (e) {
        console.log(e);
    }

}


export async function nuevamarca(marca) {



    try {
        const res = await fetch(urlMarca + "Nuevo",
            {

                method: "POST",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(marca)


            });
        return await res.json();
    } catch (e) {
        console.error(e);
    }
}


export async function modificarmarca(marca) {

    try {
        const res = await fetch(urlMarca + "Modificar",
            {

                method: "PUT",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(marca)


            });

        return await res.json();
    } catch (e) {
        console.error(e);
    }

}

export async function borrarmarca(idmarca) {

    try {

        var respuesta = window.confirm("Desea eliminar el producto seleccionado ?")
        if (!respuesta) {
            return;

        }

        const res = await fetch(urlMarca + "Borrar/" + idmarca,
            {
                method: "DELETE"
            })

        return await res.json();
    } catch (e) {
        console.error(e);
    }

}