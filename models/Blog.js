const {Model, DataTypes, INTEGER} = require('sequelize');


class Blog extends Model {}

Blog.init (
    {
        title: {
            type: DataTypes.STRING (length(30)),
            allowNull: false,
            primarykey: true,
            Unique: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            Unique: true
        },
        text: {
            type: DataTypes.STRING(length(10000)),
            allowNull: false,
        },
        wordcount: {
            type: DataTypes.INTEGER,
            allowNULL: false,
        }
    }
)
