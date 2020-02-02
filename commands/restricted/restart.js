const pm = require('pm2');
module.exports = {
	name: 'restart',
	description: 'restarts the bot',
	async execute(message, args, client, botmaster) {
        if (parseInt(message.author.id) !== botmaster)
        {
            message.reply("You can't do this.");
        }
        else
        {
            await message.reply("Restarting.");
            pm.reload("ictar");
        }
	},
};
