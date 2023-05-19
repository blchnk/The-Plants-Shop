const {Light} = require('../../models/models');

class LightController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const light = await Light.create({name});
            res.status(201).json(light);
        } catch (error) {
            res.status(500).json({error: 'Failed to add light'});
        }
    }

    async getAll(req, res) {
        const light = await Light.findAll();
        return res.json(light);
    }
}

module.exports = new LightController()