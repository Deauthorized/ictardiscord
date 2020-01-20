module.exports = {
	name: 'help',
	description: 'gets current cmds',
	execute(message, args, client, prefix) {
        help = `\`\`\`${client.commands.size} commands`
        client.commands.forEach(element => {
            help += `\n=${element.name} > ${element.description}`
        });
        message.channel.send(help + '```')
	},
};
