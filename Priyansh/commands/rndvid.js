const fs = require("fs-extra");
const axios = require("axios");
const request = require("request");

module.exports.config = {
  name: "rndvid",
  version: "1.1",
  hasPermission: 0,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "Send random video",
  commandCategory: "media",
  usages: "/rndvid",
  cooldowns: 10
};

const videoLinks = [
  "https://files.catbox.moe/lkqead.mp4",
  "https://files.catbox.moe/jdjphr.mp4",
  "https://files.catbox.moe/roo7ya.mp4",
  "https://files.catbox.moe/jzzzhf.mp4"
];

module.exports.run = async ({ api, event }) => {
  const link = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  const filePath = __dirname + "/cache/rndvid.mp4";

  const callback = () => {
    api.sendMessage({
      body: `🎥 এই ভিডিওগুলো 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡 ইন্টারনেট থেকে সংগ্রহ করেছেন`,
      attachment: fs.createReadStream(filePath)
    }, event.threadID, () => fs.unlinkSync(filePath));
  };

  request(link).pipe(fs.createWriteStream(filePath)).on("close", callback);
};
