import { ReponseBot } from '#/config/response';
import Discord from 'discord.js';

const data = {
    name: 'data',
    description: 'Exemple command with data',
    execute: (msg: Discord.Message, arg: string | undefined) => {
        new ReponseBot(msg).useCommandHandler('sendMessageWithArgAndData', { arg });
    }
}

export { data };
