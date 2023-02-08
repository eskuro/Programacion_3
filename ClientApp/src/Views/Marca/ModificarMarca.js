﻿import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, ModalFooter, Button, Select } from "reactstrap";
import { useState, useEffect } from "react";
import ModalMarca from "../Producto/ModalMarca"
import { mostrarmarca } from "../../Servicios/MarcaServicio";


const modeloMarca =
{
    marcaId: 0,
    marcaDesc:""
}


const ModificarMarca = ({ marcmodificar, setmarcmodificar, mostraModal, setMostrarModal, guardarMarca, modificarMarca }) =>
{
    const [marca, setmarca] = useState(modeloMarca);

    const actualizarData = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        setmarca(
            {
                ...marca,
                [e.target.name]: e.target.value
            });
    }

    const enviardata = () => {


        if (marca.marcaId == 0) {
            guardarMarca(marca)
        } else {
            modificarMarca(marca)
        }
        setmarca(modeloMarca);


    }

    useEffect(() => {
        (async () => {
            const data = await mostrarmarca();
            setmarca(data);

            console.log(data)
        })()
        if (marcmodificar != null) {
            setmarca(marcmodificar)
            console.log("entro")
        } else {
            setmarca(modeloMarca);
        }
    }, [marcmodificar])

    const cerrarModal = () => {

        setMostrarModal(!mostraModal);
        setmarcmodificar(null);

    }


    return (
         <Modal isOpen={mostraModal}>
            <ModalHeader>
                {
                    marca.marcaId == 0 ? "Nueva Marca" : "Modificar Marca"
                }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>
                            Descripcion:
                        </Label>
                        <Input name="marcaDesc" onChange={(e) => actualizarData(e)} value={marca.marcaDesc} />
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

export default ModificarMarca;