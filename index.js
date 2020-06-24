const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('This Bot is Online');
})

bot.login(process.env.token);

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name == "🎊𝖂𝖊𝖑𝖈𝖔𝖒𝖊🎊");

    channel.send(`Welcome to our Server ${member}.`);

});

const PREFIX = '!';

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'mylink':
            message.channel.send('https://discord.com/api/oauth2/authorize?client_id=724168506932985886&permissions=8&scope=bot');
            break;
        case 'clear':
            if (!args[1]) return message.reply('Define a count')
            message.channel.bulkDelete(args[1])
            break;
        case 'kick':

            if (!args[1]) return message.channel.send('Please mention a user to be kicked')

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('Kicked User').then(() => {
                        message.channel.send(`Successfully Kicked ${user.tag}`);

                    }).catch(err => {
                        message.reply(`Unable to kick ${user.tag}`)
                        console.log(err);
                    });

                } else {
                    message.reply(`Invalid ${user.tag}`)
                }
            } else {
                message.reply(`Invalid ${user.tag}`)
            }
            break;
        case 'ban':

            if (!args[1]) return message.channel.send('Please mention a user to be Banned')

            const users = message.mentions.users.first();

            if (users) {
                const member = message.guild.member(users);

                if (member) {
                    member.ban({ ression: 'Successfully Banned' }).then(() => {
                        message.channel.send(`${users.tag} has been banned`)
                    }).catch(err => {
                        message.reply(`Unable to Ban ${users.tag}`)
                        console.log(err);
                    });
                } else {
                    message.reply(`Invalid ${users.tag}`)
                }
            } else {
                message.reply(`Invalid ${users.tag}`)
            }
            break;
        case 'Hello':
            message.reply('Hello! How are you?');
            break;




    }
})

var prefix = "+";
client.on("message", message => {

    if (message.content.startsWith(prefix + "dm")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
      message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
     m.send(`${argresult}\n ${m}`);
    })
     message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **MESSAGE SENT** `); 
     message.delete(); 
    };     
    });
    
    
    client.on('ready',()=>{
        console.log(' Bot is online now!');
        let statuses = [
            "  STATUS HERE ",
            "  STATUS HERE ",
            "  STATUS HERE " // U can add another
            
        ]
        setInterval(function(){
                let status = statuses[Math.floor(Math.random() * statuses.length)];
                client.user.setActivity(status, {type:"WATCHING"})
        
            }, 3000) //Seconds to Random
    
    
    
    });
    