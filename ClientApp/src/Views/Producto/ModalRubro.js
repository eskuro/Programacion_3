import { mostrarrubro } from "../../Servicios/RubroServicio";
import { useState, useEffect } from "react";





const ModalRubro = () => {
    const [rubro, setrubro] = useState([]);


    useEffect(() => {
        (async () => {

            const data = await mostrarrubro();
            setrubro(data);

            console.log(data)
        })()

    }, []);

    const selectrubro = (e) => {
        console.log(e.target.value);
        return e.target.value;

    }

    return (


        <select onChange={(e) => selectrubro(e)} name="rubros" className="form-control">
            {
                rubro.map((mar) =>
                (<option key={mar.rubroId} value={mar.rubroId}>{mar.rubroDesc}</option>
                ))
            }
        </select>



    )


}

export default ModalRubro;