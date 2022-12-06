const User = require('./user')
const Post = require('./posts')

User.hasMany(Post, {
    onDelete: 'CASCADE'
})

Post.belongsTo(User, {
    onDelete: 'CASCADE'
})


module.exports = { User, Post }