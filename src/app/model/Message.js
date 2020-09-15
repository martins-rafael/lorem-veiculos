const db = require('../../config/db');

module.exports = {
    save(data) {
        const query = `
        INSERT INTO messages (
            name,
            email,
            phone,
            message
        ) VALUES ($1, $2, $3, $4)`;

        const values = [
            data.name,
            data.email,
            data.phone,
            data.message
        ];

        return db.query(query, values);
    }
}