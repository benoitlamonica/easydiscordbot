import Discord from 'discord.js';
import { CommandHandler } from '@/CommandHandler';

interface ReponseConfig {
    arg?: string | null;
    async?: boolean;
}

class ReponseBot {
    response: Discord.Message;

    constructor(msg: Discord.Message) {
        this.response = msg;
    }

    useCommandHandler = (handlerName: string, config: ReponseConfig = { arg: null, async: false }) => {
        const handler = new CommandHandler();
        const method = (handler as any)[handlerName];

        if (config.async) {
            method.call(handler, config.arg).then((resp: Discord.MessageEmbed) => {
                this.response.channel.send(resp);
            });
            return;
        }
        this.response.channel.send(method.call(handler, config.arg));
    }

    send = (msgToSend: string | Discord.MessageEmbed) => {
        this.response.channel.send(msgToSend)
    }

    reply = (msgToReply: string) => {
        this.response.reply(msgToReply);
    }
}

export { ReponseBot };
