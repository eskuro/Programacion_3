import {mostrarmarca } from "../../Servicios/ProductoServicio";
import { useState, useEffect } from "react";





const ModalMarca = () =>
{
    const [marca, setmarca] = useState([]);


    useEffect(() => {
        (async () => {

            const data = await mostrarmarca();
            setmarca(data);

            console.log(data)
        })()

    }, []);

    const selectmarca = (e) =>
    {
        console.log(e.target.value);
        return e.target.value;
     
    }

    return (


        <select onChange={(e) => selectmarca(e) } name="marcas" className="form-control">
                        {
                            marca.map((mar) =>
                            (  <option key={mar.marcaId} value={mar.marcaId}>{mar.marcaDesc}</option>      
                            ))
                        } 
                    </select>
            
        
    
)
   

}

export default ModalMarca;