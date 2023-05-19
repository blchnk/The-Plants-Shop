const {Size} = require('../../models/models');

class SizeController {
    async create(req, res) {
        try {
            const {name} = req.body;
            const size = await Size.create({name});
            res.status(201).json({size});
        } catch (error) {
            res.status(500).json({error: 'Failed to add size'});
        }
        // const {name, typeName} = req.body;
        // const size = await Size.create({name});
        //
        // Type.findOne({where: {name: typeName}})
        //     .then(type => {
        //         if (!type) return;
        //
        //         Size.findOne({where: {name: size.name}})
        //             .then(size => {
        //                 if (!size) return;
        //                 type.addSize(size.id, {through: {typeId: type.id}});
        //             })
        //     });
        //
        // return res.json(size);
    }

    async getAll(req, res) {
        const sizes = await Size.findAll();
        return res.json(sizes);
    }
}

module.exports = new SizeController()