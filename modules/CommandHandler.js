const { ApiHandler } = require('./ApiHandler');
const { Utils } = require('../vendor/utils/Utils');
const moduleData = require('./data');

class CommandHandler {

    static sendHelpMessage = (msg) => {
        let reply = Utils.showListOfCommandsMessage();
        msg.channel.send(reply);
    }

    static sendMessageWithArgAndData = (msg, arg) => {
        msg.channel.send(
            Utils.embed('Some data')
                .addField('Data module', moduleData.someData, true)
                .addField('Arg', arg, true)
        );
    }

    // Create others logic for commands here...

}

exports.CommandHandler = CommandHandler;