const { prefix } = require('./config.json');
module.exports = {
	name: 'help',
	description: 'gets current cmds',
	execute(message, args, client) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${client.commands.size} commands`)
        client.commands.forEach(element => {
            helpEmbed.addField(`${element.name}`, `${element.description}`)
        });
        message.channel.send(helpEmbed);
	},
};
