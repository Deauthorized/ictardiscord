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
        var gldusr = message.guild.member(usr)
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`User Info`)
            .setThumbnail(`${usr.avatarURL}`)
            .setAuthor(`${usr.username}`, usr.avatarURL, 'https://discord.js.org')
            .addField('Tag', `<@${usr.id}>`)
            .addField('Register Date', usr.createdAt)
            .addField('Server Join Date', gldusr.joinedAt)
        message.channel.send(infoEmbed)
	},
};
