import "bootstrap/dist/css/bootstrap.min.css"
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
import { mostrarrubro, modificarrubro, nuevarubro, borrarrubro } from "../../Servicios/RubroServicio";
import ModificarRubro from "../Rubro/ModificarRubro";




export default function ConsultaRubro() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [rubro, setRubro] = useState([]);
    const [rubromodificar, setrubromodificar] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await mostrarrubro();
            console.log(data)
            setRubro(data);
        })()

    }, []);

    const guardarRubro = async (rubro) => {
        await nuevarubro(rubro)
        setMostrarModal(!mostrarModal);
        const data = await mostrarrubro();
        setRubro(data);
    }
    const modificarRubro = async (rubro) => {
        await modificarrubro(rubro)
        setMostrarModal(!mostrarModal);
        const data = await mostrarrubro();
        setRubro(data);
    }

    const eliminarRubro = async (idrubro) => {
        await borrarrubro(idrubro);
        const data = await mostrarrubro();
        setRubro(data);
    }


    const enviarrubromodificar = (rubroselect) => {
        console.log(rubroselect)
        setrubromodificar(rubroselect);
        setMostrarModal(!mostrarModal)

    }


    const columns = [

        {
            name: 'DESCRIPCION',
            selector: row => row.rubroDesc
        },

        {
            name: 'Acciones',
            cell: row => <div className="btn-group">
                <button className="btn btn-dark" onClick={() => enviarrubromodificar(row)
                }>Modificar</button>
                <button style={{ marginLeft: 10 }} className="btn btn-dark" onClick={() => eliminarRubro(row.rubroId)
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
                        data={rubro}
                        pagination

                    />


                </div>
            </div>
            <ModificarRubro
                mostraModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarRubro={guardarRubro}

                rubromodificar={rubromodificar}
                setrubromodificar={setrubromodificar}
                modificarRubro={modificarRubro}
            />
        </div>
    )


}
