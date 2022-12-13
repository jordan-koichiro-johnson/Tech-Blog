const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

class Post extends Model { }

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
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

module.exports = Post;