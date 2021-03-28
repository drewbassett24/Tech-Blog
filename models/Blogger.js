const {Model, DataTypes, INTEGER} = require('sequelize');


class Blogger extends Model {}

Blogger.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        },
        website: {
            type: DataTypes.STRING(length(100)),
            allowNull: true,
        },
        websiteURL: {
            type: DataTypes.STRING(length(100)),
            allowNull: true,
        },
        
    }
)
