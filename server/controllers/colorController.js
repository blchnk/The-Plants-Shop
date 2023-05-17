const {Color, Type} = require('../models/models');

class ColorController {
    async create(req, res) {
        const {name, typeName} = req.body;
        const color = await Color.create({name});

        Type.findOne({where: {name: typeName}})
            .then(type => {
                if (!type) return;

                Color.findOne({where: {name: color.name}})
                    .then(color => {
                        if (!color) return;
                        type.addColor(color.id, {through: {typeId: type.id}});
                    })
            });

        return res.json(color);
    }

    async getAll(req, res) {
        const colors = await Color.findAll();
        return res.json(colors);
    }
}

module.exports = new ColorController()