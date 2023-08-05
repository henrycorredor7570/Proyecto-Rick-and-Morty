import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
 
function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id); // este es el que recibo por props
      }else{
         setIsFav(true);
         addFav({ id, name, species, gender, image, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => { // esta recorriendo al estado global
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         {/*   {
            isFav 
            ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
            } */}
            {/* podemos realizarlo asi tambien: */}
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         <div>
            <img src={image} alt='' />
         </div>
         <div>
            <div>
               <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
            </div>
            <div>
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>
            <div>
               <button onClick={() => onClose(id)}>X</button>
            </div>
         </div> 
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},//este dispatch le despacha al reducer y este espera un objeto es por eso que se ejecuta addFav
      removeFav: (id) => {dispatch(removeFav(id))} // el ultimo removeFav es el que traemos de las actions y el primero es la propiedad que recibimos por props
   }
}

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)(Card);// estas funciones estan conectadas a card