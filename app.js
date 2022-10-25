const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRouter');
const categoryRoute = require('./routes/categoryRouter');
const authRoute = require('./routes/authRouter');

const app = express();

mongoose.connect('mongodb://localhost:27017/smartedu-db');

//ejs
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/courses/:slug', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', authRoute);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} `);
});
