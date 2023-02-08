const urlRubro = "api/rubro/";
export async function mostrarrubro() {

    try {
        const response = await fetch(urlRubro + "Lista");
        return await response.json();

    } catch (e) {
        console.log(e);
    }

}


export async function nuevarubro(rubro) {



    try {
        const res = await fetch(urlRubro + "Nuevo",
            {

                method: "POST",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(rubro)


            });
        return await res.json();
    } catch (e) {
        console.error(e);
    }
}


export async function modificarrubro(rubro) {

    try {
        const res = await fetch(urlRubro + "Modificar",
            {

                method: "PUT",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(rubro)


            });

        return await res.json();
    } catch (e) {
        console.error(e);
    }

}

export async function borrarrubro(idrubro) {

    try {

        var respuesta = window.confirm("Desea eliminar el rubro seleccionado ?")
        if (!respuesta) {
            return;

        }

        const res = await fetch(urlRubro + "Borrar/" + idrubro,
            {
                method: "DELETE"
            })

        return await res.json();
    } catch (e) {
        console.error(e);
    }

}