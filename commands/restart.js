module.exports = {
	name: 'restart',
	description: 'restarts the bot',
	execute(message, args, client, botmaster) {
        if (parseInt(message.author.id) !== botmaster)
        {
            message.reply("You can't do this.");
        }
        else
        {
            message.reply("Restarting.");
            process.exit();
        }
	},
};
