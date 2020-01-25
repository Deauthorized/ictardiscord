const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'complex info about the server you\'re in',
	execute(message, args, client) {
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`Server info`)
            .setAuthor(`${message.guild.name}`, message.guild.iconURL, 'https://discord.js.org')
            .addField('Members', `${message.guild.memberCount} / ${message.guild.fetch().maximumMembers}`, true)
        message.channel.send(infoEmbed);
	},
};
