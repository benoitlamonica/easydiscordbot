const { ReponseBot } = require("../../vendor/config/response")

module.exports = {
    name: '****',
    description: 'Sample description',
    execute: (msg, arg) => {
        new ReponseBot(msg).useHandler('handlerName', arg);
    }
}