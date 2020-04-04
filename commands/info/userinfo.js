const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: 'get info about a specific user',
    usage: '=userinfo <mention>',
    category: 'info',
	execute(message, args, client) {
        if (args[0] === undefined)
        {
            var usr = message.author
        }
        else
        {
            var usr = client.functions.get("parsemention").getUserFromMention(args[0], client);
        }
        var gldusr = message.guild.member(usr)
        if (usr === null || gldusr === null)
        {
            return message.reply("Could not find specified user.");
        }
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#8527ce')
            .setTitle(`User Info`)
            .setThumbnail(`${usr.avatarURL()}`)
            .setAuthor(`${usr.tag}`, usr.avatarURL(), 'https://discord.js.org')
            .addField('Tag', `<@${usr.id}>`, true)
            .addField('Register Date', usr.createdAt, true)
            .addField('Server Join Date', gldusr.joinedAt, true)
            .addField(`Roles (${gldusr.roles.cache.size})`, gldusr.roles.cache.map(role => `<@&${role.id}>`).join(", "))
            .setFooter(`User ID: ${usr.id}`)
        message.channel.send(infoEmbed)
	},
};
