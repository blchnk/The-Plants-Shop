const {Color} = require('../../models/models');

class ColorController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const color = await Color.create({name});
            res.status(201).json(color);
        } catch (error) {
            res.status(500).json({error: 'Failed to add color'});
        }
        // const {name, typeName} = req.body;
        // const color = await Color.create({name});
        //
        // Type.findOne({where: {name: typeName}})
        //     .then(type => {
        //         if (!type) return;
        //
        //         Color.findOne({where: {name: color.name}})
        //             .then(color => {
        //                 if (!color) return;
        //                 type.addColor(color.id, {through: {typeId: type.id}});
        //             })
        //     });
        //
        // return res.json(color);
    }

    async getAll(req, res) {
        const colors = await Color.findAll();
        return res.json(colors);
    }
}

module.exports = new ColorController()