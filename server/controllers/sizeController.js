const {Size} = require('../models/models');

class SizeController {
    async create(req, res) {
        const {name} = req.body;
        const type = await Size.create({name});
        return res.json(type);
    }

    async getAll(req, res) {
        const sizes = await Size.findAll();
        return res.json(sizes);
    }
}

module.exports = new SizeController()