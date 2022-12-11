const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            loggedIn: req.session.loggedIn,
            userInfo: req.session.userInfo
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            userInfo: req.session.userInfo,

        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            loggedIn: req.session.loggedIn,
            userInfo: req.session.userInfo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.get('/signup', async (req, res) => {
    try {
        res.render('signin', {
            loggedIn: req.session.loggedIn,
            userInfo: req.session.userInfo
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})





module.exports = router;