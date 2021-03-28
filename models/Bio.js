const {Model, DataTypes, INTEGER} = require('sequelize');
const { sequelize } = require('../congig/configuration');


class Bio extends Model {}

Bio.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING(length(500)),
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false, 
        freezetableName: true,
        modelName: 'Bio'
     }

);

module.exports = Bio;
