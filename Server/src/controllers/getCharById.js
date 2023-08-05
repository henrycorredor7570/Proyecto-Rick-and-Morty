const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)
        
        if(!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);
        // si el if anterior da false hay si ingreso a crear el personaje
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        }
        return res.status(200).json(character);
    } catch (error) {
        return  error.message.includes("ID")
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)// mensaje de error pero de axios(el que da la API)
    }
}

module.exports = getCharById;
