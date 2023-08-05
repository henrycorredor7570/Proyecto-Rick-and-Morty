const validation = (userData) => {
    const errors = {};
    //si no es un email:
    if(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "El email ingresado no es válido!";
    }
    if(!userData.email){
        errors.email = "Debe ingresar un email!";
    }
    if(userData.email.length > 35){
        errors.email = "No debe exceder los 35 carácteres!"
    }
    //validacion para password:
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La password debe tener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La password debe tener entre 6 y 10 carácteres"
    }
    return errors;
}
export default validation;