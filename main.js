const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]});
const {Token} = require('./config.json');

// Create new collections.
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

// For each handler file in handlers folder, require handler.
['command_handler', 'event_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(Discord, client);
});

// Launch bot
client.login(Token);