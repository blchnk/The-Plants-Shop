import {$authHost, $host} from "./index";

export const getAllColors = async () => {
    const {data} = await $host.get('api/color');
    return data;
}

export const getAllSizes = async () => {
    const {data} = await $host.get('api/size');
    return data;
}

export const getAllMaterials = async () => {
    const {data} = await $host.get('api/material');
    return data;
}

export const getAllLights = async () => {
    const {data} = await $host.get('api/light');
    return data;
}

export const getAllBenefits = async () => {
    const {data} = await $host.get('api/benefit');
    return data;
}

export const getAllVarieties = async () => {
    const {data} = await $host.get('api/variety');
    return data;
}

