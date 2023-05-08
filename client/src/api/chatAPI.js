import {$host} from "./index";

export const sendQueryToChatGPT = async (messages) => {
    try {
        const {data} = await $host.post('api/chat', messages);
        return data;
    } catch (error) {
        console.error(error);
        return 'Произошла ошибка при обращении к API ChatGPT.';
    }
}