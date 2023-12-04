const { pool } = require("../config/pgconfig");

const getUsers = async (req, res) => {
    const client = await pool.connect();

    try {
        const response = await client.query(listUsers);
        res.status(200).json({ response: true, result: response.rows });
    } catch(e) {
        res.status(400).json({ response: false, error: e.message });
    } finally {
        client.release(true);
    }
}

module.exports = {
    getUsers
}