const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
   try {
        const { id, name, status, origin, image, species, gender} = req.body;

        if(!id || !name || !status || !origin || !image || !species || !gender){
            return res.status(401).send("Faltan datos")
        }

        await Favorite.findOrCreate({
            where: { id, name, status, origin, image, species, gender}
        })// guardar el personaje en la base de datos

        const allFavorites = await Favorite.findAll()
        return res.json(allFavorites)

   } catch (error) {
        return res.status(500).json(error.message)
   }
}

module.exports = postFav;