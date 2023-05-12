const {Type, Light, TypeLight} = require('../models/models');

class LightController {
    async create(req, res) {
        const {name, typeName} = req.body;
        const light = await Light.create({name});

        Type.findOne({where: {name: typeName}})
            .then(type => {
                if (!type) return;

                Light.findOne({where: {name: light.name}})
                    .then(light => {
                        if (!light) return;
                        type.addLight(light.id, {through: {typeId: type.id}});
                    });
            });

        return res.json(light);
    }

    async getAll(req, res) {

    }
}

module.exports = new LightController()