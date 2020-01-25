var _eval = require('eval');
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
            evald = _eval(message.content)
            message.reply("```javascript\n" + evald + "\n```");
        };
	},
};
