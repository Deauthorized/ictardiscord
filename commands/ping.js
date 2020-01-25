module.exports = {
	name: 'ping',
	description: 'check latency of discords websocket',
	execute(message, args, client) {
		message.channel.send("Pong! '" + str(client.ping).substring(0, 6) + "ms'");
	},
};
