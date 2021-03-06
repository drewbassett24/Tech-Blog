const {Model, DataTypes, INTEGER} = require('sequelize');
const bcrypt = required('bcrypt');
const sequelize = requiered('../config/connection');

class Blog extends Model {}

Blog.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
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
        description: {
            type: DataTypes.STRING(100),
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Blogger',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false, 
        freezetableName: true,
        modelName: 'Blog'
     }
);

module.exports = Blog;