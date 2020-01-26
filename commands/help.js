const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'gets current cmds',
	execute(message, args, client) {
        help = String();
        const helpEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`${client.commands.size} commands`)
            .setAuthor('Ictar', client.user.avatarURL, 'https://discord.js.org')
        client.commands.forEach(element => {
            help += `\n=${element.name} - ${element.description}` 
        });
        helpEmbed.addField("Commands", help);
        message.channel.send(helpEmbed);
	},
};
