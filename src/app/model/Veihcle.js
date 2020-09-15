const db = require('../../config/db');

module.exports = {
    all() {
        return db.query(`
        SELECT * FROM vehicles
        ORDER BY created_at DESC
        `);
    },
    find(id) {
        return db.query(`
        SELECT * FROM vehicles
        WHERE id = $1`, [id]);
    }
};