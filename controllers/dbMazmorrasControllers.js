const { pool } = require("../config/pgconfig");
const { listMazmorras } = require("../queries/queries");

const getMazmorras = async (req, res) => {
    const client = await pool.connect();

    try {
        const response = await client.query(listMazmorras);
        res.status(200).json({ response: true, result: response.rows });
    } catch(e) {
        res.status(400).json({ response: false, error: e.message });
    } finally {
        client.release(true);
    }
}

module.exports = {
    getMazmorras
}