const {Product, ProductInfo} = require('../models/models');
const {resolve} = require('path');
const {v4} = require('uuid');
const {badRequest} = require("../error/ApiError");
const {where} = require("sequelize");

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, typeId, info} = req.body;
            const {img} = req.files;
            console.log(img);
            let fileName = v4() + ".jpg";
            await img.mv(resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({name, price, typeId, img: fileName, article: Date.now()});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }

            return res.json(product);
        } catch (e) {
            next(badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {typeId} = req.query;
        let products;

        if (typeId) {
            products = await Product.findAll({where: {typeId}});
        }

        if (!typeId) {
            products = await Product.findAll();
        }

        return res.json(products);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const product = await Product.findOne({
            where: {id}
        });
        const productInfo = await ProductInfo.findOne({where: {productId: id}});

        return res.json(product);
    }

    async deleteOne(req, res) {
        const {id} = req.params;
        await Product.destroy({
            where: {
                id: id
            }
        });
        res.json(`deleted product with id ${id}`);
    }

    async updateOne(req, res) {
        const {id} = req.params;
        const updateOps = req.body; // получаем данные для обновления из тела запроса
        try {
            const product = await Product.update(updateOps, {
                where: { id: id }
            });
            if (product[0] === 0) { // если ни один продукт не был изменен
                res.status(404).json({
                    message: 'Продукт не найден'
                });
            } else { // если хотя бы один продукт был изменен
                res.status(200).json({
                    message: 'Продукт успешно обновлен'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error
            });
        }
    }
}

module.exports = new ProductController()