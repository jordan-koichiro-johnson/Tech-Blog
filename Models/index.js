const User = require('./user')
const Post = require('./posts')
const Comment = require('./comment')

User.hasMany(Post, {
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    onDelete: 'CASCADE'
})

module.exports = { User, Post, Comment }