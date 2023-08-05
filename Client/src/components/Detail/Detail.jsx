import axios from "axios";
import { useParams } from "react-router-dom";// nos permite obtener el valor de la variable que ponemos en la ruta
import { useState, useEffect } from "react";

const Detail = () => {
    
    const { id } = useParams();//useParams nos retorna un objeto y dentro la propiedad id(este id es el q sale de la ruta /detail/:id)
    
    const[character, setCharacter] = useState({})
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]); // este es el update y me sirve cada vez que cambie el id se ejecuta el codigo de useEffect
    
    return(
        <div>{/* RENDERIZADO CONDICIONAL: */}
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>{/* ponerle el signo de interrogacion al origin tambien  */}
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;