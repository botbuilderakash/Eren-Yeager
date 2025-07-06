const fs = require("fs-extra");
const request = require("request");
const moment = require("moment-timezone");

const videoLinks = [
  "https://files.catbox.moe/lkqead.mp4",
  "https://files.catbox.moe/jdjphr.mp4",
  "https://files.catbox.moe/roo7ya.mp4",
  "https://files.catbox.moe/jzzzhf.mp4"
];

module.exports.config = {
  name: "autovid",
  version: "2.0",
  hasPermission: 2,
  credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
  description: "সঠিক সময়ে ভিডিও পাঠানো হয় সকল গ্রুপে",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

const allowedHours = [10, 12, 14, 16, 18, 20, 21]; // BD time

module.exports.run = async ({ api }) => {
  const now = moment().tz("Asia/Dhaka");
  const hour = now.hour();

  if (!allowedHours.includes(hour)) return console.log(`[autovid] ${hour}:00 সময় ভিডিও পাঠানোর অনুমতি নেই।`);

  const filePath = __dirname + "/cache/autovid.mp4";
  const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

  request(randomLink).pipe(fs.createWriteStream(filePath)).on("close", async () => {
    const allThreads = await api.getThreadList(100, null, ["INBOX"]);

    for (const thread of allThreads) {
      api.sendMessage({
        body: `🎥 এই ভিডিওগুলো 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡 ইন্টারনেট থেকে সংগ্রহ করেছেন`,
        attachment: fs.createReadStream(filePath)
      }, thread.threadID);
      await new Promise(res => setTimeout(res, 2000)); // Rate limit avoid
    }

    fs.unlinkSync(filePath);
  });
};
