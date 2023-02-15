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
import { mostrarProd, nuevoProducto, modificarprod, borrarprod, mostrarmarca, obtenerdescripcion } from "../../Servicios/ProductoServicio";
import ModificarProducto from "./ModificarProducto";


export default function ConsultaProducto()
{
    const estiloTable = {
        headCells: {
            style: {
                width: 'auto',
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '0 8px',
                justifyContent: 'center',

            },
        },

    }

    const [prod, setprod] = useState([]);
    const [prodmodificar, setprodmodificar] = useState(null);
    const [marcamodificar, setmarcamodificar] = useState(0);
    const [rubromodificar, setrubromodificar] = useState(0);

    

    const [mostrarModal, setMostrarModal] = useState(false);


    useEffect(() => {
        (async () => {
            const data = await mostrarProd();
          
            setprod(data);
        })()

    }, []);

    const guardarproducto = async(producto) =>
    {
        await nuevoProducto(producto)
        setMostrarModal(!mostrarModal);
        const data = await mostrarProd();
        setprod(data);
    }
    const modificarproducto = async (producto) => {
        await modificarprod(producto)
        setMostrarModal(!mostrarModal);
        const data = await mostrarProd();
        setprod(data);
    }

    const eliminarproducto = async (idprod) =>
    {
        await borrarprod(idprod);
        const data = await mostrarProd();
        setprod(data);
    }

 
  

    const columns = [
        {
            name: 'CODIGO',
            selector: row => row.productoCodigo
        },
        {
            name: 'DESCRIPCION',
            selector: row => row.productoDesc
        },
        {
            name: 'MARCA',
            selector: row => row.marcaDesc
        },
        {
            name: 'RUBRO',
            selector: row => row.rubroDesc
        },
        {
            name: 'PRECIO',
            selector: row => row.productoPrecio
        },
      
        {
            name: 'Acciones',
            cell: row => <div className="btn-group">
                <button className="btn btn-primary" onClick={()=>enviarprodmodificar(row)
              }>Modificar</button>
                <button style={{ marginLeft: 10 }} className="btn btn-danger" onClick={() => eliminarproducto(row.productoId)
                }>Eliminar</button>

            </div>

        } ]

    const enviarprodmodificar = (productoselect) =>
    {
        console.log(productoselect)
        setprodmodificar(productoselect);

        setmarcamodificar(productoselect.marcaId)
        setrubromodificar(productoselect.rubroId)

        setMostrarModal(!mostrarModal)
       
    }
   

    


    return (
        <div className="panel">
            <div className="row">
                <div className="col-sm-12">
                    <h2 >LISTA PRODUCTOS  </h2>
                    <button onClick={() => setMostrarModal(!mostrarModal)} className="btn btn-success">Agregar Producto</button>
                </div>
                <div className="col-sm-12">
                   
                </div>

            </div>
            <div className="row mt-4">
                <div className="col-sm-12">
                    <DataTable
                        columns={columns}
                        data={prod}
                        pagination
                        customStyles={estiloTable}

                    />


                </div>
            </div>
           <ModificarProducto
                mostraModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarProducto={guardarproducto}

                marcamodificar={marcamodificar}
                setmarcamodificar={setmarcamodificar}

                rubromodificar={rubromodificar}
                setrubromodificar={setrubromodificar}

                prodmodificar={prodmodificar}
                setprodmodificar={setprodmodificar}
                modificarproducto={modificarproducto}
            />
        </div>
    )


}

