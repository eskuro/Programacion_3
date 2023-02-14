import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import md5 from "md5"
import { redirect ,useNavigate, useLocation} from "react-router-dom";
import { } from "reactstrap";
import Cookies from "universal-cookie";
import { iniciarsesion } from "../../Servicios/UsuariosServicio"
import React, { useState, useEffect, useContext } from "react";
import RutasProtegidas from "../../Componentes/RutasProtegidas";


const modelousuario =
{
    username: '',
    password: ''
}


export default function Login()
{


    const navigate = useNavigate();
    const location = useLocation();
    const [usuario, setusuario] = useState(modelousuario);
    const cookies = new Cookies();
    const actualizarData = (e) =>
    {
        setusuario(
            {
                    ...usuario,
                [e.target.name]: e.target.value
            });
    }

    useEffect(() => {


        console.log(cookies.get('username'));
        if (cookies.get('username')) {
            navigate("/index");
        }



    }, [])


    const iniciosesion = async () =>
    {
        
     
        const response = await iniciarsesion(usuario.username, usuario.password);
        if (response.length > 0) {
            var respuesta = response[0];

            cookies.set('usuarioId', respuesta.usuarioId, { path: '/' });
            cookies.set('username', respuesta.username, { path: '/' });
            cookies.set('usuarioApellido', respuesta.usuarioApellido, { path: '/' });
            cookies.set('usuarioNombre', respuesta.usuarioNombre, { path: '/' });
            cookies.set('password', respuesta.password, { path: '/' });
            console.log(cookies.get('username'))
            navigate("/index")


        } else
        {
            alert("El usuario o contraseña son incorrectos");
        }
        
    }
   
    

    return (

        <div className="container">
            <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input type="text"
                    className="form-control"
                    name="username"
                    onChange={(e) => actualizarData(e)} 
                ></input>
                <br />
                <label>Contraseña: </label>
                <br />
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={(e) => actualizarData(e)} 
                ></input>
                <br />
                <button className="btn btn-primary"
                    onClick={
                        () => iniciosesion() 
                    }
                >Iniciar Sesion</button>
               
            </div>
             
            
        </div>


        
        
        )

}