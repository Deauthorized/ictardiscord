const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
    description: 'get info about a specific user (testing stage, probably wont work)',
    usage: '=userinfo <userid or mention>',
	execute(message, args, client) {
        let user = message.mentions.users.first()
        message.reply(user.tag);
	},
};
