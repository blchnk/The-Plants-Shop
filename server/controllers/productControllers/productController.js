const {Product, ProductInfo} = require('../../models/models');
const {resolve} = require('path');
const {v4} = require('uuid');
const {badRequest} = require("../../error/ApiError");

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, typeId, info, colorId, sizeId, varietyId } = req.body;
            const { img } = req.files;
            let fileName = v4() + ".jpg";
            await img.mv(resolve(__dirname, "../..", "static", fileName));

            const productData = {
                name,
                price,
                typeId,
                img: fileName,
                article: Date.now(),
            };

            // Проверяем, есть ли значения для colorId, sizeId, varietyId,
            // и добавляем их в объект productData, если они существуют
            if (colorId) {
                productData.colorId = colorId;
            }

            if (sizeId) {
                productData.sizeId = sizeId;
            }

            if (varietyId) {
                productData.varietyId = varietyId;
            }

            const product = await Product.create(productData);

            if (info) {
                info = JSON.parse(info);
                info.forEach((i) =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id,
                    })
                );
            }

            return res.json(product);
        } catch (e) {
            next(badRequest(e.message));
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
                where: {id: id}
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

    // async getProductPropertyList(req, res) {
    //     const typeId = req.params.id; // id типа, для которого нужно получить товары
    //     try {
    //         const products = await Product.findAll({
    //             where: {
    //                 typeId: typeId,
    //             },
    //             include: [
    //                 {
    //                     model: Color,
    //                     through: {
    //                         attributes: [] // Исключаем атрибуты связи
    //                     },
    //                 },
    //                 {
    //                     model: Size,
    //                     through: {
    //                         attributes: [] // Исключаем атрибуты связи
    //                     },
    //                 },
    //                 {
    //                     model: Variety,
    //                     through: {
    //                         attributes: [] // Исключаем атрибуты связи
    //                     },
    //                 },
    //             ],
    //         });
    //
    //         // Преобразуем данные, чтобы включить свойства в каждый товар
    //         const formattedProducts = products.map(product => {
    //             const formattedProduct = product.toJSON();
    //             formattedProduct.colors = product.colors.map(color => color.name);
    //             formattedProduct.sizes = product.sizes.map(size => size.name);
    //             formattedProduct.varieties = product.varieties.map(variety => variety.name);
    //             return formattedProduct;
    //         });
    //
    //         res.json(formattedProducts);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // }
}

module.exports = new ProductController()