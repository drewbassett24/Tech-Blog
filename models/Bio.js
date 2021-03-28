const {Model, DataTypes, INTEGER} = require('sequelize');


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
        },
        
    }
);

module.exports = Bio;
