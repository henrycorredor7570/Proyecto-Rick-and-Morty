import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {
   return (
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => {// desestructuro las propiedades de mi array de objetos
               return (  
                  <Card
                     key={id} // esta key la pide REACT para uso interno y no es posible de ninguna manera acceder a ella
                     //esta key la pide porque se van a estar usando distintas plantillas y pide la key y es el id porque este es unico y va a servir!!   
                      id={id}
                      name={name}
                      status={status}
                      species={species}
                      gender={gender}
                      image={image}
                      origin={origin.name}
                      onClose={onClose}
                  />
               )
            } )
         }
      </div>);
}
