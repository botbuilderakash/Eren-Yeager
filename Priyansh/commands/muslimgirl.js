
module.exports.config = {
  name: "muslimgirl",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Random Muslim Girls Pictures",
  commandCategory: "image",
  usages: "muslimgirl",
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

  "https://i.ibb.co/7x73cLQ1/girls-dpz.jpg",
  "https://i.ibb.co/V0twh6vg/fashion-fashion-recipe-aesthetic-whisper.jpg",
  "https://i.ibb.co/3Y880nPw/hijab-fashionista-abaya-khimar-reading.jpg",
  "https://i.ibb.co/KJyt9TL/hijabfashion-hijabstyle-hijab-muslim-hijabi.jpg",
  "https://i.ibb.co/xt9ncP3T/hijabi-flower-islam-aesthetic-goodvibe.jpg",
  "https://i.ibb.co/MDV4RkVY/muslim-aestheticstyle-niqabi-A-esthetic-Islam.jpg",
  "https://i.ibb.co/cqkSJ3X/cherish-these-moments-tomorrow-they-ll-be.jpg",
  "https://i.ibb.co/s9nQ8Vqt/0cfcae65-5c7d-4215-bca7-3bb584600c7b.jpg",
  "https://i.ibb.co/C5SfBJQZ/0dc9daff-5d9f-485a-8158-a0abb36fd5f2.jpg",
  "https://i.ibb.co/9910sM64/1b7cb128-bd62-478a-ad47-fe281c9f0559.jpg",
  "https://i.ibb.co/3yX0ndfj/2d0fdf9e-0dc9-42e0-b6e6-8624e4100fdd.jpg",
  "https://i.ibb.co/Jj8Bgzs0/4a2addd4-6a99-4b20-9f04-86b218e35047.jpg",
  "https://i.ibb.co/99LBG4sF/4ea77685-5e9e-43ad-8109-f0379d101422.jpg",
  "https://i.ibb.co/N2p887gD/5acf3335-527e-4376-9a9f-a15420729b00.jpg",
  "https://i.ibb.co/tMgz4Y21/5b0848df-7bc9-4c24-88d2-d2f7f5e08de7.jpg",
  "https://i.ibb.co/SwS4rfZW/5ba718ee-ad7e-4a88-91e3-af6d78c68ea3.jpg",
  "https://i.ibb.co/nsCsPCfB/6a4a6615-9bfd-4837-a04a-25d3c5501230.jpg",
  "https://i.ibb.co/xQxTCM4/6ca44f86-fb4e-4060-b538-c5d90999bc9c.jpg",
  "https://i.ibb.co/Ps00k8nD/6eab0630-c1f7-4209-aaab-fe89757b9352.jpg",
  "https://i.ibb.co/ksrS67Qf/7ac4130c-e6c8-40b4-ace8-9f9fb1450f92.jpg",
  "https://i.ibb.co/s9Z4Q5MG/7c3b74ef-ee5c-46a8-944b-e7ff67edb4d0.jpg",
  "https://i.ibb.co/R4T0JT7P/7f468ee7-6c3e-419c-a37d-09145b346679.jpg",
  "https://i.ibb.co/ksrS67Qf/7ac4130c-e6c8-40b4-ace8-9f9fb1450f92.jpg",
  "https://i.ibb.co/VWxFqQ9M/8b128d7a-d29c-46b0-8937-81e0287ca1f2.jpg",
  "https://i.ibb.co/RG6mpkpV/8bfe7264-ffbc-4776-957b-d21e28f97cc6.jpg",
  "https://i.ibb.co/S7rxwcpM/8c5625f6-5aea-4920-8116-bafe2b8de0b1.jpg",
  "https://i.ibb.co/8Dr9NvVT/8d75f1d6-a2ca-49da-bf73-059c284a7021.jpg",
  "https://i.ibb.co/LhbK1H36/8fa51a8c-f73f-422a-bcbe-3cd5f3a8844e.jpg",
  "https://i.ibb.co/dscG8qhv/9bb400e8-1e72-4f50-9d1f-ecde620e9037.jpg",
  "https://i.ibb.co/5XfVxYy5/9f6f074d-ca23-4b99-9cc0-d0b4eec9710b.jpg",
  "https://i.ibb.co/7x80DHz6/21adb822-e4b6-4be6-be93-34a3dfa56a94.jpg",
  "https://i.ibb.co/pjQjwY4p/35e574f3-fe7f-4bbf-910d-30bb115165e9.jpg",
  "https://i.ibb.co/Y7DFFHGp/55d26504-2200-4a07-98a1-d86c08dbafde.jpg",
  "https://i.ibb.co/v6tb7sGK/67fd3c64-a5d4-485d-b9e0-8d2e6d1e3de7.jpg",
  "https://i.ibb.co/RTHwL8Qh/71d46b4f-20f7-4415-9d89-c578ee7e5bcc.jpg",
  "https://i.ibb.co/S4VxFbz2/73fe7da6-17ad-40b4-8f17-c9366aa42d61.jpg"
   
    ];
      var callback = () => api.sendMessage({body:`Muslim Girls Pictures.These images are collected from the internet by the bot owner 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡.\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
