// Importamos el módulo Express
const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const router = require('./routes/routes');
require('dotenv').config();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Dungeon Master is listening on port ${PORT}`);
})