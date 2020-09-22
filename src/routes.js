const express = require('express');
const routes = express.Router();
const vehicles = require('./app/controllers/vehicles');

routes.get('/', (req, res) => {
    return res.redirect('/index');
});

routes.get('/index', vehicles.home);
routes.get('/sales', vehicles.sales);
routes.get('/sales/:id', vehicles.show);
routes.get('/about', vehicles.about);
routes.post('/index', vehicles.post);

module.exports = routes;