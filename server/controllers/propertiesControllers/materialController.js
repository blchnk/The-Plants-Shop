const {Material} = require('../../models/models');

class MaterialController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const material = await Material.create({name});
            res.status(201).json(material);
        } catch (error) {
            res.status(500).json({error: 'Failed to add material'});
        }
    }

    async getAll(req, res) {
        const materials = await Material.findAll();
        return res.json(materials);
    }
}

module.exports = new MaterialController()