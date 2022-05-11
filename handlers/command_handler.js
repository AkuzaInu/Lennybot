const fs = require('fs');

module.exports = (Discord, client) => {
	
	// readdir command folder and filter files only ending with .js.
	const command_files = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));

	// For every .js file in commands folder create a command from the command name.
	for(const file of command_files){
		const command = require(`../commands/${file}`);
		if(command.name){
			client.commands.set(command.name, command);
		} 
		else {
			continue;
		}
	}
}