import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = [];
        this._types = [];
        this._selectedType = {};
        makeAutoObservable(this);
    }

    setProducts(products) {
        this._products = products;
    }
    setTypes(types) {
        this._types = types;
    }

    get products() {
        return this._products;
    }
    get types() {
        return this._types;
    }

    get selectedType() {
        return this._selectedType;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }
}

