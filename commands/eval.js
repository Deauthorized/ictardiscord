module.exports = {
	name: 'eval',
	description: 'basic eval command',
	execute(message, args, client, botmaster) {
        if (parseInt(message.author.id) !== botmaster)
        {
            message.reply("You can't do this.");
        }
        else
        {
            message.channel.send("```"
                + (eval(message.content) + "```"));
        };
	},
};