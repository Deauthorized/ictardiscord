const { promisify, inspect } = require('util');
var exec = promisify(require('child_process').exec);
module.exports = {
	name: 'exec',
	description: 'executes a linux command, and no you **cant** do this',
	async execute(message, args, client, botmaster) {
        if (parseInt(message.author.id) !== botmaster)
        {
            message.reply("You can't do this.");
        }
        else
        {   
            message.channel.startTyping();
            exec(args.join(" "))
                .then((stdout, stderr) =>
                {
                    {
                        if (stderr)
                        {
                            return message.reply(`\`\`\`${inspect(stderr)}\`\`\``);
                        }
                        message.reply(`\`\`\`${inspect(stdout)}\`\`\``);
                        message.channel.stopTyping();
                }})
                .catch((error) =>
                {
                    message.reply(`Failed to execute terminal command. \n \`\`\`${error}\`\`\``)
                    message.channel.stopTyping();
                })
        };
    },
};
