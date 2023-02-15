import md5 from 'md5';

const urlbase = "api/usuario/"



export async function iniciarsesion(username,password) {

    try {
        const response = await fetch(urlbase + username + "/"
            +  md5(password));

        return await response.json();

    } catch (e) {


        return await null;
    }

}

export async function mostrarusuarios() {

    try {
        const response = await fetch(urlbase);
        return await response.json();

    } catch (e) {
        return await null;
    }

}

export async function nuevousuario(usuario) {



    try {
        const res = await fetch(urlbase + "Nuevo",
            {

                method: "POST",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(usuario)


            });
        return await res.json();
    } catch (e) {
        console.error(e);
    }
}


export async function modificarusuario(usuario) {

    try {
        const res = await fetch(urlbase + "Modificar",
            {

                method: "PUT",
                headers: { 'Content-type': "application/json" },
                body: JSON.stringify(usuario)


            });

        return await res.json();
    } catch (e) {
        console.error(e);
    }

}

export async function borrarusuario(idusuario) {

    try {

        var respuesta = window.confirm("Desea eliminar el rubro seleccionado ?")
        if (!respuesta) {
            return;

        }

        const res = await fetch(urlbase + "Borrar/" + idusuario,
            {
                method: "DELETE"
            })

        return await res.json();
    } catch (e) {
        console.error(e);
    }

}

