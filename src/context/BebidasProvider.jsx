import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();



const BebidasProvider = ({children}) => {
    
    const [bebidas, setBebidas] = useState([]);
    const [Modal , setModal] = useState(false);
    const obtenerBebidas = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
            const respuesta = await axios.get(url);
            setBebidas(respuesta.data.drinks);
            
        } catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        setModal(!Modal);


    }, []);

    const handleModalClick = e => {
        e.preventDefault();
        console.log('click')
    }


    

    return(
        <BebidasContext.Provider value={{
            bebidas,
            obtenerBebidas,
            handleModalClick,
            Modal
        }}>
            {children}
        </BebidasContext.Provider>
    )

}
export { BebidasContext, BebidasProvider }