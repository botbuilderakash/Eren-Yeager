module.exports.config = {
  name: "animegirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Random Loli Pics",
  commandCategory: "nsfw",
  usages: "lolilewd",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [

     "https://i.imgur.com/2iXk7mU.jpg",
    "https://i.ibb.co/kgMGYctG/3e73efcb-8421-4191-8c00-d1ec982f0748.jpg
https://i.ibb.co/ZC04qpD/68ef86e7-9a2a-4ec8-9efd-bb233e78de42.jpg
https://i.ibb.co/Jjq7vgbX/771a3bb2-0c99-4353-99d6-d68a2686fb09.jpg
https://i.ibb.co/MjTPwq1/17071e4f-6b48-4529-8e44-61acacb955de.jpg
https://i.ibb.co/Jjh8TFk4/46155c89-060f-432b-986d-90293f8a8c7e.jpg
https://i.ibb.co/GQZKQgbY/Mikasa-Ackerman-The-Attack-of-Titans.jpg
",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",

     "https://i.imgur.com/AXmBgGk.jpg"
     
    ];
      var callback = () => api.sendMessage({body:`Random Loli Pic\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
