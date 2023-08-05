const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM("Female", "male", "Genderless", "unknown"),
         allowNull: false
         /* validate: {
            isIn: [["Male","Female","unknown","Genderless"]],
         } */
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
         /* validate: { // pára validar si es una url
            isUrl: true
         } */
      },
   }, { timestamps: false });
};
