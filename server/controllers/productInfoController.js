const {ProductInfo} = require('../models/models');

class productInfoController {
    async getAll(req, res) {
        const {id} = req.params;

        const info = await ProductInfo.findAll({where: {productId: id}});
        return res.json(info);
    }
}

module.exports = new productInfoController();