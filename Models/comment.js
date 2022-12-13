const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

class Comment extends Model { }

Comment.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
    }
);

module.exports = Comment;