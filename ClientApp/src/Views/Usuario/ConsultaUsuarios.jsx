import "bootstrap/dist/css/bootstrap.min.css"
import 'styled-components'
import { } from "reactstrap";
import { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import ModalUsuarios from "../Usuario/ModalUsuarios"
import { mostrarusuarios, nuevousuario, modificarusuario, borrarusuario } from "../../Servicios/UsuariosServicio"


export default function ConsultaUsuarios() {
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

    const [usuario, setUsuario] = useState([]);
    const [usuMod, setusuMod] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);


    useEffect(() => {
        (async () => {
            const data = await mostrarusuarios();

            setUsuario(data);
        })()

    }, []);

    const guardarusuario = async (usu) => {
        await nuevousuario(usu)
        setMostrarModal(!mostrarModal);
        const data = await mostrarusuarios();
        setUsuario(data);
    }
    const modificarusuarios = async (usu) => {
        await modificarusuario(usu)
        setMostrarModal(!mostrarModal);
        const data = await mostrarusuarios();
        setUsuario(data);
    }

    const eliminarusuario = async (idusu) => {
        await borrarusuario(idusu);
        const data = await mostrarusuarios();
        setUsuario(data);
    }


    const enviarusuariomodificar = (usuarioselect) => {
        setusuMod(usuarioselect);

        setMostrarModal(!mostrarModal)

    }


    const columns = [
        {
            name: 'NOMBRE',
            selector: row => row.usuarioNombre
        },
        {
            name: 'APELLIDO',
            selector: row => row.usuarioApellido
        },
        {
            name: 'USUARIO',
            selector: row => row.username
        },
        {
            name: 'Acciones',
            cell: row => <div className="btn-group">
                <button className="btn btn-primary" onClick={() => enviarusuariomodificar(row)
                }>Modificar</button>
                <button style={{ marginLeft: 10 }} className="btn btn-danger" onClick={() => eliminarusuario(row.usuarioId)
                }>Eliminar</button>

            </div>

        }]

   




    return (
        <div className="panel">
            <div className="row">
                <div className="col-sm-12">
                    <h2 >LISTA PRODUCTOS  </h2>
                    <button onClick={() => setMostrarModal(!mostrarModal)} className="btn btn-success">Agregar Usuario</button>
                </div>
                <div className="col-sm-12">

                </div>

            </div>
            <div className="row mt-4">
                <div className="col-sm-12">
                    <DataTable
                        columns={columns}
                        data={usuario}
                        pagination
                        customStyles={estiloTable}

                    />


                </div>
            </div>
            <ModalUsuarios
                mostraModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarUsuario={guardarusuario}

                usuariomodificar={usuMod}
                setusuariomodificar={setusuMod}
                modificarUsuario={modificarusuario}
            />
        </div>
    )


}

