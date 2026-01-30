import { ApiHandler } from '@/ApiHandler';
import { Utils } from '#/utils/Utils';
import { moduleData } from '@/data';
import Discord from 'discord.js';

class CommandHandler {

    sendHelpMessage = (): Discord.MessageEmbed => {
        return Utils.showListOfCommandsMessage();
    }

    sendMessageWithArgAndData = (arg: string | undefined): Discord.MessageEmbed => {
        return Utils.embed('Some data')
            .addField('Data module', moduleData.someData, true)
            .addField('Arg', arg || 'N/A', true)
    }

    sendApiExemple = async (title: string = 'API Example'): Promise<Discord.MessageEmbed> => {
        const apiResp = await ApiHandler.getApiExemple();
        const reply = Utils.embed(title);
        apiResp.forEach((coffee: any) => {
            reply.addField(coffee.title, coffee.description, false)
        })
        return reply;
    }

    //--- /!\ Do not touch this line /!\

}

export { CommandHandler };
