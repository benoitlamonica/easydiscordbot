const Discord = require('discord.js');
const COLOR_EMBED = process.env.COLOR_EMBED;
const CMD_PREFIX = process.env.COMMAND_PREFIX;

class Utils {

    static embed = (title) => {
        const color = COLOR_EMBED;
        return new Discord.MessageEmbed().setTitle(title).setColor(color);
    }

    static showListOfCommandsMessage = () => {
        let listMessage = Utils.embed('List of commands')
            .setDescription(`All commands must begin with ${CMD_PREFIX}`);

        let cmds = require('../../commands');
        Object.keys(cmds).forEach(key => {
            listMessage.addField(cmds[key].name, cmds[key].description, false);
        })

        return listMessage;
    }
}

exports.Utils = Utils;