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
const bfSword = new Item("B.F. Sword","+20 Attack Damage","","-",
  "\n+ B.F. Sword = Infinity edge,\n" +
  "+ Needlessly large rod = Hextech gunblade,\n" +
  "+ Recurve bow = Sword of the Divine,\n" +
  "+ Tear of the goddess = Spear of Shojin,\n" +
  "+ Chain vest = Guardian Angel,\n" +
  "+ Negatron cloak = The Bloodthirster,\n" +
  "+ Giant's belt = Zeke's Herald,\n" +
  "+ Spatula = Youmuu's Ghostblade\n","./images/BFSword.png")
const tear = new Item("Tear of the Goddess","+20 Mana","","-",
  "\n+ B.F. Sword = Spear of Shojin \n" +
  "+ Needlessly large rod = Luden's Echo \n" +
  "+ Recurve bow = Statikk Shiv \n" +
  "+ Tear of the goddess = Seraph's Embrance \n" +
  "+ Chain vest = Frozen Heart \n" +
  "+ Negatron cloak = Hush \n" +
  "+ Giant's belt = Redemption \n" +
  "+ Spatula = Darkin","./images/tofg.png")
const chainvest = new Item("Chain vest","+ 20 Armor","","-",
  "\n+ B.F. Sword = Guardian Angel \n" +
  "+ Needlessly large rod = Locket of the Iron Solari \n" +
  "+ Recurve bow = Phantom Dancer \n" +
  "+ Tear of the goddess = Frozen Heart \n" +
  "+ Chain vest = Thornmail \n" +
  "+ Negatron cloak = Sword Breaker \n" +
  "+ Giant's belt = Red Buff \n" +
  "+ Spatula = Knight's Vow", "./images/chainvest.png")
const nlr = new Item("Needlessly Large Rod","+ 20 Spell Damage","","-",
  "\n+ B.F. Sword = Hextech Gunblade \n" +
  "+ Needlessly large rod = Rabadon's Deathcap \n" +
  "+ Recurve bow = Guinsoo's Rageblade \n" +
  "+ Tear of the goddess = Luden's Echo \n" +
  "+ Chain vest = Locket of the Iron Solari \n" +
  "+ Negatron cloak = Ionic Spark \n" +
  "+ Giant's belt = Morellonomicon \n" +
  "+ Spatula = Yuumi","./images/needlessly.png")
const recurve = new Item("Recurve Bow","+15% Attack Speed","","-",
  "\n+ B.F. Sword = Sword of the Divine \n" +
  "+ Needlessly large rod = Guinsoo's Rageblade \n" +
  "+ Recurve bow = Rapid Fire Cannon \n" +
  "+ Tear of the goddess = Statikk Shiv \n" +
  "+ Chain vest = Phantom Dancer \n" +
  "+ Negatron cloak = Cursed Blade \n" +
  "+ Giant's belt = Titanic Hydra \n" +
  "+ Spatula = Blade of the Ruined King","./images/recurve.png")
const negatron = new Item("Negatron Cloak","+20 Magic Resist","","-",
  "\n+ B.F. Sword = The Bloodthirster \n " +
  "+ Needlessly large rod = Ionic Spark \n" +
  "+ Recurve bow = Cursed Blade \n" +
  "+ Tear of the goddess = Hush \n" +
  "+ Chain vest = Sword Breaker \n" +
  "+ Negatron cloak = Dragon's Claw \n" +
  "+ Giant's belt = Zephyr \n" +
  "+ Spatula = Runaan's Hurricane","./images/negatron.png")
const giantsBelt = new Item("Giant's Belt","+200 HP","","-",
  "\n+ B.F. Sword = Zeke's Herald \n" +
  "+ Needlessly large rod = Morellonomicon \n" +
  "+ Recurve bow = Titanic Hydra \n" +
  "+ Tear of the goddess = Redemption \n" +
  "+ Chain vest = Red Buff \n" +
  "+ Negatron cloak = Zephyr \n" +
  "+ Giant's belt = Warmog's Armor \n" +
  "+ Spatula = Frozen Mallet","./images/giants.png")
const spatula = new Item("Spatula","It must do something...","","-",
  "\n+ B.F. Sword = Youmuu's Ghostblade \n" +
  "+ Needlessly large rod = Yuumi \n" +
  "+ Recurve bow = Blade of the Ruined King \n" +
  "+ Tear of the goddess = Darkin \n" +
  "+ Chain vest = Knight's Vow \n" +
  "+ Negatron cloak = Runaan's Hurricane \n" +
  "+ Giant's belt = Frozen Mallet \n" +
  "+ Spatula = Force of Nature","./images/spatula.png")
const infinity = new Item("Infinity Edge","+40 Attack Damage","\nCritical strikes deal +100% damage",
  "B.F Sword + B.F Sword","-","./images/infinity.png")
const hextech = new Item("Hextech Gunblade","+20 Attack Damage, +20 Spell Damage","\nHeal for 25% of all damage dealt",
  "B.F Sword + Needlessly Large Rod","-","./images/gunblade.png")
const sotd = new Item("Sword of the Divine","+20 Attack Damage, +15% Attack Speed","\nEach second, gain a 5% chance to gain 100% critical strike",
  " B.F Sword + Recurve Bow","-","./images/divine.png")
const sOs = new Item("Spear of Shojin","+20 Attack Damage, +20 Mana","\nAfter casting a spell, gain 15% of max mana per attack",
  " Tear of the Goddess + B.F Sword","-","./images/Spearofshojin.png")
const guardian = new Item("Guardian Angel","+20 Attack Damage, +20 Armor","\nWearer gets revived with 500 HP",
  " B.F Sword + Chain Vest","-","./images/guardianAngel.png")
const theBT = new Item("The Bloodthirster","+20 Attack Damage, +20 Magic Resist","\nAttacks heal for 35% of damage dealt",
  "B.F Sword + Negatron Cloak","-","./images/bloodthirster.png")
const zekes = new Item("Zeke's Herald","+20 Attack Damage, +200 HP","\nAdjacent allies gain +10% Attack Speed",
  "B.F Sword + Giant's Belt","-","./images/zekes.png")
const ghostblade = new Item("Yoummu's Ghostblade","+20 Attack Damage","\nWearer is also an Assassin",
  "B.F Sword + Spatula","-","./images/ghostblade.png")
const rabadons = new Item("Rabadon's Deathcap","+40 Spell Damage","\nWearer's Ability Damage is increased by 50%",
  "Needlesly Large Rod x2","-","./images/rabadon.png")
const rageblade = new Item("Guinsoo's Rageblade","+ 20 Spell Damage, +15% Attack Speed","\nAttacks give 3% Attack Speed, stacks infinitely",
  "Needlessly Large Rod + Recurve Bow","-","./images/rageblade.png")
const luden = new Item("Luden's Echo","+20 Spell Damage, +20 Mana","\nDeal 200 splash damage on ability hit",
  "Needlessly Large Rod + Tear of the Goddess","-","./images/luden.png")
const locket = new Item("Locket of the Iron Solari","+20 Spell Damage, +20 Armor","\nOn start of combat adjacent allies get 200 shield",
  "Needlessly Large Rod + Chain Vest","-","./images/solari.png")
const ionic = new Item("Ionic Spark","+20 Spell Damage, +20 Magic Resist","\nWhenever an enemy casts a spell they take 200 damage",
  "Needlessly Large Rod + Negatron Cloak","-","./images/ionic.png")
const morello = new Item("Morellonomicon","+20 Spell Damage, +200 HP","\nSpells burn 5% of the enemy max HP per second",
  "Needlessly Large Rod + Giant's Belt","-","./images/morello.png")
const yuumi = new Item("Yuumi","+20 Spell Damage","\nWearer is also a Sorcerer","-","Needlessly Large Rod + Spatula",
  "./images/yuumi.png")
const rfc = new Item("Rapid Fire Cannon","+30% Attack Speed","\nAttacks cannot be dodged. Attack Range is doubled",
  "Recurve Bow x2","-","./images/rapidfire.png")
const statikk = new Item("Statikk Shiv", "+15% Attack Speed + 20 Mana", "\nEvery third attack deals 100 splash magical damage",
  "Recurve Bow + Tear of the Goddess","","./images/stattik.png")
const cursed = new Item("Cursed Blade", "+15% Attack Speed +20 Magic Resist", "\nAttacks have a low chance to Shrink",
  "Recurve Bow + Negatron Cloak","-","./images/cursedblade.png")
const pd = new Item("Phantom Dancer", "+15% Attack Speed, +20 Armor", "\nWearer dodges all critical strikes",
  "Recurve Bow + Chain Vest","-","./images/phantom.png")
const titanic = new Item("Titanic Hydra", "+15% Attack Speed, +200 HP", "\nAttacks deal 10% of the wearer's max HP as splash damage",
  "Recurve Bow + Giant's Belt","-","./images/giants.png")
const botrk = new Item("Blade of the Ruined King", "15% Attack Speed", "\nWearer is also a Blademaster", "Recurve Bow + Spatula","-",
  "./images/ruinedking.png")
const seraph = new Item("Seraph's Embrance", "+40 Mana", "\nRegain 20 mana each time a spell is cast",
  "Tear of the Goddess x2","-","./images/seraph.png")
const frozenHeart = new Item("Frozen Heart", "+20 Mana, +20 Armor", "\nAdjacent enemies lose 20% Attack Speed",
  "Tear of the Goddess + Chain vest","-","./images/frozen.png")
const hush = new Item("Hush", "+20 Mana, +20 Magic Resist", "\nAttacks have a high chance to Silence",
  "Negatron Cloak + Tear of the Goddess","-","./images/hush.png")
const redemption = new Item("Redemption", "+20 Mana, +200 HP", "\nOn death heal all nearby allies for 1000 HP",
  "Tear of the Goddess + Giant's Belt","-","./images/redemption.png")
const darkin = new Item("Darkin", "+20 Mana", "Wearer is also a Demon", "\nTear of the Goddess + Spatula","-",
  "./images/darkin.png")
const thornmail = new Item("Thornmail", "+40 Armor", "\nReflect 35% of all damage taken from attacks",
  "Chain Vest x2","-","./images/thornmail.png")
const swordBreaker = new Item("Sword Breaker", "+20 Armor, +20 Magic Resist", "\nAttacks have a chance to disarm",
  "Chain Vest + Negatron Cloak","-","./images/swordbreaker.png")
const red = new Item("Red Buff", "+20 Amor, +200 HP", "\nAttacks burn for 2.5% max HP and disable healing",
  "Chain Vest + Giant's Belt","-","./images/redbuff.png")
const knightVow = new Item("Knight's Vow", "+20 Armor", "\nWearer is also a Knight", "Chain Vest + Spatula","-",
  "./images/knights.png")
const runaans = new Item("Runaan's Hurricane", "+20 Magic Resist", "\nAttacks hit additional enemies and deal 50% damage",
  "Negatron Cloak + Spatula","-","./images/runaans.png")
const zephyr = new Item("Zephyr", "+20 Magic Resist, +200 HP", "\nOn start of combat Banish an enemy", "Negatron Cloak + Giant's Belt","-",
  "./images/zephyr.png")
const dragonClaw = new Item("Dragon's Claw", "+40 Magic Resist", "\n83% resistance to magic damage", "Negatron Cloak x2","-",
  "./images/dragons.png")
const warmog = new Item("Warmog's Armour", "+400 HP", "\nRegenerate 3% of max HP per second", "Giant's Belt x2","-",
  "./images/warmogs.png")
const frozenMallet = new Item("Frozen Mallet", "+200 HP", "\nWearer is also a Glacial", "Giant's Belt + Spatula","-",
  "./images/frozenmallet.png")
const fON= new Item("Force Of Nature", "-", "Gain +1 members", "\nSpatula x2","-","./images/forceofnature.png")

var attachment = null
selectedItem = null

bot.on('ready', () => {
  console.log(`Logged in`)
});

function printItem(selectedItem, message) {
  // Create the attachment using Attachment
 attachment = new Attachment(selectedItem.getpicURL())
 // Send the attachment in the message channel
 message.channel.send(attachment)
 message.reply("\n" + selectedItem.getstatBonuses() + selectedItem.geteffect() +
 "\n Combinations:\n" + selectedItem.getcreates() + "\n Made from: " +
  selectedItem.getcontains());
}

bot.on('message', msg => {
  if (msg.content === "¬help") {
    msg.reply("Here you can find all items for Teamfight Tactics using an ! and then typing the name of an item" +
    "you can use commandsTFT to get a full list of all the items")
  }
});

bot.on('message', message => {
    switch(message.content) {
      case "¬b.f sword":
        printItem(bfSword,message)
      break;
      case "¬tear of the goddess":
        printItem(tear,message)
      break;
      case "¬chain vest":
        printItem(chainvest,message)
      break;
      case "¬needlessly large rod":
        printItem(nlr,message)
      break;
      case "¬recurve bow":
        printItem(recurve,message)
      break;
      case "¬giant's belt":
        printItem(giantsBelt,message)
      break;
      case "¬negatron cloak":
        printItem(negatron,message)
      break;
      case "¬spatula":
        printItem(spatula,message)
      break;
      case "¬infinity edge":
        printItem(infinity,message)
      break;
      case "¬hextech gunblade":
        printItem(hextech,message)
      break;
      case "¬sword of the divine":
        printItem(sotd,message)
      break;
      case "¬spear of shojin":
        printItem(sOs,message)
      break;
      case "¬guardian angel":
        printItem(guardian,message)
      break;
      case "¬the bloodthirster":
        printItem(theBT,message)
      break;
      case "¬zeke's herald":
        printItem(zekes,message)
      break;
      case "¬yoummu's ghostblade":
        printItem(ghostblade,message)
      break;
      case "¬rabadon's deathcap":
        printItem(rabadons,message)
      break;
      case "¬guinsoo's rageblade":
        printItem(rageblade,message)
      break;
      case "¬luden's echo":
        printItem(luden,message)
      break;
      case "¬locket of the iron solari":
        printItem(locket,message)
      break;
      case "¬ionic spark":
        printItem(ionic,message)
      break;
      case "¬morellonomicon":
        printItem(morello,message)
      break;
      case "¬yuumi":
        printItem(yuumi,message)
      break;
      case "¬rapid fire cannon":
        printItem(rfc,message)
      break;
      case "¬statikk shiv":
        printItem(statikk,message)
      break;
      case "¬blade of the ruined king":
        printItem(botrk,message)
      break;
      case "¬seraph's embrace":
        printItem(seraph,message)
      break;
      case "¬phantom dancer":
        printItem(pd,message)
      break;
      case "¬frozen heart":
        printItem(frozenHeart,message)
      break;
      case "¬hush":
        printItem(hush,message)
      break;
      case "¬redemption":
        printItem(redemption,message)
      break;
      case "¬darkin":
        printItem(darkin,message)
      break;
      case "¬thornmail":
        printItem(thornmail,message)
      break;
      case "¬sword breaker":
        printItem(swordBreaker,message)
      break;
      case "¬red buff":
        printItem(red,message)
      break;
      case "¬knight's vow":
        printItem(knightVow,message)
      break;
      case "¬runaan's hurricane":
        printItem(runaan,messages)
      break;
      case "¬zephyr":
        printItem(zephyr,message)
      break;
      case "¬dragon's claw":
        printItem(dragonClaw,message)
      break;
      case "¬warmog's armour":
        printItem(warmog,message)
      break;
      case "¬frozen mallet":
        printItem(frozenMallet,message)
      break;
      case "¬cursed blade":
        printItem(cursed,message)
      break;
      case "¬force of nature":
      printItem(fOn,message)
      break;
      case "¬commands":
        message.reply("The commands are: !b.f sword, !tear of the goddess, !chain vest, !negatron cloak, !giant's belt\n" +
        "!recurve bow, !needlessly large rod, !spatula, !infinity edge, !hextech gunblade\n" +
        "!sword of the divine, !spear of shojin, !guardian angel, !the bloodthirster\n" +
        "!zeke's herald, !yoummu's ghostblade, !rabadon's deathcap, !guinsoo's rageblade\n" +
        "!luden's echo, !locket of the iron solari, !ionic spark, !morellonomicon, !yuumi\n" +
        "!rapid fire cannon, !statikk shiv, !blade of the ruined king, !seraph's embrance\n" +
        "!phantom dancer, !frozen heart, !hush, !redemption, !darkin, !thornmail\n" +
        "!sword breaker, !red buff, !knight's vow, !runaan's hurricane, !zephyr\n" +
        "!dragon's claw, !warmog's armor, !frozen mallet, !cursed blade, !force of nature\n" +
        "if you see any innacuracy/bug please let me know by sending an email at TFTCookbookcs@gmail.com")
      break;
    }
  });

// log in your bot using the token given by the website!
bot.login('token');
