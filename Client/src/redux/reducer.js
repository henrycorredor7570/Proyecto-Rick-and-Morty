import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],// mi array de favoritos que se va a mostrar
    allCharactersFav: [],// una copia de seguridad de mis favoritos para trabajar con ella en los metodos
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharactersFav: action.payload 
            };
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
                allCharactersFav: action.payload,
            };
        case FILTER:
            return {
                ...state,
                myFavorites: 
                    action.payload === "allCharacters"
                    ? [...state.allCharactersFav ] 
                    : state.allCharactersFav.filter(character => character.gender === action.payload)// allCharactersFav es una copia de myFavorites para poder filtrar y no pisar en ningum momento mis favoritos
            }
        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state}
    }
}

export default reducer;