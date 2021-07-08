// Created by the god Benoit Lamonica on the 08/07/2021

const { ReponseBot } = require("../../vendor/config/response")

module.exports = {
    name: 'help',
    description: 'Shows all commands available',
    execute: (msg, arg) => {
        new ReponseBot(msg).useHandler('sendHelpMessage');
    }
}