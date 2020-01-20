module.exports = {
    ping: null,
	name: 'ping',
	description: 'check connection to discords websocket in ms',
	execute(message, args, client) {
		message.channel.send('Pong! Discord websocket responded in ' + client.ping + "ms");
	},
};
