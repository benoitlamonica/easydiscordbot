const Discord = require('discord.js');
const botCommands = require('../../commands');

class EasyDiscordBot {

    constructor(TOKEN, PREFIX) {

        // Setting up Client
        this.bot = new Discord.Client();
        this.prefix = PREFIX;
        this.bot.commands = new Discord.Collection();

        Object.keys(botCommands).forEach(key => {
            this.bot.commands.set(botCommands[key].name, botCommands[key])
        });

        //Login to Discord API
        this.bot.login(TOKEN);
    }

    static start = (TOKEN, PREFIX) => {
        let bot = new EasyDiscordBot(TOKEN, PREFIX);
        bot.listenClient();
    }

    listenClient = () => {
        this.bot.on('ready', () => {
            console.log(`Logged as ${this.bot.user.tag} !`);
        })
        this.bot.on('message', msg => {

            // Basics check
            if (msg.author.bot) return;
            if (!msg.content.startsWith(this.prefix)) return;

            // Getting arg of command 1 => Cmd | 2 => Args
            let client = this.getClientCmdAndArg(msg);

            // If command doesn't exist
            if (!this.bot.commands.has(client.cmd)) {
                msg.reply(`Command ${client.cmd} doesn't exist !`);
                this.bot.commands.get('help').execute(msg, client.arg);
                return;
            };

            // Execute command
            try {
                this.bot.commands.get(client.cmd).execute(msg, client.arg);
            } catch (error) {
                console.error(error);
                msg.reply(`Error with command ${client.cmd} !`)
            }
        })
    }

    getClientCmdAndArg = (msg) => {
        let cmd = msg.content.split(" ")[1];
        let arg = msg.content.split(" ")[2];

        return {
            cmd: cmd,
            arg: arg
        }
    }
}

exports.EasyDiscordBot = EasyDiscordBot;