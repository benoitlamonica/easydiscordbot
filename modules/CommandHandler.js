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

    sendApiExemple = () => {
        ApiHandler.getApiExemple().then(rep => {
            return rep.map(coffee => {
                return Utils.embed('Coffee')
                    .addField(coffee.title, coffee.description, false)
            })
        })
    }

    // Create others logic for commands here...

}

exports.CommandHandler = CommandHandler;