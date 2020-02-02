const Discord = require('discord.js');
module.exports = {
    name: 'stats',
    description: 'bot stats',
    usage: '=stats',
    category: 'info',
    async execute(message, args, client) {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#8527ce')
        .setTitle(`Ictar Stats`)
        .setThumbnail(`${client.user.avatarURL()}`)
        .setAuthor(`${client.user.tag}`, client.user.avatarURL(), 'https://discord.js.org')
        await client.shard.fetchClientValues('guilds.size')
            .then(results =>
            {
                infoEmbed.addField('Servers', `${results.reduce((prev, guildCount) => prev + guildCount, 0)} servers`, true)
            })
        await client.shard.fetchClientValues('users.size')
            .then(results =>
            {
                infoEmbed.addField('Users', `${results.reduce((prev, usrCount) => prev + usrCount, 0)} users`, true)
            })

        await client.shard.fetchClientValues('channels.size')
            .then(results =>
            {
                infoEmbed.addField('Channels', `${results.reduce((prev, chnlCount) => prev + chnlCount, 0)} channels`, true)
            })

        message.channel.send(infoEmbed) 
	},
};