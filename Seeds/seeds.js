const sequelize = require("../config/connection");
const { User, Post } = require("../models");


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
            content: 'sequelize'
        },
        {
            title: 'why i love programming',
            content: 'because it is fun'
        },

    ])
    console.log("seeded!")
    process.exit(0)
}

seed();