import Discord from 'discord.js';
import { CommandHandler } from '@/CommandHandler';

interface ReponseConfig {
    arg?: string;
    async?: boolean;
}

class ReponseBot {
    response: Discord.Message;

    constructor(msg: Discord.Message) {
        this.response = msg;
    }

    useCommandHandler = async (handlerName: keyof CommandHandler, config: ReponseConfig = {}) => {
      const handler = new CommandHandler();
      const result = handler[handlerName](config.arg);
      const response = result instanceof Promise ? await result : result;
      this.send(response);
    }

    send = (msgToSend: string | Discord.MessageEmbed) => {
        this.response.channel.send(msgToSend)
    }

    reply = (msgToReply: string) => {
        this.response.reply(msgToReply);
    }
}

export { ReponseBot };
