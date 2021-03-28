const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const blog = require('./models/Blog');
const blogger = require('./models/Blogger');
const bio = require('./models/Bio');

// const routes = require('./route');

// const Blogclear = require('./models');

const PORT = process.env.PORT || 3307;

const hbs = exphbs.create({ helpers });

const app = express();

const sess = {
  secrete: 'Super secret secret',
  cookie: { maxAge: 360000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
});