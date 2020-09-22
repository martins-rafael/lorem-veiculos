const fs = require('fs');
const data = require('../../data.json');

module.exports = {
    home(req, res) {
        const featured = data.vehicles.slice(0, 3);
        return res.render('index', { vehicles: featured });
    },
    sales(req, res) {
        return res.render('sales', { vehicles: data.vehicles });
    },
    about(req, res) {
        return res.render('about');
    },
    post(req, res) {
        let id = 1;
        const lastClient = data.clients[data.clients.length - 1];

        if (lastClient) {
            id = lastClient.id + 1;
        }

        data.clients.push({ id, ...req.body });

        fs.writeFile('src/data.json', JSON.stringify(data, null, 2), err => {
            if (err) return res.send('Write file error!');
            return res.redirect('/index');
        });
    },
    show(req, res) {
        const { id } = req.params;
        const foundVehicle = data.vehicles.find(vehicle => vehicle.id == id);

        if (!foundVehicle) return res.send('Veículo não encontrado!');

        return res.render('show', { vehicle: foundVehicle });
    }
};