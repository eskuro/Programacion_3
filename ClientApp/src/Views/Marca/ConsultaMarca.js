﻿import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import { } from "reactstrap";
import { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Button } from "bootstrap";
import { mostrarmarca, nuevamarca, modificarmarca, borrarmarca } from "../../Servicios/MarcaServicio";
import ModificarMarca from "./ModificarMarca";




export default function ConsultaMarca()
{
    const [mostrarModal, setMostrarModal] = useState(false);
    const [marc, setmarc] = useState([]);
    const [marcmodificar, setmarcmodificar] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await mostrarmarca();
            console.log(data)
            setmarc(data);
        })()

    }, []);

    const guardarMarca = async (marca) => {
        await nuevamarca(marca)
        setMostrarModal(!mostrarModal);
        const data = await mostrarmarca();
        setmarc(data);
    }
    const modificarMarca = async (marca) => {
        await modificarmarca(marca)
        setMostrarModal(!mostrarModal);
        const data = await mostrarmarca();
        setmarc(data);
    }

    const eliminarmarca = async (idmarca) => {
        await borrarmarca(idmarca);
        const data = await mostrarmarca();
        setmarc(data);
    }


    const enviarmarcamodificar = (marcaselect) => {
        console.log(marcaselect)
        setmarcmodificar(marcaselect);
        setMostrarModal(!mostrarModal)

    }


    const columns = [
     
        {
            name: 'DESCRIPCION',
            selector: row => row.marcaDesc
        },
           
        {
            name: 'Acciones',
            cell: row => <div className="btn-group">
                <button className="btn btn-dark" onClick={() => enviarmarcamodificar(row)
                }>Modificar</button>
                <button style={{ marginLeft: 10 }} className="btn btn-dark" onClick={() => eliminarmarca(row.marcaId)
                }>Eliminar</button>

            </div>

        }]

    return (
        <div className="panel">
            <div className="row">
                <div className="col-sm-12">
                    <h2 >LISTA MARCAS  </h2>
                    <button onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Producto</button>
                </div>
                <div className="col-sm-12">
                    <div className="btn-group">
                        <Link to="/" className="btn btn-dark"> Atras</Link>
                    </div>
                </div>

            </div>
            <div className="row mt-4">
                <div className="col-sm-12">
                    <DataTable
                        columns={columns}
                        data={marc}
                        pagination

                    />


                </div>
            </div>
            <ModificarMarca
                mostraModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarMarca={guardarMarca}

                marcmodificar={marcmodificar}
                setmarcmodificar={setmarcmodificar}
                modificarMarca={modificarMarca}
            />
        </div>
    )


}

