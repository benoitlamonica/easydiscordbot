const { ApiHandler } = require('./ApiHandler');
const { Utils } = require('../vendor/utils/Utils');
const moduleData = require('./data');

class CommandHandler {

    sendHelpMessage = () => {
        return Utils.showListOfCommandsMessage();
    }

    sendMessageWithArgAndData = (arg) => {
        return Utils.embed('Some data')
            .addField('Data module', moduleData.someData, true)
            .addField('Arg', arg, true)
    }

    sendApiExemple = async (title) => {
        let apiResp = await ApiHandler.getApiExemple();
        let reply = Utils.embed(title);
        apiResp.forEach(coffee => {
            reply.addField(coffee.title, coffee.description, false)
        })
        return reply;
    }

    //--- /!\ Do no touch this line /!\

}

exports.CommandHandler = CommandHandler;