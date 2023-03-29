import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = [
            {id: 1, name: 'Aglaonema', price: '2500', img: 'plant1.png'},
            {id: 2, name: 'Suspensia', price: '5000', img: 'plant2.png'},
            {id: 3, name: 'Cactus', price: '2500', img: 'plant3.png'},
            {id: 4, name: 'Fern', price: '2500', img: 'plant4.png'},
            {id: 5, name: 'Big Pot', price: '2500', img: 'plant1.png'},
            {id: 6, name: 'Small Pot', price: '2500', img: 'plant1.png'},
            {id: 7, name: 'Medium Pot', price: '2500', img: 'plant1.png'},
            {id: 8, name: 'Knife', price: '2500', img: 'plant1.png'},
            {id: 9, name: 'Grow', price: '2500', img: 'plant1.png'},
            {id: 10, name: 'Secator', price: '2500', img: 'plant1.png'},
        ];
        this._types = [
            {id: 1, name: 'Plant'},
            {id: 2, name: 'Pot'},
            {id: 3, name: 'Care'},
        ];
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
}

