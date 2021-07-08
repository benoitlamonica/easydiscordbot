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

    // Create others logic for commands here...

}

exports.CommandHandler = CommandHandler;