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

var attachment = null;

  bot.on('message', message => {
      // If the message is '!rip'
      if (message.content === 'b.f sword') {
          // Create the attachment using Attachment
          attachment = new Attachment('./images/BFSword.png');
          // Send the attachment in the message channel
          message.reply("+ 20 Attack Damage");
          message.channel.send(attachment);
      }
      else if (message.content === 'tear of the goddess') {
        attachment = new Attachment('./images/tofg.png');
        message.reply("+ 20 Mana");
        message.channel.send(attachment);
      }
      else if (message.content === 'chain vest') {
        attachment = new Attachment('./images/chainvest.png');
        message.reply("+20 Armor");
        message.channel.send(attachment);
      }
      else if (message.content === "needlessly large rod") {
        attachment = new Attachment('./images/needlessly.png');
        message.reply("+ 20 spell damage)");
        message.channel.send(attachment);
      }
      else if (message.content === 'recurve bow'){
        attachment = new Attachment('./images/recurve.png');
        message.reply("+15% attack speed");
        message.channel.send(attachment)
      }


  });
// log in your bot using the token given by the website!
bot.login('NTkzNDQwNDA3MDUzMTM5OTcw.XRN6-g.X2T7QPYF7IFkesHzKSz37q9OCqE');
