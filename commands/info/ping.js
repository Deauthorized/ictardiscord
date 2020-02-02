module.exports = {
	name: 'ping',
	description: 'check latency of discords websocket',
	category: 'info',
	execute(message, args, client) {
		message.channel.send("Pong! Latency is about `" + client.ws.ping.toString().substring(0, 6) + "ms`");
	},
};
