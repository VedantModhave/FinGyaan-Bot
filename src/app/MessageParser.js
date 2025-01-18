class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse = (messsage) => {
        this.actionProvider.respond(messsage);
    }
}
export default MessageParser;