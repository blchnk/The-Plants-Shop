const {Product} = require('../models/models');

class NewArrivalsController {
    async getLastFourProducts(req, res) {
        try {
            const productsCount = await Product.count(); // Подсчитываем количество записей в таблице "product"

            if (productsCount === 0) {
                // Если таблица пуста, возвращаем пустой массив
                res.status(200).json([]);
            } else {
                // Если в таблице есть записи, выполняем запрос на получение последних 4 продуктов
                const last4Products = await Product.findAll({
                    order: [['createdAt', 'DESC']],
                    limit: 4,
                });

                res.status(200).json(last4Products);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}

module.exports = new NewArrivalsController()