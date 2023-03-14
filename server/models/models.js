const sequalize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequalize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: ""
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: ""
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER"
    }
})

const Cart = sequalize.define('cart', {
    cart_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
})

const CartProduct = sequalize.define('cart_product', {
    cart_product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

const Product  = sequalize.define('product', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const ProductInfo = sequalize.define('product_Info', {
    product_info_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
})

const Type = sequalize.define('type', {
    type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

const TypeColor = sequalize.define('type_color', {
    type_color_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
})

const TypeSize = sequalize.define('type_size', {
    type_size_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
})

const TypeVariety = sequalize.define('type_variety', {
    type_variety_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
})

const Color = sequalize.define('color', {
    color_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

const Size = sequalize.define('size', {
    size_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

const Variety = sequalize.define('variety', {
    variety_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

Product.hasMany(CartProduct);
CartProduct.belongsTo(Product);

Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

Type.hasMany(Product);
Product.belongsTo(Type);

Type.belongsToMany(Color, { through: TypeColor });
Color.belongsToMany(Type, { through: TypeColor });

Type.belongsToMany(Size, { through: TypeSize });
Color.belongsToMany(Type, { through: TypeSize });

Type.belongsToMany(Variety, { through: TypeVariety });
Variety.belongsToMany(Type, { through: TypeVariety });

module.exports = {
    User,
    Cart,
    CartProduct,
    Product,
    ProductInfo,
    Type,
    TypeColor,
    TypeSize,
    TypeVariety
}
