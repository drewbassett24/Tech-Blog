const {Model, DataTypes, INTEGER} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        blogger_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blogger',
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
