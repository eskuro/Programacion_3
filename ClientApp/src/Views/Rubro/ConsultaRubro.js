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

    const estiloTable = {
        headCells: {
            style: {
                width:'auto',
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '0 8px',
                justifyContent: 'center',
               
            },
        },
        
    }

    const [mostrarModal, setMostrarModal] = useState(false);
    const [rubro, setRubro] = useState([]);
    const [rubromodificar, setrubromodificar] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await mostrarrubro();
        
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
            center: true,
            selector: row => row.rubroDesc
        },

        {
            name: 'Acciones',
            center: true,
            cell: row => <div className="btn-group" style={{ alignContent: "flex-start" }}>
                <button className="btn btn-primary" onClick={() => enviarrubromodificar(row)
                }>Modificar</button>
                <button className="btn btn-danger" onClick={() => eliminarRubro(row.rubroId)
                }>Eliminar</button>
    
            </div>
            
        }]

    return (
        <div className="panel-fluid" style={{ width: '100%' }}>
            <div className="row">
                <div className="col-sm-12">
                    <h2 >LISTA RUBROS  </h2>
                    <button onClick={() => setMostrarModal(!mostrarModal)} className="btn btn-success">Agregar Rubro</button>
                <div className="col-sm-12">
                   
                    </div>
                </div>

            </div>
            <div className="row ">
                
                    <DataTable
                        columns={columns}
                        data={rubro}
                        pagination
                        customStyles={estiloTable}
                    />


                
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
