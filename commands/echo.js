module.exports = {
	name: 'ping',
	description: 'check connection to discords websocket in ms',
	execute(message, args, client) {
        if (!message.member.hasPermission('ADMINISTRATOR', false, false))
        {
            message.reply("You can't do this.");
        }
        else
        {
            channel = args[0]
            msge = args.splice(1, args.length).join(" ")
            message.reply(msge)
        }
	},
};
