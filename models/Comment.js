const {Model, DataTypes, INTEGER} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../congig/configuration');


class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false, 
        freezetableName: true,
        modelName: 'Comment'
     }

);

module.exports = Comment;
