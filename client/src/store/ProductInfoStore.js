import {makeAutoObservable} from "mobx";

export default class ProductInfoStore {
    constructor() {
        this._productInfo = [];
        makeAutoObservable(this);
    }

    setProductInfo(info) {
        this._productInfo = info;
    }

    get productInfo() {
        return this._productInfo;
    }
}

