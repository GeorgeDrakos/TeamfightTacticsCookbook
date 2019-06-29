const {Client, Attachment} = require('discord.js');
const bot = new Client();
// Item class
  class Item {
    constructor (name,statBonuses,effect,contains,creates,picURL) {
      this.name = name
      this.statBonuses = statBonuses
      this.effect = effect
      this.contains = contains
      this.creates = creates
      this.picURL = picURL
    }
      getname() {
        return this.name
      }
      getstatBonuses() {
        return this.statBonuses
      }
      geteffect() {
        return this.effect
      }
      getcontains() {
        return this.contains
      }
      getcreates() {
        return this.creates
      }
      getpicURL() {
        return this.picURL
      }
  }

// base items
const bfSword = new Item("B.F. Sword","+20 Attack Damage","-","-", " +B.F. Sword = Infinity edge,\n" +
  "+ Needlessly large rod = Hextech gunblade,\n" +
  "+ Recurve bow = Sword of the Divine,\n" +
  "+ Tear of the goddess = Spear of Shojin,\n" +
  "+ Chain vest = Guardian Angel,\n" +
  "+ Negatron cloak = The Bloodthirster,\n" +
  "+ Giant's belt = Zeke's Herald,\n" +
  "+ Spatula = Youmuu's Ghostblade\n","./images/BFSword.png")
const tear = new Item("Tear of the Goddess","+20 Mana","-","-",
  "B.F. Sword = Spear of Shojin \n" +
  "+ Needlessly large rod = Luden's Echo \n" +
  "+ Recurve bow = Statikk Shiv \n" +
  "+ Tear of the goddess = Seraph's Embrance \n" +
  "+ Chain vest = Frozen Heart \n" +
  "+ Negatron cloak = Hush \n" +
  "+ Giant's belt = Redemption \n" +
  "+ Spatula = Darkin","./images/tofg.png")
const chainvest = new Item("Chain vest","+ 20 armor","-","-","+ B.F. Sword = Guardian Angel \n" +
  "+ Needlessly large rod = Locket of the Iron Solari \n" +
  "+ Recurve bow = Phantom Dancer \n" +
  "+ Tear of the goddess = Frozen Heart \n" +
  "+ Chain vest = Thornmail \n" +
  "+ Negatron cloak = Sword Breaker \n" +
  "+ Giant's belt = Red Buff \n" +
  "+ Spatula = Knight's Vow", "./images/chainvest.png")
const nlr = new Item("Needlessly Large Rod","+ 20 Spell Damage","-","-","+ B.F. Sword = Hextech Gunblade \n" +
  "+ Needlessly large rod = Rabadon's Deathcap \n" +
  "+ Recurve bow = Guinsoo's Rageblade \n" +
  "+ Tear of the goddess = Luden's Echo \n" +
  "+ Chain vest = Locket of the Iron Solari \n" +
  "+ Negatron cloak = Ionic Spark \n" +
  "+ Giant's belt = Morellonomicon \n" +
  "+ Spatula = Yuumi","./images/needlessly.png")
const recurve = new Item("Recurve Bow","+15% Attack Speed","-","-","+ B.F. Sword = Sword of the Divine \n" +
  "+ Needlessly large rod = Guinsoo's Rageblade \n" +
  "+ Recurve bow = Rapid Fire Cannon \n" +
  "+ Tear of the goddess = Statikk Shiv \n" +
  "+ Chain vest = Phantom Dancer \n" +
  "+ Negatron cloak = Cursed Blade \n" +
  "+ Giant's belt = Titanic Hydra \n" +
  "+ Spatula = Blade of the Ruined King","./images/recurve.png")
const negatron = new Item("Negatron Cloak","+20 Magic Resist","-","-","+ B.F. Sword = The Bloodthirster \n " +
  "+ Needlessly large rod = Ionic Spark \n" +
  "+ Recurve bow = Cursed Blade \n" +
  "+ Tear of the goddess = Hush \n" +
  "+ Chain vest = Sword Breaker \n" +
  "+ Negatron cloak = Dragon's Claw \n" +
  "+ Giant's belt = Zephyr \n" +
  "+ Spatula = Runaan's Hurricane","./images/negatron.png")
const giantsBelt = new Item("Giant's Belt","+200 HP","-","-","+ B.F. Sword = Zeke's Herald \n" +
  "+ Needlessly large rod = Morellonomicon \n" +
  "+ Recurve bow = Titanic Hydra \n" +
  "+ Tear of the goddess = Redemption \n" +
  "+ Chain vest = Red Buff \n" +
  "+ Negatron cloak = Zephyr \n" +
  "+ Giant's belt = Warmog's Armor \n" +
  "+ Spatula = Frozen Mallet","./images/giants.png")
const spatula = new Item("Spatula","It must do something...","-","-","+ B.F. Sword = Youmuu's Ghostblade \n" +
  "+ Needlessly large rod = Yuumi \n" +
  "+ Recurve bow = Blade of the Ruined King \n" +
  "+ Tear of the goddess = Darkin \n" +
  "+ Chain vest = Knight's Vow \n" +
  "+ Negatron cloak = Runaan's Hurricane \n" +
  "+ Giant's belt = Frozen Mallet \n" +
  "+ Spatula = Force of Nature","./images/spatula.png")
const infinity = new Item("Infinity Edge","-","Critical strikes deal +100% damage",
  "B.F Sword + B.F Sword","-","./images/infinity.png")
const hextech = new Item("Hextech Gunblade","-","Heal for 25% of all damage dealt",
  "B.F Sword x2","-","./images/gunblade.png")
const sotd = new Item("Sword of the Divine","-","Each second, gain a 5% chance to gain 100% critical strike",
  " B.F Sword + Recurve Bow","-","./images/divine.png")
const sOs = new Item("Spear of Shojin","-","After casting a spell, gain 15% of max mana per attack",
  " Tear of the Goddess + B.F Sword","-","./images/Spearofshojin.png")
const guardian = new Item("Guardian Angel","-","Wearer gets revived with 500 HP",
  " B.F Sword + Chain Vest","-","./images/guardianAngel.png")
const theBT = new Item("The Bloodthirster","-","Attacks heal for 35% of damage dealt",
  "B.F Sword + Negatron Cloak","-","./images/bloodthirster.png")
const zekes = new Item("Zeke's Herald","-","Adjacent allies gain +10% Attack Speed",
  "B.F Sword + Giant's Belt","-","./images/zekes.png")
const ghostblade = new Item("Yoummu's Ghostblade","-","Wearer is also an Assassin",
  "B.F Sword + Spatula","-","./images/ghostblade.png")
const rabadons = new Item("Rabadon's Deathcap","-","Wearer's Ability Damage is increased by 50%",
  "Needlesly Large Rod x2","-","./images/rabadon.png")
const rageblade = new Item("Guinsoo's Rageblade","-","Attacks give 3% Attack Speed, stacks infinitely",
  "Needlessly Large Rod + Recurve Bow","-","./images/rageblade.png")
const luden = new Item("Luden's Echo","-","Deal 200 splash damage on ability hit",
  "Needlessly Large Rod + Tear of the Goddess","-","./images/luden.png")
const locket = new Item("Locket of the Iron Solari","-","On start of combat adjacent allies get 200 shield",
  "Needlessly Large Rod + Chain Vest","-","./images/solari.png")
const ionic = new Item("Ionic Spark","-","Whenever an enemy casts a spell they take 200 damage",
  "Needlessly Large Rod + Negatron Cloak","-","./images/ionic.png")
const morello = new Item("Morellonomicon","-","Spells burn 5% of the enemy max HP per second",
  "Needlessly Large Rod + Giant's Belt","-","./images/morello.png")
const yuumi = new Item("Yuumi","-","Wearer is also a Sorcerer","-","Needlessly Large Rod + Spatula",
  "./images/yuumi.png")
const rfc = new Item("Rapid Fire Cannon","-","Attacks cannot be dodged. Attack Range is doubled",
  "Recurve Bow x2","-","./images/rapidfire.png")
const statikk = new Item("Statikk Shiv", "-", "Every third attack deals 100 splash magical damage",
  "Recurve Bow + Tear of the Goddess","-","./images/stattik.png")
const cursed = new Item("Cursed Blade", "-", "Attacks have a low chance to Shrink",
  "Recurve Bow + Negatron Cloak","-","./images/cursedblade.png")
const pd = new Item("Phantom Dancer", "-", "Wearer dodges all critical strikes",
  "Recurve Bow + Chain Vest","-","./images/phantom.png")
const titanic = new Item("Titanic Hydra", "-", "Attacks deal 10% of the wearer's max HP as splash damage",
  "Recurve Bow + Giant's Belt","-","./images/giants.png")
const botrk = new Item("Blade of the Ruined King", "-", "Wearer is also a Blademaster", "Recurve Bow + Spatula","-",
  "./images/ruinedking.png")
const seraph = new Item("Seraph's Embrance", "-", "Regain 20 mana each time a spell is cast",
  "Tear of the Goddess x2","-","./images/seraph.png")
const frozenHeart = new Item("Frozen Heart", "-", "Adjacent enemies lose 20% Attack Speed",
  "Tear of the Goddess + Tear of the Goddess","-","./images/frozen.png")
const hush = new Item("Hush", -"", "Attacks have a high chance to Silence",
  "Negatron Cloak + Tear of the Goddess","-","./images/hush.png")
const redemption = new Item("Redemption", "-", "On death heal all nearby allies for 1000 HP",
  "Tear of the Goddess + Giant's Belt","-","./images/redemption.png")
const darkin = new Item("Darkin", "-", "Wearer is also a Demon", "Tear of the Goddess + Spatula","-",
  "./images/darkin.png")
const thornmail = new Item("Thornmail", "-", "Reflect 35% of all damage taken from attacks",
  "Chain Vest x2","-","./images/thornmail.png")
const swordBreaker = new Item("Sword Breaker", "-", "Attacks have a chance to disarm",
  "Chain Vest + Negatron Cloak","-","./images/swordbreaker.png")
const red = new Item("Red Buff", "-", "Attacks burn for 2.5% max HP and disable healing",
  "Chain Vest + Giant's Belt","-","./images/redbuff.png")
const knightVow = new Item("Knight's Vow", "-", "Wearer is also a Knight", "Chain Vest + Spatula","-",
  "./images/knights.png")
const runaans = new Item("Runaan's Hurricane", "-", "Attacks hit additional enemies and deal 50% damage",
  "Negatron Cloak + Spatula","-","./images/runaans.png")
const zephyr = new Item("Zephyr", "-", "On start of combat Banish an enemy", "Negatron Cloak + Giant's Belt","-",
  "./images/zephyr.png")
const dragonClaw = new Item("Dragon's Claw", "-", "83% resistance to magic damage", "Negatron Cloak x2","-",
  "./images/dragons.png")
const warmog = new Item("Warmog's Armour", "-", "Regenerate 3% of max HP per second", "Giant's Belt x2","-",
  "./images/warmogs.png")
const frozenMallet = new Item("Frozen Mallet", "-", "Wearer is also a Glacial", "Giant's Belt + Spatula","-",
  "./images/frozenmallet.png")
const fON= new Item("Force Of Nature", "-", "Gain +1 members", "Spatula x2","-","./images/forceofnature.png")

var attachment = null
var running = 0
selectedItem = null

bot.on('ready', () => {
  console.log(`Logged in`)
});

bot.on('message', msg => {
  if (msg.content === '¬help') {
    msg.reply("This bot has all information for " +
    " Teamfight Tactics")
  }
});
function printItem(selectedItem, message) {
  // Create the attachment using Attachment
 attachment = new Attachment(selectedItem.getpicURL())
 // Send the attachment in the message channel
 message.channel.send(attachment)
 message.reply(selectedItem.getstatBonuses() + selectedItem.geteffect() +
 "\n Combinations:\n" + selectedItem.getcreates() + "\n Made from: " +
  selectedItem.getcontains());
}
bot.on('message', message => {
    switch(message.content) {
      case "b.f sword":
        printItem(bfSword,message)
      break;
      case "tear of the goddess":
        printItem(tear,message)
      break;
      case "chain vest":
        printItem(chainvest,message)
      break;
      case "needlessly large rod":
        printItem(nlr,message)
      break;
      case "recurve bow":
        printItem(recurve,message)
      break;
      case "giant's belt":
        printItem(giantsBelt,message)
      break;
      case "negatron cloak":
        printItem(negatron,message)
      break;
      case "spatula":
        printItem(spatula,message)
      break;
      case "infinity edge":
        printItem(infinity,message)
      break;
      case "hextech gunblade":
        printItem(hextech,message)
      break;
      case "sword of the divine":
        printItem(sotd,message)
      break;
      case "spear of shojin":
        printItem(sOs,message)
      break;
      case "guardian angel":
        printItem(guardian,message)
      break;
      case "the bloodthirster":
        printItem(theBT,message)
      break;
      case "zeke's herald":
        printItem(zekes,message)
      break;
      case "yoummu's ghostblade":
        printItem(ghostblade,message)
      break;
      case "rabadon's deathcap":
        printItem(rabadons,message)
      break;
      case "guinsoo's rageblade":
        printItem(rageblade,message)
      break;
      case "luden's echo":
        printItem(luden,message)
      break;
      case "locket of the iron solari":
        printItem(locket,message)
      break;
      case "ionic spark":
        printItem(ionic,message)
      break;
      case "morellonomicon":
        printItem(morello,message)
      break;
      case "yuumi":
        printItem(yuumi,message)
      break;
      case "rapidfire cannon":
        printItem(rfc,message)
      break;
      case "statikk shiv":
        printItem(statikk,message)
      break;
      case "blade of the ruined king":
        printItem(botrk,message)
      break;
      case "seraph's embrace":
        printItem(seraph,message)
      break;
      case "frozen heart":
        printItem(frozenHeart,message)
      break;
      case "hush":
        printItem(hush,message)
      break;
      case "redemption":
        printItem(redemption,message)
      break;
      case "darkin":
        printItem(darkin,message)
      break;
      case "thornmail":
        printItem(thornmail,message)
      break;
      case "sword breaker":
        printItem(swordBreaker,message)
      break;
      case "red buff":
        printItem(red,message)
      break;
      case "knight's vow":
        printItem(knightVow,message)
      break;
      case "runaan's hurricane":
        printItem(runaan,messages)
      break;
      case "zephyr":
        printItem(zephyr,message)
      break;
      case "dragon's claw":
        printItem(dragonClaw,message)
      break;
      case "warmog's armour":
        printItem(warmog,message)
      break;
      case "frozen mallet":
        printItem(frozenMallet,message)
      break;
      case "force of nature":
      printItem(fOn,message)
      break;
    }
  });

// log in your bot using the token given by the website!
bot.login('NTkzNDQwNDA3MDUzMTM5OTcw.XRN6-g.X2T7QPYF7IFkesHzKSz37q9OCqE');
