import { useState, useEffect, createContext } from "react";
import axios from "axios";
const CategoriasContext = createContext();

const CategoriasProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const obtenerCategorias = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const respuesta = await axios.get(url);
            setCategorias(respuesta.data.drinks);
            console.log(respuesta.data.drinks);
        } catch (error) {
            console.log('error', error);
        }  
    }
    useEffect(() => {
        obtenerCategorias();
            }, []);

    return(
        <CategoriasContext.Provider value={{
            categorias
        }}>
            {children}
        </CategoriasContext.Provider>
    )

}
export { CategoriasContext, CategoriasProvider };
