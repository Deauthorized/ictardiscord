const { ShardingManager } = require('discord.js');
const manager = new ShardingManager(__dirname + '/Ictar.js', { token: process.env.TOKEN, totalShards: 4 });


manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
