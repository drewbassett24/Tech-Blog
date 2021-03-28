const {Model, DataTypes, INTEGER} = require('sequelize');


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
            primarykey: true,
            autoIncrement: true
        },
        website: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        websiteURL: {
            type: DataTypes.STRING(100),
            allowNull: true,
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
