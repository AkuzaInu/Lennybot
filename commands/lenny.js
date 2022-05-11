const lennyface = require('./lennyfaces.js')

module.exports = {
	name: 'lenny',
	description: 'Makes the discord bot send a lennyface.',
	execute(client, message, args) {

		// Creates a option from the arguments and converts it to lowercase.
		const option = args.join(' ').toLowerCase()

		// If there are no arguments, send a default lennyface.
		if (!option) {

			message.channel.send(lennyface.lenny);
			if (message.deletable) return message.delete();

		}

		// If random argument, fetch a random lennyface and send.
		else if (option === 'random') {

			const faces = Object.values(lennyface);

			message.channel.send(faces[Math.floor(Math.random() * faces.length)]);
			if (message.deletable) return message.delete();

		}

		// If option is in lennyfaces.json, send lennyface.
		else if (option in lennyface) {
		
			message.channel.send(lennyface[option]);
			if (message.deletable) return message.delete();

		}

		// If lennyface is not in lennyfaces.json, lenny is unknown.
		else {

			message.channel.send(`Sorry the \`${option}\` lennyface is unknown to me ${lennyface.lenny}`);
			if (message.deletable) return message.delete();

		}

	}
}