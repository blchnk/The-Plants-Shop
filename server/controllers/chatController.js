const {Configuration, OpenAIApi} = require("openai");

const askToChatGpt = async (req, res) => {
    const openAIInstance = await _createOpenAIInstance();

    await openAIInstance.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.message,
        max_tokens: 1000,
        temperature: 0
    })
        .then(response => {
            const repliedMessage = response.data.choices[0].text;
            res.send({from: 'ChatGPT', data: repliedMessage});
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