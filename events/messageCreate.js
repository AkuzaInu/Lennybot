module.exports = (Discord, client, message) => {
	const { prefix } = require ('../config.json');
	const lennyface = require('../commands/lennyfaces.js');
	
	// If lennybot is mentioned, respond with a default lennyface.
	if (message.mentions.members.has(client.user.id)) return message.channel.send(lennyface.lenny);
	
	// Find if the message starts with prefix or the author is a bot. If so return.
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	// Slice, split and lowercase the arguments.
	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	// Get the command from client, commands have been set in command_handler.js.
	const command = client.commands.get(cmd);

	if (command) {
		// Execute the command and sent client, message, args and Discord.
		command.execute(client, message, args, Discord);
	}	
}
