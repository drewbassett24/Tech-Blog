const {Model, DataTypes, INTEGER} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Blogger extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Blogger.init (
    {
        username: {
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
            validate: {
                len: [10],
            }
        }
        
    },
    {
        sequelize,
        timestamps: false, 
        freezetableName: true,
        modelName: 'Blogger'
     }
);

module.exports = Blogger;
