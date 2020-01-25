const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'complex info about the server you\'re in',
	execute(message, args, client) {
        var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
        var offlineCount = guild.members.filter(m => m.presence.status === 'offline').size
        var idleCount = guild.members.filter(m => m.presence.status === 'idle').size
        var dndCount = guild.members.filter(m => m.presence.status === 'dnd').size
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`Server info`)
            .setAuthor(`${message.guild.name}`, message.guild.iconURL, 'https://discord.js.org')
            .addField('Members', `${message.guild.memberCount} / ${message.guild.maximumMembers}`, true)
            .addField('Member Presence', `${onlineCount + idleCount + dndCount} / ${message.guild.memberCount} are currently logged in. \n ${onlineCount} members are online \n${idleCount} members are AFK \n${dndCount} are on DND`, true)
        message.channel.send(infoEmbed);
	},
};
