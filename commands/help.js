const { prefix, Color } = require('../config.json');
const lennyface = require('./lennyfaces.js');

module.exports = {
	name: 'help',
	description: 'Makes the bot send the help embed!',
	execute(client, message, args, Discord) {
		const types = Object.keys(lennyface);

		const helpEmbed = new Discord.MessageEmbed()
		.setDescription(`Type \`${prefix}lenny\` to access all lenny's commands.`)
		.addFields(
			{name: `${prefix}help`, value: `Opens the help panel. *(The one you're looking at right now)*`},
			{name: `Source code`, value: `[Github](https://github.com/AkuzaInu/Lennybot)`},
			{name: `Want me in your server?`, value: `[Invite me](https://discord.com/api/oauth2/authorize?client_id=973693504544964718&permissions=8&scope=bot)`},
			{name: `Types`, value: `\`${types.join('\`, \`')}\`

			Use \`${prefix}Lenny [type]\` for different types of lennyfaces!`}
		)
		.setColor(Color)
		.setAuthor({ name: 'Lenny Help | ' + message.author.username, iconURL: message.author.displayAvatarURL()});

		message.channel.send({embeds: [helpEmbed]});
	}
}
