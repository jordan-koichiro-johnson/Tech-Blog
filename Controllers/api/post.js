const express = require('express');
const router = express.Router();
const { Post } = require('../../Models');


router.get('/', (req, res) => {

    Post.findAll(
    ).then(allPosts =>

        res.json(allPosts)
    )
})

router.post('/create', (req, res) => {
    console.log('create')
    Post.create({
        username: req.session.userInfo.username,
        title: req.body.title,
        content: req.body.content
    }).then(data => {
        res.status(200)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: err })
        })
})

router.delete('/delete/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.body.id
        }
    }).then(data => [
        res.json(data)
    ]).catch(err => {
        console.log(err);
        res.status(500).json({ err: err })
    })
})

module.exports = router; 