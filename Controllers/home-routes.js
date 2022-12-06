const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            // loggedIn: req.session.loggedIn,
            // userInfo: req.session.userInfo
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.get('/signup', async (req, res) => {
    try {
        res.render('signin')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})





module.exports = router;