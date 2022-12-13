const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers/index.js');
const sequelize = require('./config/connection');
const http = require('http')
const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app)

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session adding part over here
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        // Stored in milliseconds
        maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};



// Static directory
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
// handlebar linking over here
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// route position 
app.use(routes);

sequelize.sync({ force: false }).then(function () {
    server.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});