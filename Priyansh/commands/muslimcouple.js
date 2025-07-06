
module.exports.config = {
  name: "muslimcouple",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Random Muslim Couple Pictures",
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

"https://i.ibb.co/fzChnQmN/couplemuslim-wedding-wedding-islam-aesthetic.jpg",
"https://i.ibb.co/jvSbv9Zq/islam-islamic-aesthetic-wallpaper-motivation.jpg",
"https://i.ibb.co/nq9bjyr0/Fid-dunya-wal-akhirah-together-in-this-world.jpg",
"https://i.ibb.co/nNdVDjZ7/0e9ce0e0-ebf1-44f6-8a25-2a1a271d8f41.jpg",
"https://i.ibb.co/Ps3H6TW4/4a5046fc-18af-45f6-8dd1-c524bcde978e.jpg",
"https://i.ibb.co/PZkqBgyv/4ad20850-ae9f-44a9-950e-99745866a4bf.jpg",
"https://i.ibb.co/N2pZr3LZ/4cce9cfe-d96f-40bb-90dc-9f7c1d14290c.jpg",
"https://i.ibb.co/ns3tdbzh/4f805cd1-5e40-474d-b96c-f9a743a8f2e7.jpg",
"https://i.ibb.co/SD7zTmJ0/05af6099-fee5-4566-ae5c-78e829fd2821.jpg",
"https://i.ibb.co/fdtfjd3b/5b710b8b-73df-40c8-8a73-f398ac02cd9b.jpg",
"https://i.ibb.co/xvhMrwh/7bd978fa-897b-455a-80a4-f0dd7babe69d.jpg",
"https://i.ibb.co/Zzn5R4LV/9b6ccde8-3166-4ee8-a893-12b9eacdc5e1.jpg",
"https://i.ibb.co/fG0qCsnn/15a47e99-a1f7-4b25-92d3-d3d4cca0dd81.jpg",
"https://i.ibb.co/Qv9jR8HJ/23bc84b6-0657-4975-a81e-69571a96baee.jpg",
"https://i.ibb.co/PsX31KCn/30ae5f85-d564-428d-bd38-3d8029de0869.jpg",
"https://i.ibb.co/bg3JFqwm/42b3ea9b-59cd-42de-9516-88afb8abe5eb.jpg",
"https://i.ibb.co/qKdtrgn/43d6b11a-b664-4e01-bfc0-26a88e2d4945.jpg",
"https://i.ibb.co/pr4qh7zT/48e16238-1cba-4ddf-a717-9a918255e65d.jpg",
"https://i.ibb.co/5DD7K0W/60f45f08-2852-4449-b482-0c4bad2f879e.jpg",
"https://i.ibb.co/Zp87fdSx/512cf94a-5508-4844-98e5-008bf325f0db.jpg",
"https://i.ibb.co/Z50XH14/581b9dad-eb6e-4135-8e41-2424c3b9678a.jpg",
"https://i.ibb.co/CptBcrgd/637fde03-7f97-4158-9aaa-f909972ad38e.jpg",
"https://i.ibb.co/r2kPdJL7/672d1c2b-7868-4365-93ef-093022e5df41.jpg",
"https://i.ibb.co/rfsX9G66/837c631c-a6a7-4855-8864-91a97a065aa6.jpg",
"https://i.ibb.co/DDZSRzK8/877a9cf7-0c6a-4b6f-84f6-cc5454b3bbcf.jpg",
"https://i.ibb.co/dJJt0z5x/995c164f-e0f6-48d3-8a61-4f0ca9a92fd5.jpg",
"https://i.ibb.co/tMFQVVmZ/2237c173-5270-43b6-9a25-224df1466f4e.jpg",
"https://i.ibb.co/pjY6gZwh/4411f24f-45ff-4d28-871d-8ced8bcb1a11.jpg",
"https://i.ibb.co/6RF9Lwvq/5164d20a-225a-4695-8d0e-730d724ed2ba.jpg",
"https://i.ibb.co/Mx8qhhRY/9583fe13-379e-4bbb-a3cf-2a904b9c42ee.jpg",
"https://i.ibb.co/b5Td0FWW/17792a59-7e85-4437-a474-bf8cc655ebc9.jpg",
"https://i.ibb.co/HD9GdCV9/47837b5e-0a3d-49fc-bba4-079db3286efc.jpg",
"https://i.ibb.co/9Hk7J8bL/56615b88-ae53-4926-9674-fef33b730ed7.jpg",
"https://i.ibb.co/DDDWFCWK/90518ce7-7e9e-4055-ae9f-9dc5c32bf676.jpg",
"https://i.ibb.co/Y43Hjfpf/976462db-264d-45ac-b3e6-f13252d4fb29.jpg",
"https://i.ibb.co/nH2BkB7/4581475e-92cb-45cc-a76c-96cc1bfefab0.jpg",
"https://i.ibb.co/fYn2NPdR/6556945a-db0b-43ff-9781-8a267ac11696.jpg",
"https://i.ibb.co/1YPtVZ7K/8046461d-8a72-44e6-a08f-78c801983bf0.jpg",
"https://i.ibb.co/YSg32j5/17915471-8d95-465b-a5c8-3bb4bbd61668.jpg",
"https://i.ibb.co/v4rghKrs/74593378-be71-416f-8288-adf8e7cb3b0b.jpg",
"https://i.ibb.co/Rm6C0q2/a4cbeac7-bb91-4d5f-b8ef-fc30efb82620.jpg",
"https://i.ibb.co/ynDhcC90/aa1c2051-24f0-4cd5-a858-b526ab33d5bd.jpg",
"https://i.ibb.co/ppCsrwn/animation-muslim-couple-dp.jpg",
"https://i.ibb.co/HDGZW8pQ/b0c96d08-44e0-4c82-885c-2173ab92802b.jpg",
"https://i.ibb.co/ksR9HtZd/b6a51117-4be9-494a-a6f3-34e21e9bb09a.jpg",
"https://i.ibb.co/XxP8XtQy/b963d599-2a18-448d-91c5-9b9eb4b30379.jpg",
"https://i.ibb.co/7dnTMGNm/b36386d8-6369-45d3-9a08-366329575365.jpg",
"https://i.ibb.co/G34pPMYX/c75e37e6-4bd4-499c-8c44-00392f7e3d25.jpg",
"https://i.ibb.co/FkvBpwyg/c987f49c-2566-44b4-a5d7-671baa6dbc06.jpg",
"https://i.ibb.co/mr7wkCnM/c08036ed-f27b-4c96-b006-c46b7a45fcfe.jpg",
"https://i.ibb.co/CpwLLwTr/cc53327d-2e5f-4145-9e5d-e3d34cbb88d8.jpg",
"https://i.ibb.co/dwBJnG8T/cd3411e4-f0a9-4ad7-9754-503e69335fc6.jpg",
"https://i.ibb.co/My020zPs/ce2b1d23-2f6c-4986-80a3-b89ef6933020.jpg",
"https://i.ibb.co/j9gs8Wpm/d3bf938a-c502-40f8-b6c5-0cada339dc2b.jpg",
"https://i.ibb.co/XkbMsMfw/d5b769c9-8819-4714-ac00-89086ff035d7.jpg",
"https://i.ibb.co/whTJjqM4/d72e5ef4-636e-4524-b8c0-b7c2beafb666.jpg",
"https://i.ibb.co/0yG6jmpD/df11fa6c-7984-4c5c-964c-d6a3df40559f.jpg",
"https://i.ibb.co/Cp6Ng2Tw/f9ecebac-2952-4763-8e4e-c068e7b98a8a.jpg",
"https://i.ibb.co/Gf9mmY4f/f9f90b3b-4ebb-49dc-844c-cb22d12fd3d1.jpg",
"https://i.ibb.co/20zBBp5V/fd033909-05e2-41b1-b086-b4aea3a2bfa9.jpg",
"https://i.ibb.co/GQSdCdbM/ff7035e5-3582-4c9a-83d8-647838c4a212.jpg",
"https://i.ibb.co/p6nWdwDg/Islamic-Boy-and-Girl-picture.jpg",
"https://i.ibb.co/4RDgs2cy/momiji-nrw-couple-wedding-photography-aylin.jpg",
"https://i.ibb.co/fzg55Y60/Muslim-couple-grass-field-romantic-love.jpg",
"https://i.ibb.co/LXwMBbNB/one-decade-down-and-a-lifetime-to-go.jpg"
   
    ];
      var callback = () => api.sendMessage({body:`Muslim Couple Pictures.These images are collected from the internet by the bot owner 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡.\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
