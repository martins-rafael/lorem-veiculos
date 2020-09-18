const express = require('express');
const routes = express.Router();
const HomeController = require('./app/controllers/HomeController');
const VehicleController = require('./app/controllers/VehicleController');

// Main site
routes.get('/', HomeController.home);
routes.get('/stock', HomeController.stock);
routes.get('/stock/:id', HomeController.show);
routes.get('/about', HomeController.about);
routes.post('/contact', HomeController.post);

// Admin
routes.get('/vehicles/create', VehicleController.create);

module.exports = routes;