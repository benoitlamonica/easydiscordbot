import { ReponseBot } from '#/config/response';
import Discord from 'discord.js';

const help = {
    name: 'help',
    description: 'Shows all commands available',
    execute: (msg: Discord.Message, arg: string | undefined) => {
        new ReponseBot(msg).useCommandHandler('sendHelpMessage');
    }
}

export { help };
