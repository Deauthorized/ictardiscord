const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
console.log("Loading commands");
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync(__dirname + '/events').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    console.log(`Loaded ${file}`);
	client.commands.set(command.name, command);
}
console.log("Loading events");
for (const file of eventFiles) {
	const command = require(`./events/${file}`);
    console.log(`Loaded ${file}`);
    client.events.set(command.name, command);
    client.events.get(command.name).execute(client);
}
console.log("Loading config");
const { prefix, botmaster } = require('./config.json');
console.log("Config loaded"
    + ("\n\nPrefix: " + prefix));
console.log("\nConnecting to discord...")
client.on('ready', () => 
{
    console.log("Connected as " + client.user.tag)

    client.user.setPresence({ game: { name: 'your consciousness', type: "streaming", url: "https://www.twitch.tv/dashrava"}});
})


client.on('message', message =>
{
    if (!message.content.startsWith(prefix) || message.author.bot || client.user == message.author) return;
    const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args, client, botmaster);
    } catch (error) {
        console.error(error);
        message.reply('Could not complete execution.'
            + ("```\n" + error + "\n```"));
    }
})


client.login(process.env.TOKEN)
