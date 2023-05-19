import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = [];

        this._types = [];
        this._selectedType = [];

        this._colors = [];
        this._sizes = [];
        this._materials = [];
        this._lights = [];
        this._varieties = [];
        this._benefits = [];

        this._selectedColor = [];
        this._selectedSize = [];
        this._selectedMaterial = [];
        this._selectedLight = [];
        this._selectedVariety = [];
        this._selectedBenefit = [];
        makeAutoObservable(this);
    }

    setProducts(products) {
        this._products = products;
    }

    setTypes(types) {
        this._types = types;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setColors(color) {
        this._colors = color;
    }

    setSizes(size) {
        this._sizes = size;
    }

    setMaterials(material) {
        this._materials = material;
    }

    setLights(light) {
        this._lights = light;
    }

    setVarieties(variety) {
        this._varieties = variety;
    }

    setBenefits(benefit) {
        this._benefits = benefit;
    }

    setSelectedColor(color) {
        this._selectedColor = color;
    }

    setSelectedSize(size) {
        this._selectedSize = size;
    }

    setSelectedMaterial(material) {
        this._selectedMaterial = material;
    }

    setSelectedLight(light) {
        this._selectedLight = light;
    }

    setSelectedVariety(variety) {
        this._selectedVariety = variety;
    }

    setSelectedBenefit(benefit) {
        this._selectedBenefit = benefit;
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


    get colors() {
        return this._colors;
    }

    get sizes() {
        return this._sizes;
    }

    get materials() {
        return this._materials;
    }

    get lights() {
        return this._lights;
    }

    get varieties() {
        return this._varieties;
    }

    get benefits() {
        return this._benefits;
    }

    get selectedColor() {
        return this._selectedColor;
    }

    get selectedSize() {
        return this._selectedSize;
    }

    get selectedMaterial() {
        return this._selectedMaterial;
    }

    get selectedLight() {
        return this._selectedLight;
    }

    get selectedVariety() {
        return this._selectedVariety;
    }

    get selectedBenefit() {
        return this._selectedBenefit;
    }
}

