// Created by the god Benoit Lamonica on the 08/07/2021

const { CommandHandler } = require("../../modules/CommandHandler")

module.exports = {
    name: 'data',
    description: 'Exemple command with data',
    execute: (msg, arg) => {
        CommandHandler.sendMessageWithArgAndData(msg, arg);
    }
}