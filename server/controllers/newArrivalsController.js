const {Product} = require('../models/models');

class NewArrivalsController {
    async getLastFourProducts(req, res) {
        try {
            const last4Products = await Product.findAll({
                order: [['createdAt', 'DESC']],
                limit: 4,
            });
            res.status(200).json(last4Products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}

module.exports = new NewArrivalsController()