import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      // console.log(event);
      setId(event.target.value);

   }
   
   return ( 
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId("")}}>Agregar</button> {/* cuando se necesite pasar un argumento a esta funcion se tiene q hacer con un cb */}
         {/*  setId("") es para limpiar el input el numero cuando busque un personaje me limpia el campo */}
      </div>
   );
}
