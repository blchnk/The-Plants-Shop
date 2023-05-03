import {$host} from "./index";

export const sendQueryToChatGPT = async (message) => {
    try {
        const {data} = await $host.post('api/chat', {message: message});
        return data;
    } catch (error) {
        console.error(error);
        return 'Произошла ошибка при обращении к API ChatGPT.';
    }
}