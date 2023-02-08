import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, ModalFooter, Button, Select } from "reactstrap";
import { useState, useEffect } from "react";
import { mostrarrubro } from "../../Servicios/RubroServicio";


const modelorubro =
{
    rubroId: 0,
    rubroDesc: ""
}


const ModificarRubro = ({ rubromodificar, setrubromodificar, mostraModal, setMostrarModal, guardarRubro, modificarRubro }) => {
    const [rubro, setrubro] = useState(modelorubro);

    const actualizarData = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        setrubro(
            {
                ...rubro,
                [e.target.name]: e.target.value
            });
    }

    const enviardata = () => {


        if (rubro.rubroId == 0) {
            guardarRubro(rubro)
        } else {
            modificarRubro(rubro)
        }
        setrubro(modelorubro);


    }

    useEffect(() => {
        (async () => {
            const data = await mostrarrubro();
            setrubro(data);

            console.log(data)
        })()
        if (rubromodificar != null) {
            setrubro(rubromodificar)
            console.log("entro")
        } else {
            setrubro(modelorubro);
        }
    }, [rubromodificar])

    const cerrarModal = () => {

        setMostrarModal(!mostraModal);
        setrubromodificar(null);

    }


    return (
        <Modal isOpen={mostraModal}>
            <ModalHeader>
                {
                    rubro.rubroId == 0 ? "NuevO Rubro" : "Modificar Rubro"
                }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>
                            Descripcion:
                        </Label>
                        <Input name="rubroDesc" onChange={(e) => actualizarData(e)} value={rubro.rubroDesc} />
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

export default ModificarRubro;