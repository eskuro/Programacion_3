import { Outlet, Link, useNavigate } from "react-router-dom";
import ModalMarca from "./Producto/ModalMarca"
import Cookies from "universal-cookie";
import Menu from "../Componentes/Menu";
import Login from "./Usuario/Login";
import React, { Component, useEffect } from "react"




const Index = () => {

    const cookies = new Cookies();
    return (

        <>
            <div className="panel" style={{} }>
                
                    <h2>  Bienvenido : {cookies.get('username')}</h2>

             

         </div>
            
     </>
    );
}

export default  Index;