const findusr = require(`/home/pi/Desktop/ictar/ictardiscord/functions/finduser.js`)
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
            var evald = eval(args.join(" "));
            message.reply(` \`\`\`${evald}\`\`\` `);
        };
    },
};
