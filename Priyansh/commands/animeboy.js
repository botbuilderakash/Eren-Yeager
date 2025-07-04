
module.exports.config = {
  name: "animeboy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Random Anime boy",
  commandCategory: "anime",
  usages: "animeboy",
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

"https://i.ibb.co/p6CGqHtg/anime-levi.jpg",
"https://i.ibb.co/DHss68DT/attack-on-titan-animeartist.jpg",
"https://i.ibb.co/r29TYjYh/Attack-On-Titan-Ao-T-Eren-Yeager-Eren.jpg",
"https://i.ibb.co/DfKbHYkG/fushiguromegumi-Itadoriyuji-jujutsukaisen.jpg",
"https://i.ibb.co/HTKCXbqs/leviackerman-attackontitan-anime-aiart.jpg",
"https://i.ibb.co/4ngPgHxg/Want-to-dive-into-the-world-of-anime-Visit.jpg",
"https://i.ibb.co/Q3czhFBP/ryomen-sukuna-anime-icon-jjk.jpg",
"https://i.ibb.co/35cszQqF/Madara-Uchiwa-Naruto.jpg",
"https://i.ibb.co/RG95dLDw/Levi-Ackerman-O-exterminador-de-tit-esse-o.jpg",
"https://i.ibb.co/5W83Scp8/1f2737f9-9044-43d9-8862-088cc198688d.jpg",
"https://i.ibb.co/b56BTsGq/2fe2f701-cd73-4bdf-b1d7-cc10dde50fcd.jpg",
"https://i.ibb.co/998hgSNR/3eba55a4-2ac6-4e57-a131-0ba2e244f328.jpg",
"https://i.ibb.co/k60ByWwY/04e7ef7a-6c3a-4d8e-93a5-6c4bc02f753f.jpg",
"https://i.ibb.co/6J4MjqF9/6a6a443a-949e-4604-8b8e-95b5dbf2805f.jpg",
"https://i.ibb.co/BKvmdJ85/7ccfa2bb-383d-46c7-b814-e2a10d7e651d.jpg",
"https://i.ibb.co/4wVjFNss/7c2593a3-becb-47a0-9f5d-e129f332d751.jpg",
"https://i.ibb.co/Qjj5BQNv/9aa481d8-5040-4ead-ab9e-b736db9247b3.jpg",
"https://i.ibb.co/SWXLvhf/21ff6765-55a5-45e0-a0e6-1c78fe145806.jpg",
"https://i.ibb.co/chCt6t6W/22c5d48c-5e7d-40b2-ae65-3bd11be61e29.jpg",
"https://i.ibb.co/SX3wzDwZ/30fd1d3f-3cd3-40eb-aff3-29cdf5555598.jpg",
"https://i.ibb.co/21C58WC6/37df89ab-bd7c-497a-8a54-ca5207ea4bdb.jpg",
"https://i.ibb.co/dwy7ss4v/77fbe2d6-c184-45c1-942d-33d09ea47ae2.jpg",
"https://i.ibb.co/B23HBBx1/93a751be-a2a9-4096-92ff-a7c6d3f9309e.jpg",
"https://i.ibb.co/Nv1fmCt/95ae7add-ce56-4c1f-a54b-847f4ff1131d.jpg",
"https://i.ibb.co/xqfMNjFP/181fda47-21a5-4e9c-97f2-71254e338156.jpg",
"https://i.ibb.co/LLhJmDc/493e1d18-9b58-49a5-b6d2-961c3be61bc6.jpg",
"https://i.ibb.co/sG7NmS4/62099bfe-2d2b-4dd9-98c4-281128e0bf2b.jpg",
"https://i.ibb.co/ycbXzwQ1/98644f76-d65c-4082-a704-55a95759f145.jpg",
"https://i.ibb.co/Kj6XRvx4/60918855-083e-4ab9-a012-e5f8e80338ea.jpg",
"https://i.ibb.co/Crmm66B/78680968-a769-4439-946d-119173bf5cf0.jpg",
"https://i.ibb.co/FbN53CJ0/a1fb93b2-8ca1-4537-9dd4-93678129d6af.jpg",
"https://i.ibb.co/mLQQLM9/a2f687cc-5327-4a09-ba1d-b4b3438d401a.jpg",
"https://i.ibb.co/TxHJqj7B/a109f6d0-70f0-478d-a61e-e75a885fc49d.jpg",
"https://i.ibb.co/67dZ8Pmq/Anime-Jujutsu-Kaisen-animeicons-jujutsukaisen.jpg",
"https://i.ibb.co/LhvSzzb4/Attack-on-titan-Shingeki-no-kyojin-Mikasa.jpg",
"https://i.ibb.co/TBFKHncy/b6ea1ba9-c6f9-4821-a442-86cbbaac19b3.jpg",
"https://i.ibb.co/WWkr8rBR/b660ae19-2121-479b-83aa-62e185eda246.jpg",
"https://i.ibb.co/R4vDHPkv/bc8b5e6a-8340-4d98-8751-ada45a036d30.jpg",
"https://i.ibb.co/Psf0bvWd/c8729408-d520-46e6-beed-85b95a1cfce3.jpg",
"https://i.ibb.co/4wnLz4CJ/d1c9b438-f619-4414-a2f5-a7029f167c60.jpg",
"https://i.ibb.co/JwhH12cW/d6b57f7f-d12c-44d9-a06d-63135742656d.jpg",
"https://i.ibb.co/HDHV04GP/dce3f362-526e-4e50-97a9-768024b70cdb.jpg",
"https://i.ibb.co/hR8cCTGW/death-note.jpg",
"https://i.ibb.co/4RTqPCcy/desc-Itadori-Yuuji-from-jjk-jujutsukaisen.jpg",
"https://i.ibb.co/q3NMsHCF/download-1.jpg",
"https://i.ibb.co/RG9sX9j5/download-2.jpg",
"https://i.ibb.co/8DvsSM1z/download-3.jpg",
"https://i.ibb.co/gLXCnTrF/download-4.jpg",
"https://i.ibb.co/TD5HCkHy/download-5.jpg",
"https://i.ibb.co/ZpnMwhrj/download-6.jpg",
"https://i.ibb.co/t02mbGM/download-7.jpg",
"https://i.ibb.co/1GcwYrRp/download.jpg",
"https://i.ibb.co/pBzLjZjZ/ecf6bf44-5739-4b44-87df-935df1fcaa6c.jpg",
"https://i.ibb.co/mCShYLqt/Eren-Jaeger-rxjaeger.jpg",
"https://i.ibb.co/YFHncWPw/Eren-Yeager.jpg",
"https://i.ibb.co/8LDSzy8T/Eren.jpg",
"https://i.ibb.co/nqbpvSXJ/f0b1a1c2-f6a7-42e2-aed5-ce254c43fffe.jpg",
"https://i.ibb.co/4bGybNC/f5a34dbe-259d-4066-a1a2-1ff0a66f4be6.jpg",
"https://i.ibb.co/V0M51jDH/f271d3ca-5aa6-46ff-9e24-b0beb3f9a07e.jpg",
"https://i.ibb.co/TD9xZPyS/fbeb824c-0dbb-4ff4-9f14-7779abb73711.jpg",
"https://i.ibb.co/yBPhs702/fdcb97b7-f3d8-4728-977d-d6068137b663.jpg",
"https://i.ibb.co/HTsXSXX9/fee5a92c-9d00-4609-b317-f801d004d31d.jpg",
"https://i.ibb.co/svb444rt/Follow-for-more.jpg",
"https://i.ibb.co/Ldztvgrj/Gojo-Satoru-Jujutsu-Kaisen.jpg",
"https://i.ibb.co/2359y0v3/HARUKA-SAKURA.jpg",
"https://i.ibb.co/TBZ8QG4J/Ken-Ryuguji-Draken.jpg",
"https://i.ibb.co/FL34WG1x/Kira.jpg",
"https://i.ibb.co/HDWnJPfs/L-Death-Note-1.jpg",
"https://i.ibb.co/Z3ZbGNx/obito-Uchiha-sad.jpg",
"https://i.ibb.co/wNyjQ4TT/Rem-Death-Note.jpg",
"https://i.ibb.co/RGmNwNw1/Roughly-saving-40-of-deductive-skills.jpg",
"https://i.ibb.co/wFfvsL4S/Ryomen-Sukuna-Clapping-every-Sorcerers-of-Jujutsu.jpg",
"https://i.ibb.co/1YDG0w9k/Shingeki-No-Kyojin-Attack-on-Titan.jpg",
"https://i.ibb.co/VYmNrVS1/Sung-Jin-Woo-Solo-Leveling-sungjinwoo.jpg",
"https://i.ibb.co/GfRVKZLb/Umamiya-Wind-breaker-Anime.jpg",
"https://i.ibb.co/0RrY19Gw/wallpaper.jpg",
"https://i.ibb.co/JjHmKvMG/wallpapers-by-goated-aiart-Instagram.jpg",
"https://i.ibb.co/LdCKT1pb/WALLPER-ITACHI.jpg",
"https://i.ibb.co/bgGBdyxt/Wind-Breaker-Ilustracion-offical-game.jpg",
"https://i.ibb.co/cSHVdcVD/yuuji-received-a-Bonk-from-megumi-t-T.jpg",
"https://i.ibb.co/YFyzg7wc/image.jpg"
     
    ];
      var callback = () => api.sendMessage({body:`Random Anime Boy.These images are collected from the internet by the bot owner 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
