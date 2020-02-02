module.exports = {
    name: 'slowmode',
    description: 'sets the channels slowmode value, use "off" to disable slowmode',
    usage: '=slowmode <int|off>',
    perms: 'MANAGE_CHANNELS',
    argsMin: 1,
	execute(message, args, client) {
        if (args[0] == "off")
            {
                message.channel.setRateLimitPerUser(0);
                message.reply("Slowmode has been disabled.")
                return;
            }
            if (isNaN(args[0]) || parseInt(args[0]) > 21600 || parseInt(args[0]) < 1)
            {
                message.reply(`Illegal argument.`);
                return;
            }
            else
            {   
                message.channel.setRateLimitPerUser(args[0]);
                message.reply(`Slowmode value has been set to ${parseInt(args[0])} seconds.`)
                return;
            }
	},
};
