const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");


const seed = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate([
        {
            username: "Kate",
            password: "password"
        },
        {
            username: "Dave90",
            password: "password1"
        },
        {
            username: "BootCamp2022",
            password: "password1!"
        }
    ], {
        individualHooks: true
    })
    const posts = await Post.bulkCreate([
        {
            title: 'why i hate programming',
            content: 'sequelize',
            UserId: "1",
            username: 'Kate'
        },
        {
            title: 'why i love programming',
            content: 'because it is fun',
            UserId: '2',
            username: 'Dave90'
        },

    ])
    const comments = await Comment.bulkCreate([
        {

            content: 'ouchie',
            PostId: "1",
            username: 'Dave90'
        },
        {

            content: 'i like it too',
            PostId: '2',
            username: 'Kate'
        },

    ])
    console.log("seeded!")
    process.exit(0)
}

seed();