import {makeAutoObservable} from "mobx";

export default class ProductStore {
    _cart = [];

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage();
    }

    get cart() {
        return this._cart;
    }

    setCart(cart) {
        let isProductExists = false;

        if (!cart.quantity) {
            cart.quantity = 1;
        }

        if (this._cart.length) {
            this._cart.map(item => {
                if (item.article === cart.article) {
                    isProductExists = true;
                    item.quantity++;
                }
            })
            if (!isProductExists) {
                this._cart.push(cart);
            }
        } else {
            this._cart.push(cart);
        }
    }

    increaseCart(index) {
        this._cart[index].quantity++;
        this.saveToLocalStorage();
    }

    decreaseCart(index) {
        this._cart[index].quantity--;
        if (this._cart[index].quantity < 1) {
            this._cart.splice(index, 1)
        }
        this.saveToLocalStorage();
    }

    deleteCart(index) {
        this._cart[index].quantity = 0;
        this._cart.splice(index, 1);
        this.saveToLocalStorage();
    }

    // Метод для сохранения данных в локальное хранилище
    saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this._cart));
        // console.log('saveToLocalStorage')
    };

    // Метод для загрузки данных из локального хранилища
    loadFromLocalStorage = () => {
        const savedData = localStorage.getItem('cart');
        if (savedData) {
            this._cart = JSON.parse(savedData);
        }
        // console.log('loadFromLocalStorage')
    };
}

