const sleep = require('system-sleep');
module.exports = {
	name: '8ball',
    description: 'have a question that only a randomly generated answer can sate?',
    usage: '=8ball <question>',
    category: 'general',
	execute(message, args, client) {
        // yes i know this is gay i dont want to fix it rn
        var answers = ["sure why not", "go ahead", "yeah", "true", "idk", "probably", "not sure tbh", "uhhh", "naw", "dont think so", "gonna go with a no", "no"];
        var answer = answers[Math.floor(Math.random() * answers.length)];
        message.reply(content=":8ball: A reply has been recieved"
            + (`\n\`\`\`${answer}\`\`\``));
	},
};
