// Created by the god Benoit Lamonica on the 08/07/2021

const { CommandHandler } = require("../../modules/CommandHandler")

module.exports = {
    name: 'help',
    description: 'Shows all commands available',
    execute: (msg, arg) => {
        CommandHandler.sendHelpMessage(msg);
    }
}