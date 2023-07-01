require('dotenv').config();
const express = require("express");
const cors = require('cors'); // enabling CORS for any unknown
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const sequelize = require('./db')
const models = require('./models/models');
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: true }); // пересоздаем таблицы БД
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log('+---------------------------------------+');
            console.log(`Server started on port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
            console.log('Connection to DB is success');
            console.log('+---------------------------------------+');
        })
    } catch (e) {
        console.log(e);
    }
}
start();