const express = require('express');
const routes = express.Router();
const HomeController = require('./app/controllers/HomeController');

routes.get('/', (req, res) => {
    return res.redirect('/index');
});

routes.get('/index', HomeController.home);
routes.get('/sales', HomeController.sales);
routes.get('/sales/:id', HomeController.show);
routes.get('/about', HomeController.about);
routes.post('/index', HomeController.post);

module.exports = routes;