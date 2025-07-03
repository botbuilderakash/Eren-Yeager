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

"https://i.ibb.co/JR9mSfTg/1-Guardados-X.jpg",
"https://i.ibb.co/mVtxxj0M/4-X.jpg",
"https://i.ibb.co/n8jw7GTj/tsugu-gumi-on-X.jpg",
"https://i.ibb.co/1fKgXYDm/image.jpg",
"https://i.ibb.co/Q39VMkRY/0b37ed5b-3207-420a-9fc6-b5a1a6f0c9b9.jpg",
"https://i.ibb.co/Nd9DTPg0/ff6abcb9-0ce2-4d45-bda0-12f28df57cb4.jpg",
"https://i.ibb.co/F4VYWmv8/0de5f452-6f58-4832-94e6-6c006d013b3a.jpg",
"https://i.ibb.co/CsWq4QDt/0e74cdb2-b14d-40be-a8fa-53646b6c69e2.jpg",
"https://i.ibb.co/pv0ZhT53/2a15b911-098a-406a-bfb1-2a842882c38f.jpg",
"https://i.ibb.co/xtfxRyVD/2af7b44c-3871-45aa-af21-47c553f342dc.jpg",
"https://i.ibb.co/PZK2S8vJ/3f7be89f-7506-4afe-83bf-4efb73feeb8b.jpg",
"https://i.ibb.co/mCDC5yFJ/5d3b197e-2a87-4735-a528-0b4e964b665c.jpg",
"https://i.ibb.co/JwBRzNHn/6a7e269d-d8b3-4273-8c3e-8163c8393997.jpg",
"https://i.ibb.co/RpPSYPhn/7ab2c630-d1e9-4596-9fd7-2ba743b5e63f.jpg",
"https://i.ibb.co/sd5C9qLb/7ada0820-cd4c-4748-9cd3-3bd250e5a07b.jpg",
"https://i.ibb.co/sdsvzdgQ/7d1074f4-83a5-4ab6-9417-3622d4a53f28.jpg",
"https://i.ibb.co/HszRsfX/8a95c7aa-0cc8-4505-85ad-1f1a2403802f.jpg",
"https://i.ibb.co/j9v8bML3/8ec4af27-7f0c-4cb6-be47-e50c50817a21.jpg",
"https://i.ibb.co/VYDXkjbF/9b7ab290-5b4c-44a6-b4b7-dc7f30dab9d7.jpg",
"https://i.ibb.co/7xNBXd97/9d786dd5-c6c0-46a0-a068-2ec17d80c4ef.jpg",
"https://i.ibb.co/fdXyYjJ7/11f4dda4-8b9d-43d9-8067-0bf534a1890e.jpg",
"https://i.ibb.co/Dfw1kmc9/20f6c802-9fa0-404e-ba09-bfa484a1a6fe.jpg",
"https://i.ibb.co/5WzGMC2Z/36c625c5-274f-4483-9afc-35eb579d6cce.jpg",
"https://i.ibb.co/5gsRy69F/38db0a00-9c45-4e8e-a894-29cae4dad780.jpg",
"https://i.ibb.co/S4FmdT29/63ff533d-a96f-46fc-90d1-41d91ca2a2c2.jpg",
"https://i.ibb.co/pv14SHVc/68ef86e7-9a2a-4ec8-9efd-bb233e78de42.jpg",
"https://i.ibb.co/DPV2cjCg/70b236d9-ce60-4b26-8891-d39c02627964.jpg",
"https://i.ibb.co/DgkRVpKq/85e609fc-bdbb-48e0-b4f2-f953585aa714.jpg",
"https://i.ibb.co/KxYB6Bn4/212befaa-931f-4d9b-9eb3-7851097c07ae.jpg",
"https://i.ibb.co/Pz12RXcR/0258a290-04a6-4c7d-b266-46f8dd933787.jpg",
"https://i.ibb.co/NdKhL2LQ/771a3bb2-0c99-4353-99d6-d68a2686fb09.jpg",
"https://i.ibb.co/B5c0B5xY/793d4080-1c52-480d-b259-439c8507688e.jpg",
"https://i.ibb.co/fjpDh0X/8728280e-6432-42a9-8c52-15799abae70a.jpg",
"https://i.ibb.co/QGcQSm9/2878d7ec-6bb5-4480-92e9-0fda027e2f97.jpg",
"https://i.ibb.co/1GnNsZPT/4108d2a4-4e7b-4aea-9d91-1bc46e05d326.jpg",
"https://i.ibb.co/8L9fzk03/5496ad9d-7115-483e-be2b-9fb4824906d7.jpg",
"https://i.ibb.co/twpvw7WK/6088a4d6-537e-4208-afc4-b1f2a38cb467.jpg",
"https://i.ibb.co/39xVJPMS/9154b183-691a-4d5e-acd9-d82ebf1b7df3.jpg",
"https://i.ibb.co/zHRMLG4r/9342a89c-4ad3-4930-be4f-24f8e4d6fee0.jpg",
"https://i.ibb.co/VpJGDhs7/393e94b3-1351-4c7e-95bb-f6e3841adbd7.jpg",
"https://i.ibb.co/5WpJnBqK/17071e4f-6b48-4529-8e44-61acacb955de.jpg",
"https://i.ibb.co/27tFc7xC/91332f50-d40a-4d8c-bb97-3e4a276d6f09.jpg",
"https://i.ibb.co/0y1mzJxN/365066ca-1581-4fa5-9115-db45c4f2b3c3.jpg",
"https://i.ibb.co/1txY4ZjH/535504e1-8eee-482d-8191-b34851f7bf5b.jpg",
"https://i.ibb.co/NdsvzP3Y/78101277-4519-467e-b9e9-43d7d3e1e2c9.jpg",
"https://i.ibb.co/3mjpJrh1/Ackerman-Mikasa-mikasa-attackontitan-1.jpg",
"https://i.ibb.co/jPyQfV05/Anime-Attack-On-Titan.jpg",
"https://i.ibb.co/mCt9RHnH/b3c2526a-27d5-47f4-975c-cb8fe98dbd14.jpg",
"https://i.ibb.co/qFyFM9p4/baf3f249-cbfb-412c-98c6-c50abb8f6591.jpg",
"https://i.ibb.co/przZVh45/bb868fe5-2d54-42fc-b250-57d6924b670d.jpg",
"https://i.ibb.co/LhCGkJd7/be46b269-1d60-48cf-8c1a-ab737d433bb4.jpg",
"https://i.ibb.co/LXLwK5vB/be590987-fc32-408e-9f60-c2a310568f19.jpg",
"https://i.ibb.co/xKMTP5R4/c1c1de0e-2f90-4435-bbce-c1c05e0e1822.jpg",
"https://i.ibb.co/WqLv5NX/c8f50bc3-acb4-4ae9-937f-d7158e2c275f.jpg",
"https://i.ibb.co/7qyXWpR/c92f0107-a3d9-4e8d-bacc-9dfe4b2b2c35.jpg",
"https://i.ibb.co/7tJYhc2C/c156e6c8-acd5-47e3-a25f-c520853b1598.jpg",
"https://i.ibb.co/WvHB1LNF/cda893bf-80fb-4f2e-a8b8-59ca3ec88c6e.jpg",
"https://i.ibb.co/4gsQ5Pb8/cda36539-71e1-408e-bbf5-83a2e38ed018.jpg",
"https://i.ibb.co/Nnjg3Krs/d7fd5958-a6d6-4705-88d1-c7cb68a9a6e1.jpg",
"https://i.ibb.co/Vp0RPHzN/d9be6065-564b-4967-9d75-897ab73f88d4.jpg",
"https://i.ibb.co/fYV7vJWc/da9349e5-950b-4b92-a8f5-d3d5c2ebf22c.jpg",
"https://i.ibb.co/23DFzb4v/dcdd032b-8de8-4af0-8910-2133407714ea.jpg",
"https://i.ibb.co/VccYpzys/e3efae06-f7ef-4d50-b15c-8af6e7c2606b.jpg",
"https://i.ibb.co/bMhhNXLy/e4c6731c-ff16-4f8c-989a-efcef8c1d1b8.jpg",
"https://i.ibb.co/SDtCTg4g/e7ff8fd1-bff5-47f8-b04b-5f96fdb3b17d.jpg",
"https://i.ibb.co/7dBJKMYh/f84e0185-a3b7-4041-b06d-4bf0ae3c474f.jpg",
"https://i.ibb.co/TsMwF89/f7a42972-a4a0-4164-af0f-705254a3fedc.jpg",
"https://i.ibb.co/LzhtSPrj/f2431141-2e9a-4df4-b74e-95399d0cd700.jpg",
"https://i.ibb.co/v4Y2qKWK/fdbcb56a-b790-43eb-bb62-f6f6836bdd3b.jpg",
"https://i.ibb.co/Vc7kwsjN/ff12999e-bf35-4279-829b-e969958ad657.jpg",
"https://i.ibb.co/GQZKQgbY/Mikasa-Ackerman-The-Attack-of-Titans.jpg",
"https://i.ibb.co/BVT4KJyV/X.jpg",
"https://i.ibb.co/kgMGYctG/3e73efcb-8421-4191-8c00-d1ec982f0748.jpg",
"https://i.ibb.co/ZC04qpD/68ef86e7-9a2a-4ec8-9efd-bb233e78de42.jpg",
"https://i.ibb.co/Jjq7vgbX/771a3bb2-0c99-4353-99d6-d68a2686fb09.jpg",
"https://i.ibb.co/MjTPwq1/17071e4f-6b48-4529-8e44-61acacb955de.jpg",
"https://i.ibb.co/Jjh8TFk4/46155c89-060f-432b-986d-90293f8a8c7e.jpg",
"https://i.ibb.co/GQZKQgbY/Mikasa-Ackerman-The-Attack-of-Titans.jpg" 
   
    ];
      var callback = () => api.sendMessage({body:`Random Loli Pic\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
