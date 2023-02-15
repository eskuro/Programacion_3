import React, { useState, useEffect, useContext } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    
} from "react-icons/fa";
import { NavLink, redirect, useNavigate, useLocation } from 'react-router-dom';
import Cookies from "universal-cookie";
import "../../src/MenuDesp.css"
import icologin from "../Assets/lambda_logo.svg"





const Menu = ({ children }) => {


    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const cookies = new Cookies();
    const toggle = () => setIsOpen(!isOpen);
    const cerrarsesion = () =>
    {
        cookies.remove('usuarioId', { path: '/' });
        cookies.remove('username', { path: '/' });
        cookies.remove('usuarioApellido', { path: '/' });
        cookies.remove('usuarioNombre', { path: '/' });
        cookies.remove('password', { path: '/' });
        cookies.remove('usuarioId', { path: '/index' });
        cookies.remove('username', { path: '/index' });
        cookies.remove('usuarioApellido', { path: '/index' });
        cookies.remove('usuarioNombre', { path: '/index' });
        cookies.remove('password', { path: '/index' }); 
    }



    useEffect(() => {
        console.log(cookies.get('username'))
        if (cookies.get('username') == undefined) {
            navigate("/");
        }



    }, [])


    

    const menuItem = [


        {
            path: "/index",
            name: "Principal",
            icon: <FaTh />

        },
        {
            path: "/consultaproducto",
            name: "Productos",
            icon: <FaRegChartBar />
        },
        {
            path: "/consultamarca",
            name: "Marcas",
            icon: <FaCommentAlt />
        },
        {
            path: "/consultarubro",
            name: "Rubros",
            icon: <FaShoppingBag />
        },
        {
            path: "/consultausuario",
            name: "Usuarios",
            icon: <FaUserAlt />
        },
        {
            path: "/",
            name: "Cerrar Sesion",
            icon: <FaUserAlt />
        },
      
    ]


    return (

        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ display: isOpen ? "block" : "none" }} className="logo" >
                        <img src={icologin}
                            alt="username-icon"
                            style={{ height: 65 }} />
                    </div>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        item.name == "Cerrar Sesion" ? <NavLink to={item.path} key={index} className="link"  onClick={()=>cerrarsesion()}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink> : 
                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )


}

export default Menu;


