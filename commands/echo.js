module.exports = {
	name: 'echo',
	description: 'echos whatever you say into a channel, usage: =echo <channel-id> <message>',
	execute(message, args, client) {
        if (!message.member.hasPermission('ADMINISTRATOR', false, false))
        {
            message.reply("You can't do this.");
        }
        else
        {
            channel = args[0]
            if (message.channel.guild !== client.channels.get(channel).guild){
                message.reply("You can't send messages across discord servers.")
            }
            else
            {
                channel = args[0]
                msge = args.splice(1, args.length).join(" ")
                chnl = client.channels.get(channel).say(msge)
            }
        }
	},
};
