import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, ModalFooter, Button ,Select} from "reactstrap";
import { useState, useEffect } from "react";
import ModalMarca from "./ModalMarca"
import { mostrarmarca } from "../../Servicios/ProductoServicio";
import { mostrarrubro } from "../../Servicios/RubroServicio";

const modeloProducto =
{
    productoId :0,
    productoDesc: "",
    productoCodigo: 0,
    productoPrecio: 0.0,
    marcaId: 1,
    rubroId:1,
    fechaAlta: Date.now
}

const ModificarProducto = ({ prodmodificar, setprodmodificar, mostraModal, setMostrarModal, guardarProducto, modificarproducto, marcamodificar, setmarcamodificar, rubromodificar ,setrubromodificar}) =>
{
    const [prod, setProd] = useState(modeloProducto);
    const [marca, setmarca] = useState([]);
    const [rubro, setrubro] = useState([]);

    const actualizarData = (e) =>
    {
        console.log(e.target.name + ":" + e.target.value);
        setProd(
            {
                ...prod,
                [e.target.name]: e.target.value
            });
    }

    const enviardata = () =>
    {   
        

        if (prod.productoId == 0) {
            guardarProducto(prod)
        } else
        {
            modificarproducto(prod)
        } 

        setProd(modeloProducto);


    }
    const selectmarca = (e) => {
        prod.marcaId = e.target.value
    }
    const selectrubro = (e) => {
        prod.rubroId = e.target.value
    }

    useEffect(() =>
    {

        (async () => {

            const datamarc = await mostrarmarca();
            const datarubro = await mostrarrubro();


            setmarca(datamarc);
            setrubro(datarubro);

        })()


        if (prodmodificar != null) {

            
            setProd(prodmodificar)
            console.log(prodmodificar)
        } else
        {
            setProd(modeloProducto);

        }


    }, [prodmodificar])

    const cerrarModal = () =>
    {

        setMostrarModal(!mostraModal);
        setprodmodificar(null);

    }
    return (

        <Modal isOpen={mostraModal}>
            <ModalHeader>
                {
                    prod.productoId == 0 ?"Nuevo Producto" :"Modificar Producto"
                }
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>
                            Descripcion:
                        </Label>
                        <Input name="productoDesc" onChange={(e) => actualizarData(e)} value={prod.productoDesc} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Codigo:
                        </Label>
                        <Input name="productoCodigo" onChange={(e) => actualizarData(e)} value={prod.productoCodigo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Precio:
                        </Label>
                        <Input name="productoPrecio" onChange={(e) => actualizarData(e)} value={prod.productoPrecio} />
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            Marca:
                        </Label>
                        <select id="marca" onChange={(e) => selectmarca(e)} name="marcas" className="form-control">
                            {
                                marca.map((mar) =>
                                (<option key={mar.marcaId} value={mar.marcaId}>{mar.marcaDesc}</option>
                                ))
                            }
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            Rubro:
                        </Label>
                        <select id ="rubro" onChange={(e) => selectrubro(e)} name="rubros" className="form-control">
                            {
                                rubro.map((rub) =>
                                (<option key={rub.rubroId} value={rub.rubroId}>{rub.rubroDesc}</option>
                                ))
                            }
                        </select>
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
export default ModificarProducto;
