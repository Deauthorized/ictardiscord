const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
    description: 'get info about a specific user (testing stage, probably wont work)',
    usage: '=userinfo <userid or mention>',
	execute(message, args, client) {
        if (!message.mentions.users.first() || !client.users.get(args[0]))
        {
            return message.reply("Not a valid member.");
        }
	},
};
