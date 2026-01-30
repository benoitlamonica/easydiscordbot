import Discord from 'discord.js';
import type { Client, Collection } from 'discord.js';
import * as botCommands from '$/index';

// Extend Client type to include commands
declare module 'discord.js' {
    interface Client {
        commands: Collection<string, any>;
    }
}

class EasyDiscordBot {
    bot: Client;
    prefix: string;

    constructor(TOKEN: string, PREFIX: string) {
        // Setting up Client
        this.bot = new Discord.Client();
        this.prefix = PREFIX;
        this.bot.commands = new Discord.Collection();

        Object.keys(botCommands).forEach(key => {
            const cmd = (botCommands as any)[key];
            this.bot.commands.set(cmd.name, cmd);
        });

        //Login to Discord API
        this.bot.login(TOKEN);
    }

    static start = (TOKEN: string, PREFIX: string) => {
        const bot = new EasyDiscordBot(TOKEN, PREFIX);
        bot.listenClient();
    }

    listenClient = () => {
        this.bot.on('ready', () => {
            console.log(`Logged as ${this.bot.user?.tag} !`);
        })
        this.bot.on('message', (msg: Discord.Message) => {

            // Basics check
            if (msg.author.bot) return;
            if (!msg.content.startsWith(this.prefix)) return;

            // Getting arg of command 1 => Cmd | 2 => Args
            const client = this.getClientCmdAndArg(msg);

            // If command doesn't exist
            if (!this.bot.commands.has(client.cmd)) {
                msg.reply(`Command ${client.cmd} doesn't exist !`);
                const helpCmd = this.bot.commands.get('help');
                if (helpCmd) helpCmd.execute(msg, client.arg);
                return;
            };

            // Execute command
            try {
                const cmd = this.bot.commands.get(client.cmd);
                if (cmd) cmd.execute(msg, client.arg);
            } catch (error) {
                console.error(error);
                msg.reply(`Error with command ${client.cmd} !`)
            }
        })
    }

    getClientCmdAndArg = (msg: Discord.Message) => {
        const cmd = msg.content.split(" ")[1];
        const arg = msg.content.split(" ")[2];

        return {
            cmd,
            arg
        }
    }
}

export { EasyDiscordBot };
