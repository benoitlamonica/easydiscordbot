# Easy Discord Bot

[![version](https://img.shields.io/badge/version-0.1.0-green.svg)](https://semver.org)

## This is king of a "Framework" to create your own Discord bot with ease

Everything is already set up ! You just have to link your discord bot and then do some logic of your own ... 😋

## Getting Started

How to use this "framework" ?

### Create a bot on discord Developper Portal

#### Create your bot application

First of all you need to create a bot on Discord develloper portal [here](https://discord.com/developers/). Log in and click on `Applications` => `New Applicaton`

Click on your application, then `Bot`. When your in `Bot` click on `Add Bot`.

#### Add the bot to your Discord Server

Now we need to add the discord bot to your server. Don't worry it's very simple ! 👌
Still in your discord dev interface click on `OAuth2`, then in OAuth2 URL Generator section check **bot**.

Now we're configuring the bot permissions. In Bot permissions check **Send messages** and **Read message history**. For now it will be enought for a basic bot usage.

After checked all needed permissions you should see a link in Scopes, copy this link in your favorite browser, it will add your bot in your favorite discord server. Be aware that you need to be administrator of the server ! 😄

### Installation in 10 sec

Ok, now EDBot installation ! Of course EDBot comes with a beautiful cli, first of all you need to install it globally : `npm i edbcli -g`.
Then you need to create your bot environement ! `edb create <your-bot>`, And that's all ! Now let's see how to configure it.

### Basic use

#### Step 1

Go to the directory of your bot created by the cli, then go to the .env file and set up your environement. Everything you need to do is written in this file

#### Step 2

You need to install dependency, so type in your bot directory `yarn` or `npm i` to be up to date

#### Step 3

To launch the bot type in your bot directory `yarn start` or `npm run start`, everytime you make some changes you will need to launch it again ! And now type !bot help (or any prefix you put in .env) to see it in action !

### Create your own command !

To create your own command type in your bot directory `yarn newco <commandname>` or `npm run newco <commandname>`. It will appear in ./commands/content. Then your need to do the logic yourself ! 🙂

More will comme soon ! Thanks !
