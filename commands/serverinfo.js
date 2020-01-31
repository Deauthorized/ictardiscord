const Discord = require('discord.js');
module.exports = {
    name: 'serverinfo',
    description: 'complex info about the server you\'re in',
    usage: '=serverinfo',
	execute(message, args, client, botmaster, guildConf) {
        var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
        var idleCount = message.guild.members.filter(m => m.presence.status === 'idle').size
        var dndCount = message.guild.members.filter(m => m.presence.status === 'dnd').size
        var offlineCount = message.guild.memberCount - onlineCount - idleCount - dndCount
        var txtchnCount = message.guild.channels.filter(m => m.type === 'text').size
        var voicechnCount = message.guild.channels.filter(m => m.type === 'voice').size
        var newschnCount = message.guild.channels.filter(m => m.type === 'news').size
        var strechnCount = message.guild.channels.filter(m => m.type === 'store').size
        var activeChannels = message.guild.channels.filter(m => m.typing === true).name
        var serverdesc = guildConf.guildDescription
        if (message.guild.emojis.map(em => `<:${em.name}:${em.id}>`).join(" ").length > 1024)
        {
            emoteList = "Unavailable due to API limits"
        }
        else
        {
            emoteList = message.guild.emojis.map(em => `<:${em.name}:${em.id}>`).join(" ")
        }
        // var banCount = message.guild.fetchBans().then(b => b).size
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`Server Info`)
            .setThumbnail(`${message.guild.iconURL}`)
            .addField('General Info', `:bust_in_silhouette: ${onlineCount + idleCount + dndCount} / ${message.guild.memberCount} members are currently logged in. \n<:online:670792653314588702> ${onlineCount} members are online \n<:idle:670792653251674122> ${idleCount} members are AFK \n<:dnd:670792653012729858> ${dndCount} members are DND \n <:offline:670792652861472840> ${offlineCount} members are offline or invisible `)
            .setAuthor(`${message.guild.name} / ${message.guild.nameAcronym}`, message.guild.iconURL, 'https://discord.js.org')
            .addField('Server Description', `${serverdesc}`)
            .addField('Members', `${message.guild.memberCount}`, true)
            .addField('Server Owner', `${message.guild.owner.user.tag}`, true)
            .addField('Region', `${message.guild.region}`, true)
            .addField('Verified', `${message.guild.verified}`, true)
            .addField('Roles', `${message.guild.roles.size}`, true)
            .addField('Text Channels', `${txtchnCount}`, true)
            .addField('Voice Channels', `${voicechnCount}`, true)
            .addField('News Channels', `${newschnCount}`, true)
            .addField('Store Channels', `${strechnCount}`, true)
            .addField(`Emojis (${message.guild.emojis.size})`, emoteList)
            .setFooter(`Server ID: ${message.guild.id} - DOB: ${message.guild.createdAt}`);
        message.channel.send(infoEmbed);
	},
};
