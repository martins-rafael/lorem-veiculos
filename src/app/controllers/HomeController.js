const Vehicle = require('../model/Vehicle');
const Message = require('../model/Message');
const { formatPrice } = require('../../lib/utils');

module.exports = {
    async home(req, res) {
        const results = await Vehicle.all();
        const recentlyAdded = results.rows.slice(0, 3);

        return res.render('main/index', { vehicles: recentlyAdded });
    },
    async stock(req, res) {
        const results = await Vehicle.all();
        let vehicles = results.rows;

        vehicles = vehicles.map(vehicle => {
            vehicle.price = formatPrice(vehicle.price);
            return vehicle;
        });

        return res.render('main/stock', { vehicles });
    },
    async show(req, res) {
        const { id } = req.params;
        const results = await Vehicle.find(id);
        const vehicle = results.rows[0];

        if (!vehicle) return res.send('Veículo não encontrado!');

        vehicle.price = formatPrice(vehicle.price);

        return res.render('show', { vehicle });
    },
    about(req, res) {
        return res.render('main/about');
    },
    async post(req, res) {
        const keys = Object.keys(req.body);

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Por favor, preencha todos os campos.')
            }
        }

        await Message.save(req.body);

        return res.redirect('/');
    }
};