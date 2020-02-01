const Discord = require('discord.js');
module.exports = {
    name: 'stats',
    description: 'bot stats',
    usage: '=stats',
    async execute(message, args, client) {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#8527ce')
        .setTitle(`Ictar Stats`)
        .setThumbnail(`${client.user.avatarURL()}`)
        .setAuthor(`${client.user.tag}`, client.user.avatarURL(), 'https://discord.js.org')
        await client.shard.fetchClientValues('guilds.size')
	        .then(results => {
                infoEmbed.addField('Servers', `${results.reduce((prev, guildCount) => prev + guildCount, 0)}`)
	        })
        message.channel.send(infoEmbed) 
	},
};
