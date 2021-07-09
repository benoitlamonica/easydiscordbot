# Easy Discord Bot

[![version](https://img.shields.io/badge/version-0.1.0-green.svg)](https://semver.org)

## This is king of a "Framework" to create your own Discord bot with ease

Everything is already set up ! You just have to link your discord bot and then do some logic of your own ... 😋

## Getting Started

How to use this "framework" ?

### Installation in 10 sec

Of course Easy Discord Bot comes with a beautiful cli, first of all you need to install it globally : `npm i edbcli -g`.
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
