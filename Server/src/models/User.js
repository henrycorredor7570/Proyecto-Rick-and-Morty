const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         // type: DataTypes.UUID,
         // defaultValue: DataTypes.UUIDV4,
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
      },
      // id: {
      //    type: DataTypes.INTEGER,
      //    primaryKey: true,
      //    allowNull: false
      // }
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate:{
            isEmail: true //REGEX
         }
         
      },
      password: {
         type: DataTypes.STRING(64),// que el limite sea 64
         allowNull: false,
         /* validate: {
            is: ["^[a-z]+$",'i'] //REGEX
         } */
      }

   }, { timestamps: false });

};
