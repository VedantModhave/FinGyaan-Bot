import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "13baeefc7bd44e1f9e1b62c2cec6d3b9",
  baseURL: 'https://api.aimlapi.com',
  dangerouslyAllowBrowser: true,
});

class ActionProvider {
    createChatBotMessage
    setState
    createClientMessage
    createCustomMessage
    stateRef

    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    callGenAI = async (prompt) => {
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a financial advisor for Indian market" },
                { role: "user", content: prompt }
            ],
            temperature: 0.5,
            max_tokens: 50,
        });
        return chatCompletion.choices[0].message.content;
    }

    timer = ms => new Promise(res => setTimeout(res, ms));

    generateResponse = async (userMessage) => {
        const responseFromGPT = await this.callGenAI(userMessage);
        let message;
        let numberNoLines = responseFromGPT.split('\n').length;
        for (let i = 0; i < numberNoLines; i++) {
            const msg = responseFromGPT.split('\n')[i];
            if (msg.length) {
                console.log('KW101', msg)
                message = this.createChatBotMessage(msg);
                this.updateChatBotMessage(message);
            }
            await this.timer(1000);
        }
    }
    
    respond = (message) => {
        this.generateResponse(message);
    }

    updateChatBotMessage = (message) => {
        this.setState(prevState => ({
            ...prevState, messages:[...prevState.messages, message]
        }))
    }
}

export default ActionProvider;
