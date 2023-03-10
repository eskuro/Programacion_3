import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import {BrowserRouter, Route,Routes,Link,Router,Navigate}from"react-router-dom";
import { useState, useEffect, createContext } from "react";
import ConsultaProducto from "./Views/Producto/ConsultaProducto";
import ConsultaMarca from "./Views/Marca/ConsultaMarca"
import ConsultaRubro from "./Views/Rubro/ConsultaRubro"
import Index from "./Views/Index";
import Login from "./Views/Usuario/Login"
import Menu from "../src/Componentes/Menu"
import ConsultaUsuarios from "../src/Views/Usuario/ConsultaUsuarios"




const App = () =>
{


    return (
        <>
       
        <Routes>
            <Route exact path="/" element={<Login />}></Route >

         
                <Route exact path="/index" element={<Menu ><Index /></Menu>}></Route >
                <Route exact path="/consultaproducto" element={<Menu>
                    <ConsultaProducto />

                </Menu>}></Route>
                <Route exact path="/consultamarca" element={<Menu >

                    <ConsultaMarca />

                </Menu>}></Route>
                <Route exact path="/consultarubro" element={<Menu >

                    <ConsultaRubro />
                </Menu>}></Route>
                <Route exact path="/consultausuario" element={<Menu >

                    <ConsultaUsuarios />
                </Menu>}></Route>
         



        </Routes>
            </>
        )
}
export default App;