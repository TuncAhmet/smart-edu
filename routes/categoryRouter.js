const express = require('express');
const categoryController = require('../controller/categoryController');

const Router = express.Router();

Router.route('/').post(categoryController.createCategory);

module.exports = Router;
