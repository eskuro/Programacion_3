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
         await nuevoProducto(producto);
        setMostrarModal(!mostrarModal);
        const data = await mostrarProd();
        setprod(data);
    }
    const modificarproducto = async (producto) => {
        await modificarprod(producto);
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
            center: true,
            selector: row => row.productoCodigo
        },
        {
            name: 'DESCRIPCION',
            center: true,
            selector: row => row.productoDesc
        },
        {
            name: 'MARCA',
            center: true,
            selector: row => row.marcaDesc
        },
        {
            name: 'RUBRO',
            center: true,
            selector: row => row.rubroDesc
        },
        {
            name: 'PRECIO',
            center: true,
            selector: row => row.productoPrecio
        },
      
        {
            name: 'Acciones',
            center: true,
            cell: row => <div className="btn-group">
                <button className="btn btn-primary" style={{ fontSizeAdjust: true }, { fontSize: 13 }} onClick={()=>enviarprodmodificar(row)
              }>Modificar</button>
                <button style={{ marginLeft: 10 }, { fontSizeAdjust: true }, { fontSize:13 }} className="btn btn-danger" onClick={() => eliminarproducto(row.productoId)
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
        <div className="panel-fluid" style={{ width: '100%' }}>
            <div className="row">
                <div className="col">
                    <h2 >LISTA PRODUCTOS  </h2>
                    <button onClick={() => setMostrarModal(!mostrarModal)} className="btn btn-success">Agregar Producto</button>
                </div>
                <div className="col">
                   
                </div>

            </div>
            <div className="row ">
               
                    <DataTable
                        columns={columns}
                        data={prod}
                        pagination
                        customStyles={estiloTable}

                    />


                
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

