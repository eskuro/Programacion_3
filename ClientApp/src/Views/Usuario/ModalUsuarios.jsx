import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, ModalFooter, Button, Select } from "reactstrap";
import { useState, useEffect } from "react";
import { mostrarrubro } from "../../Servicios/RubroServicio";
import md5 from 'md5';

const modeloUsuario =
{
     usuarioId:0,
     usuarioNombre:"",
     usuarioApellido:"",
     username :"",
     password:"",
}

var ReverseMd5 = require('reverse-md5');
const ModalUsuarios = ({ usuariomodificar, setusuariomodificar, mostraModal, setMostrarModal, guardarUsuario, modificarUsuario }) => {

    const [usu, setUsu] = useState(modeloUsuario)
    const actualizarData = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        setUsu(
            {
                ...usu,
                [e.target.name]: e.target.value
            });
    }

    const enviardata = () => {


        if (usu.usuarioId == 0) {
            usu.password = md5(usu.password)
            guardarUsuario(usu)
        } else {
            modificarUsuario(usu)
        }
        setUsu(modeloUsuario);


    }

    useEffect(() => {
       
        if (usuariomodificar != null) {
            setUsu(usuariomodificar)
           
        } else {
            setUsu(modeloUsuario);
        }
    }, [usuariomodificar])

    const cerrarModal = () => {

        setMostrarModal(!mostraModal);
        setusuariomodificar(null);

    }


    return (
        <Modal isOpen={mostraModal}>
            <ModalHeader>
                {
                    usu.usuarioId == 0 ? "Nuevo Usuario" : "Modificar Usuario"
                }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>
                            Nombres:
                        </Label>
                        <Input name="usuarioNombre" onChange={(e) => actualizarData(e)} value={usu.usuarioNombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Apellidos:
                        </Label>
                        <Input name="usuarioApellido" onChange={(e) => actualizarData(e)} value={usu.usuarioApellido} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Usuario:
                        </Label>
                        <Input name="username" onChange={(e) => actualizarData(e)} value={usu.username} />
                    </FormGroup>
                    <FormGroup>
                        
                        {
                            usu.usuarioId == 0 ? <><Label>
                                Contraseña:
                            </Label>
                                <Input name="password" onChange={(e) => actualizarData(e)} value={usu.password} /> </> : <></>
                        }

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviardata}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cerrar</Button>
            </ModalFooter>
        </Modal>

    );


}

export default ModalUsuarios;