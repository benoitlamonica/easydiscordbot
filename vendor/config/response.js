const { CommandHandler } = require("../../modules/CommandHandler");

class ReponseBot {

    constructor(msg) {
        this.response = msg;
    }

    useCommandHandler = (handlerName, config = { arg: null, async: false }) => {
        if (async) {
            new CommandHandler()[handlerName](arg).then(resp => this.response.channel.send(resp));
            return;
        }
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