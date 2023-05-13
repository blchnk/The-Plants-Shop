import {makeAutoObservable} from "mobx";

export default class NewArrivalsStore {
    constructor() {
        this._newArrivals = [];
        makeAutoObservable(this);
    }

    setNewArrivals(item) {
        this._newArrivals = item;
    }

    get getNewArrivals() {
        return this._newArrivals;
    }
}

