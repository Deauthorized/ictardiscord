const sleep = require('system-sleep');
module.exports = {
	name: '8ball',
	description: 'have a question that only a randomly generated answer can sate?',
	execute(message, args, client) {
        var answers = ["sure why not", "go ahead", "yeah", "true", "idk", "probably", "not sure tbh", "uhhh", "naw", "just dont", "shouldnt do that", "no"];
        var answer = answers[Math.floor(Math.random() * answers.length)];

        ballmsg = message.reply(":8ball: Contacting Corbenic for an answer.")
        sleep(2500)
        ballmsg.edit(":8ball: A reply has been recieved"
            + (`\n\`\`\`${answer}\`\`\``));

	},
};
