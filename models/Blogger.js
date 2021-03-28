const {Model, DataTypes, INTEGER} = require('sequelize');
const bcrypt = required('bcrypt');
const sequelize = requiered('../config/connection');


class Blogger extends Model {}

Blogger.init (
    {
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            valisate: {
                len: [10],
            },
        },
        
    },
    {
        sequelize,
        timestamps: false, 
        freezetableName: true,
        modelName: 'Blogger'
     }
);

module.exports = Blogger;
