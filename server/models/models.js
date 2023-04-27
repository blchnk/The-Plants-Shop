const sequalize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequalize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    name: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        defaultValue: ""
    },
    surname: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        defaultValue: ""
    },
    county: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        defaultValue: ""
    },
    city: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        defaultValue: ""
    },
    age: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER"
    }
})

const Cart = sequalize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
})

const CartProduct = sequalize.define('cart_product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})

const Product = sequalize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    article: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const ProductInfo = sequalize.define('product_Info', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Type = sequalize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
})

const TypeColor = sequalize.define('type_color', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const TypeSize = sequalize.define('type_size', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const TypeVariety = sequalize.define('type_variety', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

const Color = sequalize.define('color', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const Size = sequalize.define('size', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const Variety = sequalize.define('variety', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
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

Type.belongsToMany(Color, {through: TypeColor});
Color.belongsToMany(Type, {through: TypeColor});

Type.belongsToMany(Size, {through: TypeSize});
Size.belongsToMany(Type, {through: TypeSize});

Type.belongsToMany(Variety, {through: TypeVariety});
Variety.belongsToMany(Type, {through: TypeVariety});

module.exports = {
    User,
    Cart,
    CartProduct,
    Product,
    ProductInfo,
    Type,
    Color,
    TypeColor,
    Size,
    TypeSize,
    Variety,
    TypeVariety
}
