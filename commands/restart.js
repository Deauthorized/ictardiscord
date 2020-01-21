const sleep = require('system-sleep');
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
            await client.user.setStatus('idle', 'brb');
            process.exit();
        }
	},
};
