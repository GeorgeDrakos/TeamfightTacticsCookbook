const {Client, Attachment} = require('discord.js');
  const bot = new Client();

bot.on('ready', () => {
 console.log(`Logged in`);
 });

bot.on('message', msg => {
 if (msg.content === '¬help') {
 msg.reply('This bot has all information regarding recipes for the' +
 ' mobile version of autochess');
 }
 });

 //bot.on('message', message => {
//  if (message.content === 'bfsword') {
//    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
//    msg.reply(message.author, bfSword);
//
//  }
//  });

  bot.on('message', message => {
      // If the message is '!rip'
      if (message.content === 'bfsword') {
          // Create the attachment using Attachment
          const attachment = new Attachment('./images/BFSword.png');
          // Send the attachment in the message channel
          message.reply("+ 20 Attack Damage");
          message.channel.send(attachment);
      }
  });

  bot.on('message', msg => {
   if (msg.content === '¬check') {
   msg.reply('I work lol ?!?!?!');
   }
   });
// log in your bot using the token given by the website!
bot.login('NTkzNDQwNDA3MDUzMTM5OTcw.XRN6-g.X2T7QPYF7IFkesHzKSz37q9OCqE');
