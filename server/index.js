require('dotenv').config();
const express = require("express");
const cors = require('cors'); // enabling CORS for any unknown
const router = require('./routes/index');

const sequelize = require('./db')
const models = require('./models/models');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();