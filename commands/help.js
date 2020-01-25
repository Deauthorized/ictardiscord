const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'gets current cmds',
	execute(message, args, client) {
        const helpEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle(`${client.commands.size} commands`)
            .setAuthor('Ictar', client.user.avatar, 'https://discord.js.org')
        client.commands.forEach(element => {
            helpEmbed.addField(`=${element.name}`, `${element.description}`, true);
        });
        message.channel.send(helpEmbed);
	},
};
