const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'complex info about the server you\'re in',
	execute(message, args, client) {
        var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
        var offlineCount = message.guild.members.filter(m => m.presence.status === 'offline').size
        var idleCount = message.guild.members.filter(m => m.presence.status === 'idle').size
        var dndCount = message.guild.members.filter(m => m.presence.status === 'dnd').size
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`Server Info`)
            .setDescription(`${onlineCount + idleCount + dndCount} / ${message.guild.memberCount} members are currently logged in. \n ${onlineCount} members are online \n${idleCount} members are AFK \n${dndCount} are DND \n${offlineCount} are offline`)
            .setAuthor(`${message.guild.name} / ${message.guild.nameAcronym}`, message.guild.iconURL, 'https://discord.js.org')
            .addField('Members', `${message.guild.memberCount}`, true)
            .addField('Server Owner', `${message.guild.owner.user.tag}`, true)
            .addField('Region', `${message.guild.region}`, true)
            .addField('Verified', `${message.guild.verified}`, true)
            .setFooter(`Server ID: ${message.guild.id} - DOB: ${message.guild.createdTimestamp}`);
        message.channel.send(infoEmbed);
	},
};
