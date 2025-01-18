import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'FinBot',
    initialMessages: [
        createChatBotMessage("Hello I'm FinBot your financial advisor, how can i help you ? ")
    ]
}

export default config;