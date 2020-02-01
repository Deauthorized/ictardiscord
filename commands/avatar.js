const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'get a users avatar',
    usage: '=avatar <mention>',
	execute(message, args, client) {
        if (message.mentions.users.first() === undefined)
        {
            var usr = message.author
        }
        else
        {
            var usr = message.mentions.users.first()
        }
        var gldusr = message.guild.member(usr)
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#8527ce')
            .setTitle(`Avatar`)
            .setAuthor(`${usr.username}`, usr.avatarURL(), usr.avatarURL())
            .setImage(usr.avatarURL())
        message.channel.send(infoEmbed)
	},
};
