const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
    description: 'get info about a specific user (testing stage, probably wont work)',
    usage: '=userinfo <mention>',
	execute(message, args, client) {
        if (message.mentions.users.first() === undefined)
        {
            return message.reply("Not a valid member.")
        }
        var usr = message.mentions.users.first()
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`User Info`)
            .setThumbnail(`${usr.avatarURL}`)
            .setAuthor(`${usr.username}`, usr.avatarURL, 'https://discord.js.org')
        message.channel.send(infoEmbed)
	},
};
