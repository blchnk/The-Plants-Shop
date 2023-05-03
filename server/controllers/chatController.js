const {Configuration, OpenAIApi} = require("openai");

const askToChatGpt = async (req, res) => {
    const openAIInstance = await _createOpenAIInstance();

    await openAIInstance.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: req.body.message}],
    })
        .then(response => {
            const repliedMessage = response.data.choices[0].message;
            res.send({role: 'ChatGPT', data: repliedMessage});
        }).catch(err => console.log(err))
}

const _createOpenAIInstance = async () => {
    const conf = await new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    })
    return await new OpenAIApi(conf)
}

module.exports = {
    askToChatGpt
}