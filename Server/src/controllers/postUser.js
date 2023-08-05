const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if(!email || !password){
            return res.status(400).send("Faltan datos")
        }// verificamos que nos envien todos los datos

        const user = await User.findOrCreate({
            where: { email: email, password: password}
        })// creamos el usuario en el modelo y lo almacenamos

        return res.json(user)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = postUser;