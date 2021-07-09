require('dotenv').config();

const Express = require('express');
const { EasyDiscordBot } = require('./vendor/config/bot');
const app = Express();

const PORT = process.env.PORT;
const TOKEN = process.env.DISCORD_TOKEN;
const CMD_PREFIX = process.env.COMMAND_PREFIX;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    EasyDiscordBot.start(TOKEN, CMD_PREFIX);
})

