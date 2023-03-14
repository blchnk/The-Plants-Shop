import {makeAutoObservable} from "mobx";

class Products {
    products = [];

    constructor() { // делаем класс автоотслеживаемым
        makeAutoObservable(this);
    }
}

export default new Products()