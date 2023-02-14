import { Outlet, Link, useNavigate } from "react-router-dom";
import ModalMarca from "./Producto/ModalMarca"
import Cookies from "universal-cookie";
import Menu from "../Componentes/Menu";
import Login from "./Usuario/Login";
import React, { Component, useEffect } from "react"




const Index = () => {

   
    return (

            <>

          <div className="container" >

                <h1>Pagina PRINCIPAL</h1>

                <div className="container mt-5">
                    <div className="btn-group">
                        <Link to="/consultaproducto" className="btn btn-dark">
                            Consulta Producto
                        </Link>

                        <Link to="/consultamarca" className="btn btn-dark">
                            Consulta Marca
                        </Link>
                        <Link to="/consultarubro" className="btn btn-dark">
                            Consulta Marca
                        </Link>
                    </div>

                </div>
                <div className="container mt-5">


                </div>

            </div>
            
            </>
    );
}

export default  Index;