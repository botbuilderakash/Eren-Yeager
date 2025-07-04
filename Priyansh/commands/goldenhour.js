module.exports.config = {
  name: "goldenhour",
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

"https://i.ibb.co/0pj5yy0w/Aesthetic-Wallpaper-i-Phone-aiwallpaper-aiart.jpg",
"https://i.ibb.co/My0T5Vzj/Sacred-Light-Streams-Golden-sunbeams-pierce.jpg",
"https://i.ibb.co/QFpjBjYT/image.jpg",
"https://i.ibb.co/NgHKT7yN/photo-by-Michael-Matti.jpg",
"https://i.ibb.co/q405zBf/Collection.jpg",
"https://i.ibb.co/kNpj239/Where-the-day-whispers-goodbye-in-golden-hues.jpg",
"https://i.ibb.co/KpfVF1dT/1f251ed1-f08d-4686-8e1e-61179f4bdf1b.jpg",
"https://i.ibb.co/6c8n0sh6/2fd92004-be31-41d5-8f08-c3bc7ad9cebb.jpg",
"https://i.ibb.co/Y7x6sFwM/3f2b776e-5492-44a7-a80b-f8844afba956.jpg",
"https://i.ibb.co/LXjpmqq3/04c30971-4fd6-4854-9cfc-6a3f4be2ebb6.jpg",
"https://i.ibb.co/rKs0fzRr/4b076818-49ec-44f7-b930-208b72b4dd9a.jpg",
"https://i.ibb.co/rGWGTrHb/4c79bdcf-f359-4d37-87ef-24fc3d5d9e56.jpg",
"https://i.ibb.co/67DnnNWb/5bad173f-638d-46bd-a81a-caa567be95e6.jpg",
"https://i.ibb.co/qMMKr4Fk/5be359a8-ca90-4f61-aeb4-40cf3239346d.jpg",
"https://i.ibb.co/nM00syJw/5eb5a770-dacf-4923-8ad4-a3059a1fc669.jpg",
"https://i.ibb.co/b5bt2jRb/06de7cbf-eec5-4f42-b4fc-3cf272aaa058.jpg",
"https://i.ibb.co/fdK0w3vr/6ba2a371-9a66-4391-a1ad-a3e1fcb03f6a.jpg",
"https://i.ibb.co/Jj214v80/6e82b73c-c848-4497-af30-417e0339e4ce.jpg",
"https://i.ibb.co/fzZMqf0B/7acce2c2-7584-41c9-b124-edefabba84c0.jpg",
"https://i.ibb.co/VpLGjhY8/7eeceff5-8b7c-47cd-8f84-d453cb36e7d5.jpg",
"https://i.ibb.co/cKcfPpHB/8c519aa0-6055-4e44-b47c-ec75f11f4abc.jpg",
"https://i.ibb.co/sJkgy9tz/8df5e527-7cf0-4701-9161-0b5a9cccf42a.jpg",
"https://i.ibb.co/VWb2NbyY/8f5f2214-ea93-43fe-a7d5-851ddbb51378.jpg",
"https://i.ibb.co/7tDD1RQN/29ad9fb5-f618-4815-b22e-519ae7ed7591.jpg",
"https://i.ibb.co/0jKP1zMq/40c6467d-818e-4a5c-ad43-12008851969f.jpg",
"https://i.ibb.co/hRPm5s78/63f37f01-5e82-4cc0-b9bb-0ef02c3ee86e.jpg",
"https://i.ibb.co/BHTFHPk3/362e4087-f80f-403c-9dd9-2a71561e8be4.jpg",
"https://i.ibb.co/nVPGzWw/2755a0cf-5137-4957-ac99-ed3159aa2934.jpg",
"https://i.ibb.co/vxNFwYc4/2961f28d-e38d-4f70-a544-80c59e4d8f0b.jpg",
"https://i.ibb.co/GQM0KRrM/09604e2e-882f-4c20-9c7a-64c601ff71b6.jpg",
"https://i.ibb.co/ccNCNWb2/9787d446-178f-4254-9385-5a9f1f976c41.jpg",
"https://i.ibb.co/4w9BwBXM/71586d0b-f149-4043-86c9-5e411b7f6d4d.jpg",
"https://i.ibb.co/p6YXx5Xq/06203572-83d2-4cba-a484-9bfbd148dd9f.jpg",
"https://i.ibb.co/RGB9tDqN/a9a3508d-751b-4e59-9683-deca7ac40da9.jpg",
"https://i.ibb.co/sv0t6Xz6/An-image-depicting-a-serene-and-calm-atmosphere.jpg",
"https://i.ibb.co/m5wXTCgh/autumn-leaves-vibrant-orange-and-gold-marble.jpg",
"https://i.ibb.co/pjKdnCq0/b90a22bd-e4f2-4fb9-8c0d-7ec8626851cd.jpg",
"https://i.ibb.co/pBp13rJ0/b965d9f0-af31-4dfc-9685-3411ff8de6ef.jpg",
"https://i.ibb.co/hxMXZKkv/b40060e2-068a-4d9c-b5c1-faec22bb215c.jpg",
"https://i.ibb.co/n80FKrXN/bb4b4dfd-df0c-403a-ae66-b92a073a2d37.jpg",
"https://i.ibb.co/rVR13ch/Beach-scene-with-flowers-softly-blurred.jpg",
"https://i.ibb.co/pBwcWSjV/bf97ba93-22be-437b-bfb1-56e2231fc610.jpg",
"https://i.ibb.co/1Y8wb8Dz/Bring-warmth-and-serenity-into-your-space-with.jpg",
"https://i.ibb.co/mYYjBPx/c24f6e9e-a0be-427a-af61-9790c0360692.jpg",
"https://i.ibb.co/JjVcSWk6/c40dc76d-bfc2-441e-97d8-438a51b12ac3.jpg",
"https://i.ibb.co/9HZbcQDq/c54ff5fb-28a4-4856-a1d5-1fa7d2536652.jpg",
"https://i.ibb.co/2003FXjn/c581bab5-52d3-4058-97ca-a71f39c1931b.jpg",
"https://i.ibb.co/S4dfBVLh/cb0e46ca-7f74-4e7a-8d36-3c80c5ecc80c.jpg",
"https://i.ibb.co/Cp6dR7c0/d9c486a9-c4ad-4f7f-8929-cb2dd9ac8ccd.jpg",
"https://i.ibb.co/HDBmF3WC/dcfcf545-207c-4c79-9469-f96198bd87f1.jpg",
"https://i.ibb.co/zh9S6Yyd/df028c28-6fc3-4e54-b230-86e7edf072fa.jpg",
"https://i.ibb.co/tRDpP8h/download.jpg",
"https://i.ibb.co/20XSw0bv/e3ade685-441a-4c71-acc9-72679e33ee88.jpg",
"https://i.ibb.co/fzjGdTL7/e385983f-d07a-4844-820e-9ad5fd78860d.jpg",
"https://i.ibb.co/LXF7m3qX/ec18f03b-1223-4b96-b97a-c0ad51092386.jpg",
"https://i.ibb.co/Txhn75xB/Experience-the-magic-of-a-winter-sunset-with-this.jpg",
"https://i.ibb.co/tTks16wD/f33ae5da-f8d5-4663-a007-7d71cf06f3ae.jpg",
"https://i.ibb.co/r8cMj2w/f76f0169-0b88-44ae-a8f8-53f65bddb1d1.jpg",
"https://i.ibb.co/qLcYrNfm/fall.jpg",
"https://i.ibb.co/7Jf0dDS2/Fine-art-photograph-of-flowers-backlit-by-Wilkeson.jpg",
"https://i.ibb.co/Zzm5J1rJ/Flower-in-golden-hour-aesthetic.jpg",
"https://i.ibb.co/DPjYD7Y1/gold-is-the-color-of-the-day.jpg",
"https://i.ibb.co/3yGMDqSw/golden-hour.jpg",
"https://i.ibb.co/8nzD81XY/Golden-Hour-aesthetic-wallpaper-created-with.jpg",
"https://i.ibb.co/TDsQ2Ks6/Golden-hour-magic-right-in-the-heart-of-the-city.jpg",
"https://i.ibb.co/5mSTJwQ/Golden-hour.jpg",
"https://i.ibb.co/M5GpmKn7/Golden-Sunset-Lake-Cute-Aesthetic-Background.jpg",
"https://i.ibb.co/G4KVNDkK/Immerse-yourself-in-the-world-s-most-stunning.jpg",
"https://i.ibb.co/tT92s4Mt/it-s-Sunrise-but-more-like-the-golden-hour.jpg",
"https://i.ibb.co/BKCHh68P/Morning-is-the-most-beautiful-part-of-the-day-and.jpg",
"https://i.ibb.co/d84K1pK/Pin-de-joao-paulino-em-IMAGENS-E-FOTOS-LINDAS-em.jpg",
"https://i.ibb.co/ds0nkcH6/Prompt-magnificent-sunset-on-sandy-coast-golden.jpg",
"https://i.ibb.co/fYSFk6nf/sky-clouds-golden-hour.jpg",
"https://i.ibb.co/7t0V3jGx/Sunset-beach-golden-hour.jpg",
"https://i.ibb.co/cXLD8vpq/Sunset-sky-golden-clouds-red-and-yellow-colors.jpg",
"https://i.ibb.co/mrxxQmr1/Tranonto-sul-mare-golden-hour-digital-camera.jpg",
"https://i.ibb.co/mryjFsZw/traveller-asthetic-wallpapers.jpg",
"https://i.ibb.co/tMc9m8b5/Witness-the-stunning-beauty-of-birds-soaring.jpg",
"https://i.ibb.co/3mrQ9m8N/nt-r-t-rayneslays.jpg"
     
    ];
      var callback = () => api.sendMessage({body:`Random Loli Pic\nNumber of photos: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 
    

}
  
