import Discord from 'discord.js';

const COLOR_EMBED = process.env.COLOR_EMBED || '#0099ff';
const CMD_PREFIX = process.env.COMMAND_PREFIX || '!';

class Utils {

    static embed = (title: string): Discord.MessageEmbed => {
        const color = COLOR_EMBED;
        return new Discord.MessageEmbed().setTitle(title).setColor(color as any);
    }

    static showListOfCommandsMessage = (): Discord.MessageEmbed => {
        const listMessage = Utils.embed('List of commands')
            .setDescription(`All commands must begin with ${CMD_PREFIX}`);

        const cmds = require('$/index');
        Object.keys(cmds).forEach((key: string) => {
            listMessage.addField(cmds[key].name, cmds[key].description, false);
        })

        return listMessage;
    }
}

export { Utils };
