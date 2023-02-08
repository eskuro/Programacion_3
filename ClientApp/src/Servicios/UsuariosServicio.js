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



