const Vehicle = require('../model/Veihcle');
const Message = require('../model/Message');

module.exports = {
    async home(req, res) {
        const results = await Vehicle.all();
        const recentlyAdded = results.rows.slice(0, 3);
        return res.render('index', { vehicles: recentlyAdded });
    },
    async sales(req, res) {
        const results = await Vehicle.all();
        const vehicles = results.rows;
        return res.render('sales', { vehicles });
    },
    async show(req, res) {
        const { id } = req.params;
        const results = await Vehicle.find(id);
        const vehicle = results.rows[0];

        if (!vehicle) return res.send('Veículo não encontrado!');

        return res.render('show', { vehicle });
    },
    about(req, res) {
        return res.render('about');
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