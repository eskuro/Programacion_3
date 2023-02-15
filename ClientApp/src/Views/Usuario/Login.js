import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import md5 from "md5"
import { redirect ,useNavigate, useLocation} from "react-router-dom";
import { } from "reactstrap";
import Cookies from "universal-cookie";
import { iniciarsesion } from "../../Servicios/UsuariosServicio"
import React, { useState, useEffect, useContext } from "react";
import icogoogle from "../../Assets/google-icon.svg"
import icopass from "../../Assets/password-icon.svg"
import icologin from "../../Assets/LogoLogin.png"
import icouser from "../../Assets/username-icon.svg"




const modelousuario =
{
    username: '',
    password: ''
}


export default function Login()
{


    const navigate = useNavigate();
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

        <body className="bg-dark d-flex justify-content-center align-items-center vh-100 ">
            <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width:400 }}>
                <div className="d-flex justify-content-center">
                    <img
                        src={icologin}
                        alt="login-icon"
                        style={{ height:112 }}
                    />

                </div>
                <div className="text-center fs-1 fw-bold">Login</div>
                <div className="input-group mt-4">
                    <div className="input-group-text bg-dark">
                        <img
                            src={icouser}
                            alt="username-icon"
                            style={{ height: 16 }}
                        />
                    </div>
                    <input type="text"
                        className="form-control bg-light"
                        name="username"
                        placeholder="Usuario..."
                        onChange={(e) => actualizarData(e)}
                    ></input>

                </div>
                <div className="input-group mt-1">
                    <div className="input-group-text bg-dark">
                        <img
                            src={icopass}
                            alt="pass-icon"
                            style={{ height: 16 }}
                        />
                    </div>
                    <input
                        type="password"
                        placeholder="Contraseña..."
                        className="form-control bg-light"
                        name="password"
                        onChange={(e) => actualizarData(e)}
                    ></input>
                </div>
               
                <button className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm"
                    onClick={
                        () => iniciosesion() 
                    }
                >Iniciar Sesion</button>
               
            </div>
             
            
        </body>


        
        
        )

}