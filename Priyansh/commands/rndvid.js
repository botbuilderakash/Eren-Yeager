
module.exports.config = {
  name: "rndvid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Random videos",
  commandCategory: "videos",
  usages: "randomvideos",
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

"https://drive.google.com/file/d/17kZlyMag6Xs9dN3QWNI-H5gH-vBAvLwf/view?usp=drive_link",
"https://drive.google.com/file/d/17kZlyMag6Xs9dN3QWNI-H5gH-vBAvLwf/view?usp=drive_link"
     
    ];
      var callback = () => api.sendMessage({body:`Random videos.These videos are collected from the internet by the bot owner 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡\nNumber of videos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback()); 
    

}
  
