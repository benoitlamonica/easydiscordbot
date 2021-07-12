// Created by the god Benoit Lamonica on the 12/07/2021

const { ReponseBot } = require("../../vendor/config/response")

module.exports = {
    name: 'exapi',
    description: 'Show an exemple of api usage',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('sendApiExemple');
    }
}