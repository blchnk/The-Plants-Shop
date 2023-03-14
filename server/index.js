require('dotenv').config();
const express = require("express");
const cors = require('cors'); // enabling CORS for any unknown

const sequelize = require('./db')
const models = require('./models/models');

const PORT = process.env.PORT;

const app = express();
// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'hi bitch!!!'});
});

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