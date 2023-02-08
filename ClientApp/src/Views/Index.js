import { Outlet, Link } from "react-router-dom";
import ModalMarca from "./Producto/ModalMarca"
import Cookies from "universal-cookie";


const Index=(props)=> {

    const cookies = new Cookies();
    const cerrarsesion = () =>
    {
         cookies.remove('usuarioId', { path: '/' });
            cookies.remove('username', { path: '/' });
            cookies.remove('usuarioApellido',  { path: '/' });
            cookies.remove('usuarioNombre', { path: '/' });
        cookies.remove('password', { path: '/' });
        props.history.push()

    }
    



    return (


        <div className="container">

            <h1>MENU PRINCIPAL</h1>

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
             <ModalMarca/>
        </div>
       


       
    );
}

export default  Index;