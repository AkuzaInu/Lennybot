const { prefix, Color } = require('../config.json');
const lennyface = require('../commands/lennyfaces.js');

module.exports = (Discord, client, guild) => {
	const types = Object.keys(lennyface);
	const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && guild.me.permissions.has('SEND_MESSAGES'));

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
	.setAuthor({ name: 'Lenny Help'});

	channel.send({embeds: [helpEmbed]});
}