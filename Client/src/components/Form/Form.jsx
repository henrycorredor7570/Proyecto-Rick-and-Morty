import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {

    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email:'',
        password:'',
    });
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            /* ejemplo:   email : event.target.value */
            [event.target.name] : event.target.value/* event.target.name: uso braquets porque como estoy trabajando dentro de un objeto, esta es una 
            y con el name se sabe cual es la que se esta modificando propiedad del objeto que es variable  */
        })
        
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>{/* el htmlFor del label tiene que ser igual al name del input de esta forma se asocian */}
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            {/* renderizado condicional para el error */}
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password: </label>
            <input type="text" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p style= {{color:"red"}}>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}

export default Form;