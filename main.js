require('dotenv').config()
const { Client, GatewayIntentBits } = require("discord.js");
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const token = process.env.SECRET_KEY;

let data = [];

fetch('https://www.ryankert.cc/rss-friend/sorted.json')
    .then( (res) => res.json())
    .then((json) => {
        data = json;
    })


// When the client is ready, run this code (only once)
client.once('ready', (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
    const channel = client.channels.cache.get('1015897853920542772');
    let returnData = String();
    returnData += '> **NewsLetter :**\n'
    for(let i = 0; i < 3 && i < data.length; i++) {
        const tempDate = new Date(data[i].date);
        returnData += '> ';
        if(tempDate.getMonth() < 9) returnData += '0';
        returnData += String(tempDate.getMonth()+1) + '/';
        if(tempDate.getDate() < 10) returnData += '0'
        
        returnData += String(tempDate.getDate()) + ' ';

        returnData += String(data[i].title) + '\n';
        returnData += '> link: ' + String(data[i].link) + '\n';
        if(i + 1 < 3 && i + 1 < data.length) returnData += '> \n';
    }
    channel.send(returnData);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply("```nice```\nchad");
	} else if (commandName === 'newsletter') {
        let returnData = String();
        returnData += '> **NewsLetter :**\n'
        for(let i = 0; i < 3 && i < data.length; i++) {
            const tempDate = new Date(data[i].date);
            returnData += '> ';
            if(tempDate.getMonth() < 9) returnData += '0';
            returnData += String(tempDate.getMonth()+1) + '/';
            if(tempDate.getDate() < 10) returnData += '0'
            
            returnData += String(tempDate.getDate()) + ' ';

            returnData += String(data[i].title) + '\n';
            returnData += '> link: ' + String(data[i].link) + '\n';
            if(i + 1 < 3 && i + 1 < data.length) returnData += '> \n';
        }
        await interaction.reply(returnData);
    }
});

// console.log(process.env.SECRET_KEY)
client.login(token);


