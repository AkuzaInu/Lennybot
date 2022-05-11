const fs = require('fs');

module.exports = (Discord, client) => {

	// readdir events folder and filter files only ending with .js.
	const event_files = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));

	// For every .js file in events folder create a event using client.on.
	for(const file of event_files){
		const event = require(`../events/${file}`);
		const event_name = file.split('.')[0];
		client.on(event_name, event.bind(null, Discord, client));
	}
}