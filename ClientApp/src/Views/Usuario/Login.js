import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import md5 from "md5"
import { redirect ,useNavigate} from "react-router-dom";
import { } from "reactstrap";
import Cookies from "universal-cookie";
import { iniciarsesion } from "../../Servicios/UsuariosServicio"
import React, { useState, useEffect } from "react";

const modelousuario =
{
    username: '',
    password: ''
}


export default function Login(props)
{
    const navigate = useNavigate();
    const [usuario, setusuario] = useState(modelousuario)
    const cookies = new Cookies();
    const actualizarData = (e) =>
    {
        setusuario(
            {
                    ...usuario,
                [e.target.name]: e.target.value
            });
    }

    const iniciosesion = async () =>
    {
        const response = await iniciarsesion(usuario.username, usuario.password);
        if (response.length > 0) {

            cookies.set('usuarioId', response.usuarioId, { path: '/' });
            cookies.set('username', response.username, { path: '/' });
            cookies.set('usuarioApellido', response.usuarioApellido, { path: '/' });
            cookies.set('usuarioNombre', response.usuarioNombre, { path: '/' });
            cookies.set('password', response.password, { path: '/' });
            alert("BUENAS PAPU" + response.username)
            navigate("/index");
           

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
                    onClick={()=>iniciosesion()}
                >Iniciar Sesion</button>
            </div>
                

        </div>


        
        
        )

}