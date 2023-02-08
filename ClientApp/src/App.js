import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    Router

} from "react-router-dom";
import { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Button } from "bootstrap";
import { mostrarProd } from "./Servicios/ProductoServicio";
import ConsultaProducto from "./Views/Producto/ConsultaProducto";
import ConsultaMarca from "./Views/Marca/ConsultaMarca"
import ConsultaRubro from "./Views/Rubro/ConsultaRubro"
import Index from "./Views/Index";
import Login from "./Views/Usuario/Login"
import { ModalHeader, ModalBody, Form, FormGroup, Label, Input, Container } from "reactstrap";
import ModificarProducto from "./Views/Producto/ModificarProducto"

const App = () =>
{

    return (
         <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} ></Route>
                    <Route exact path="/index" element={<Index/> }></Route>
                    <Route exact path="/consultaproducto" element={<ConsultaProducto />}></Route>
                    <Route exact path="/consultamarca" element={<ConsultaMarca />}></Route>
               
                    <Route exact path="/consultarubro" element={<ConsultaRubro />}></Route>

                </Routes>
            </BrowserRouter>
          </>
        )
}
export default App;