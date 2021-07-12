const { CommandHandler } = require("../../modules/CommandHandler");

class ReponseBot {
    constructor(msg) {
        this.response = msg;
    }
    useCommandHandler = (handlerName, arg = null) => {
        this.response.channel.send(new CommandHandler()[handlerName](arg));
    }
    send = (msgToSend) => {
        this.response.channel.send(msgToSend)
    }
    reply = (msgToReply) => {
        this.response.reply(msgToReply);
    }
}

exports.ReponseBot = ReponseBot;