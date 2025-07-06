module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Ahasanul Haque Akash", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.ibb.co/1GQH4s97/devil-face.jpg", "https://i.ibb.co/sB3qK3Q/image.jpg", "https://i.ibb.co/QjmkRt9m/download.jpg", "https://i.ibb.co/1tb17h05/Eren.jpg"];
var callback = () => api.sendMessage({body:`🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇮🇳 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐡𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡 ☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨https://www.facebook.com/youareinmygenjutsu 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 𝐍𝐨 𝐈𝐧𝐬𝐭𝐚 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 \n\n  ====𝗧𝗼 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔 𝗯𝗼𝘁/𝐭𝐨 𝐚𝐝𝐝 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐨𝐧 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 ===𝐤𝐧𝐨𝐜𝐤 𝐦𝐞 𝐨𝐧 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
