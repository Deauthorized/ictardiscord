const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: 'get info about a specific user',
    usage: '=userinfo <mention>',
	execute(message, args, client) {
        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.get(mention);
            }
        }
        if (args[0] === undefined)
        {
            var usr = message.author
        }
        else
        {
            var usr = getUserFromMention(args[0])
        }
        var gldusr = message.guild.member(usr)
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#8527ce')
            .setTitle(`User Info`)
            .setThumbnail(`${usr.avatarURL()}`)
            .setAuthor(`${usr.username}`, usr.avatarURL(), 'https://discord.js.org')
            .addField('Tag', `<@${usr.id}>`, true)
            .addField('Register Date', usr.createdAt, true)
            .addField('Server Join Date', gldusr.joinedAt, true)
            .addField(`Roles (${gldusr.roles.size})`, gldusr.roles.map(role => `<@&${role.id}>`).join(" "))
            .setFooter(`User ID: ${usr.id}`)
        message.channel.send(infoEmbed)
	},
};
