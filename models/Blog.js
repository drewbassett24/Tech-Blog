const {Model, DataTypes, INTEGER} = require('sequelize');


class Blog extends Model {}

Blog.init (
    {
        title: {
            type: DataTypes.STRING(30),
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
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        wordcount: {
            type: DataTypes.INTEGER,
            allowNULL: false,
        }
    },
    {
        sequelize,
        timestamps: false, 
        freezetableName: true,
        modelName: 'Blog'
     }
);

module.exports = Blog;