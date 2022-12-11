const router = require('express').Router();

// const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/index')
router.use('/', homeRoutes);

// profile, userlogin, userSignup are all in here

router.use('/api', apiRoutes);

module.exports = router;
