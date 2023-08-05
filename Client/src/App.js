import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route , useLocation, useNavigate } from 'react-router-dom'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const URL = 'http://localhost:3001/rickandmorty/login/'; 

function App() {
   const navigate = useNavigate();
   const location = useLocation();//nos retorna un objeto es para saber en que ruta esta posicionado el usuario

   const [characters, setCharacters] = useState([]);// destructurin con corchetes porque lo que retorna el useState es un array
   
   const [access, setAccess] = useState(false);

   const login = async (userData) => {// email y pasword nos vienen por parametros en userData
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access); // si no funciona codigo cambiar por data
         access && navigate('/home');// si access es tru me permite ingresar al home
         
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate]) // cuando cambie access se ejecuta lo que hay dentro de useEffect

   const onSearch = async (id) => {// id es el estado local, lo que escribe el usuario
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`) // de esta forma se conecta el backend con el frontend
         // axios(`${URL_BASE}/${id}?key=${API_KEY}`) 
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
            // setCharacters([...characters, data]);
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }
 
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {/* {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/>
            : null
         } */}{/* tambien se puede de la siguiente manera: */}
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
