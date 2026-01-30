import { ReponseBot } from '#/config/response';
import Discord from 'discord.js';

const exapi = {
    name: 'exapi',
    description: 'Show an exemple of api usage',
    execute: (msg: Discord.Message, arg: string | undefined) => {
        new ReponseBot(msg).useCommandHandler('sendApiExemple', { arg, async: true });
    }
}

export { exapi };
