module.exports = {
	name: 'slowmode',
    	description: 'sets the channels slowmode value',
    	usage: '=slowmode <int|off>',
	execute(message, args, client) {
        if (!message.member.hasPermission('ADMINISTRATOR', false, false))
        {
            message.reply("You don't have authority over this channel.");
        }
        else
        {
            if (args[0] == "off")
            {
                message.channel.setRateLimitPerUser(0);
                message.reply("Disabled slowmode.")
                return;
            }
            if (isNaN(args[0]) || parseInt(args[0]) > 21600 || parseInt(args[0]) < 1)
            {
                message.reply(`Illegal argument. (${args[0]})`);
                return;
            }
            else
            {   
                message.channel.setRateLimitPerUser(args[0]);
                message.reply("Successfully set slowmode to " + parseInt(args[0]))
                return;
            }
        }
	},
};
