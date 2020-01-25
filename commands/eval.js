module.exports = {
	name: 'eval',
	description: 'basic eval command',
	execute(message, args, client, botmaster) {
        if (parseInt(message.author.id) !== botmaster)
        {
            message.reply("You can't do this.");
        }
        else
        {   )
            message.reply("```javascript\n" + client.shard.eval(message.content) + "\n```");
        };
	},
};
