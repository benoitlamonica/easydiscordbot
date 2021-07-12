// Created by the god Benoit Lamonica on the 08/07/2021

const { ReponseBot } = require("../../vendor/config/response")

module.exports = {
    name: 'data',
    description: 'Exemple command with data',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('sendMessageWithArgAndData', arg);
    }
}