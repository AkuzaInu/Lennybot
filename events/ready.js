const { prefix } = require('../config.json')

module.exports = (Discord, client) => {
	console.log('Lennybot is ready!')
	client.user.setActivity(`${prefix}help`, { type: 'LISTENING' });
	client.user.setStatus('idle');
}