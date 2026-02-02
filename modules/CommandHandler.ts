import { ApiHandler } from '@/ApiHandler';
import { Utils } from '#/utils/Utils';
import { moduleData } from '@/data';
import Discord from 'discord.js';

class CommandHandler {
  sendHelpMessage() {
    return Utils.showListOfCommandsMessage();
  }
  
  sendMessageWithArgAndData(arg?: string) {
    return Utils.embed('Some data')
      .addField('Data module', moduleData.someData, true)
      .addField('Arg', arg || 'N/A', true)
  }

  async sendApiExemple(arg = 'API Exemple') {
    const apiResp = await ApiHandler.getApiExemple();
    const reply = Utils.embed(arg || 'API Exemple Response');
    apiResp.forEach((coffee) => {
      reply.addField(coffee.title, coffee.description, false)
    })
    return reply;
  }

  //--- /!\ Do not touch this line /!\

}

type CommandHandlerMethods = keyof CommandHandler;

export { CommandHandler, CommandHandlerMethods };