import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product);
    return data;
}

export const fetchProducts = async (typeId) => {
    const {data} = await $host.get('api/product', {params: {typeId: typeId}});
    return data;
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id);
    return data;
}

export const fetchInfo = async (id) => {
    const {data} = await $host.get('api/product-info/' + id);
    return data;
}

export const deleteProduct = async (id) => {
    const {data} = await $host.delete('api/product/' + id);
    return data;
}



