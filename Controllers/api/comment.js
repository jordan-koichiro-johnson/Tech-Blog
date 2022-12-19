const express = require('express');
const router = express.Router();
const { Comment, Post } = require('../../Models');

router.get('/', (req, res) => {

    Comment.findAll(
    ).then(allUser =>

        res.json(allUser)
    )
})

router.post('/create', (req, res) => {
    Post.findOne({ where: { Id: req.PostId } })
        .then((data) => {
            Comment.create({
                username: req.session.userInfo.username,
                content: req.body.content,
                PostId: data
            }).catch(err => {
                console.log(err);
                res.status(500).json({ err: err })
            })
        }

        )

})

module.exports = router; 