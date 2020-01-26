const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'complex info about the server you\'re in',
	execute(message, args, client) {
        var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
        var offlineCount = message.guild.members.filter(m => m.presence.status === 'offline').size
        var idleCount = message.guild.members.filter(m => m.presence.status === 'idle').size
        var dndCount = message.guild.members.filter(m => m.presence.status === 'dnd').size
        var txtchnCount = message.guild.channels.filter(m => m.type === 'text').size
        var voicechnCount = message.guild.channels.filter(m => m.type === 'voice').size
        var newschnCount = message.guild.channels.filter(m => m.type === 'news').size
        var strechnCount = message.guild.channels.filter(m => m.type === 'store').size
        var activeChannels = message.guild.channels.filter(m => m.typing === true)
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`Server Info`)
            .setThumbnail(`${message.guild.iconURL}`)
            .addField('General Info', `${onlineCount + idleCount + dndCount} / ${message.guild.memberCount} members are currently logged in. \n ${onlineCount} members are online \n${idleCount} members are AFK \n${dndCount} are DND \n${offlineCount} are offline`)
            .setAuthor(`${message.guild.name} / ${message.guild.nameAcronym}`, message.guild.iconURL, 'https://discord.js.org')
            .addField('Server Description', `${message.guild.description}`)
            .addField('Members', `${message.guild.memberCount}`, true)
            .addField('Server Owner', `${message.guild.owner.user.tag}`, true)
            .addField('Region', `${message.guild.region}`, true)
            .addField('Verified', `${message.guild.verified}`, true)
            .addField('Roles', `${message.guild.roles.size}`, true)
            .addField('Text Channels', `${txtchnCount}`, true)
            .addField('Voice Channels', `${voicechnCount}`, true)
            .addField('News Channels', `${newschnCount}`, true)
            .addField('Store Channels', `${strechnCount}`, true)
            .addField('Active Channels', `${activeChannels}`, true)
            .setFooter(`Server ID: ${message.guild.id} - DOB: ${message.guild.createdAt}`);
        message.channel.send(infoEmbed);
	},
};
