class Message {
    constructor(messageId, messageText){
        this.messageId = messageId;
        this.messageText = messageText;
    }
    messageList = []
};

module.exports = Message;