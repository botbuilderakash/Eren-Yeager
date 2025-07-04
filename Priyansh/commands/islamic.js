module.exports.config = {
  name: "islamic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Random Islamic Pictures",
  commandCategory: "image",
  usages: "islamic",
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

"https://i.ibb.co/PZg6PhXD/9ce6bbb7-3fa6-4078-88b0-87605f359dec.jpg",
"https://i.ibb.co/0VcCfX48/15cd5310-5b87-4c7a-aaa1-fecdac184e7b.jpg",
"https://i.ibb.co/wmvd81C/035f20d5-e8ee-4ae7-8cd1-68ae42f64abd.jpg",
"https://i.ibb.co/YJjNK2G/42b36488-2fad-430c-9268-bb56bef4adc6.jpg",
"https://i.ibb.co/ycg88qyL/93e179d9-1c44-4442-b6c6-d1a992b76825.jpg",
"https://i.ibb.co/GQKkjnkf/95f577e1-5dc4-429a-a433-55d66f849975.jpg",
"https://i.ibb.co/84bbMS99/316f79c2-cbd4-4441-ac03-b111d7fe058c.jpg",
"https://i.ibb.co/kVsLqvVC/370bf80d-5093-4ae0-9d5c-5c926cf6d1e9.jpg",
"https://i.ibb.co/GZDVZwy/553b714b-3047-4586-8f7b-f381ef7c9297.jpg",
"https://i.ibb.co/hF2MXvdk/2297f626-2b62-475c-8581-eeccbab78f4a.jpg",
"https://i.ibb.co/8gGpdyrJ/07371b48-77df-4ddc-b71d-a5ba74398e7a.jpg",
"https://i.ibb.co/Rpcqvx6Q/13855bee-37ab-4f4b-8ccf-494f9c25d057.jpg",
"https://i.ibb.co/LXCyR6D8/91526a9c-e6f6-4a3c-98d3-801addc49f50.jpg",
"https://i.ibb.co/BVzKsL5p/Admire-the-timeless-beauty-of-Madinah-with-this.jpg",
"https://i.ibb.co/XkNG3t38/b74d402e-fcd4-4a54-b124-c8743c31b78b.jpg",
"https://i.ibb.co/Ng0mnCz9/c3534fab-c2f8-480b-bb72-f01e45c96f92.jpg",
"https://i.ibb.co/NndPCg0s/ca7216e3-6da0-4e0a-9310-74cadeccda53.jpg",
"https://i.ibb.co/Wv9fX6VC/cccff4d9-1987-4444-8c73-bafddb2be5d6.jpg",
"https://i.ibb.co/Mk9KCYhW/d3936148-2151-4bd2-85df-de69b2cadcac.jpg",
"https://i.ibb.co/RTDv2BVv/d4977965-3bb7-4fc6-ba22-7481a639f661.jpg",
"https://i.ibb.co/gZLSByJc/da558253-ba13-47b7-87ca-a4285edbf329.jpg",
"https://i.ibb.co/0yFvD0mf/dc737f42-f8b4-4925-940e-73ea1470aaef.jpg",
"https://i.ibb.co/GQ454nM6/dd75566e-32de-4fcf-8cd9-c7e81b676a0b.jpg",
"https://i.ibb.co/ds1mc0Wg/download.jpg",
"https://i.ibb.co/hFjch4NB/e1089a0f-571c-4885-8068-082ae57c3a15.jpg",
"https://i.ibb.co/cKTx9mm0/f6e4dc9e-5153-434a-a5c7-b2bda5b10a28.jpg",
"https://i.ibb.co/7dB4zBxH/f89d098f-1c2c-43d6-9bb5-166a0afed82c.jpg",
"https://i.ibb.co/tMnLZ3xJ/Hanging-Glowing-Ramadan-celebration-lantern.jpg",
"https://i.ibb.co/GDMz1wn/I-love-my-Allah-I-love-my-Quran.jpg",
"https://i.ibb.co/svfVfFnz/Islamische-Tapete.jpg",
"https://i.ibb.co/nMhJtk5D/Kaaba-Picture-with-High-Resolution-kaaba-makkah.jpg",
"https://i.ibb.co/r25V5Q8b/Quran-Online-Reading-Holy-book-of-Muslims-Quran.jpg",
"https://i.ibb.co/YFDmJ2VY/Quran-Sharif-Islamic.jpg",
"https://i.ibb.co/d0Zk5VXr/sabr-o-shukr.jpg",
"https://i.ibb.co/fz4DYtWM/Syrian-Man-Holding-Islamic-Prayer-Beads-Aleppo-Syria.jpg",
"https://i.ibb.co/fzN2tzDN/what-muslim-religion-is-all-about-islamicvideo.jpg",
"https://i.ibb.co/mCwnkfyN/on-Twitter-in-2022-Islamic-pictures-Mecca.jpg"
   
    ];
      var callback = () => api.sendMessage({body:`Random Loli Pic\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
