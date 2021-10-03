const {Model, DataTypes, INTEGER} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

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
        blogger_id: {
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