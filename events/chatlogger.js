module.exports = {
	name: 'ChatLogger',
	description: 'logs all recieved messages to the console',
	execute(client) {
        client.on('message', message =>
        {
            if (message.channel.type == "dm")
            {
                console.log(`[DM:${message.author.tag}]: ${message.cleanContent}`)
            }
            else if (message.channel.type == "text")
            {
                console.log(`[${message.channel.guild.name}:#${message.channel.name}] ${message.author.tag}: ${message.cleanContent}`)
            }
        })
	},
};
