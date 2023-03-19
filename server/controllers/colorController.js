const {Color} = require('../models/models');

class ColorController {
    async create(req, res) {
        const {name} = req.body;
        const type = await Color.create({name});
        return res.json(type);
    }

    async getAll(req, res) {
        const colors = await Color.findAll();
        return res.json(colors);
    }
}

module.exports = new ColorController()