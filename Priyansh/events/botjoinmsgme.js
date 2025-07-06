module.exports = {
  config: {
    eventName: "log:subscribe",
    credits: "𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡",
    version: "1.1",
    description: "Notify admin when bot joins, welcome users, blacklist group auto-leave"
  },

  run: async function ({ api, event }) {
    const adminUID = "61575289283943"; // তোমার UID
    const threadID = event.threadID;

    // Bot নিজে গ্রুপে add হলে
    const isBotAdded = event.logMessageData?.addedParticipants?.some(
      p => p.userFbId == api.getCurrentUserID()
    );

    if (isBotAdded) {
      const groupName = event.threadName || "Unnamed Group";

      // 🔥 যদি blacklist করা group হয়
      const blacklistGroupIDs = ["1234567890", "999999999"]; // ইচ্ছেমতো ID বসাও
      if (blacklistGroupIDs.includes(threadID)) {
        api.sendMessage("⛔ Sorry, this group is blacklisted. Leaving now.", threadID, () => {
          api.removeUserFromGroup(api.getCurrentUserID(), threadID);
        });
        return;
      }

      // ✅ Admin কে notify পাঠাও
      const message = 
`📥 Bot Added to New Group!

➤ Group Name: ${groupName}
➤ Thread ID: ${threadID}
➤ Added By: https://facebook.com/${event.author}

~ 𝐀𝐡𝐚𝐬𝐚𝐧𝐮𝐥 𝐇𝐚𝐪𝐮𝐞 𝐀𝐤𝐚𝐬𝐡`;

      return api.sendMessage(message, adminUID);
    }

    // ✅ User যোগ হলে (Bot না)
    const joinedUsers = event.logMessageData?.addedParticipants || [];
    for (let user of joinedUsers) {
      if (user.userFbId !== api.getCurrentUserID()) {
        const name = user.fullName || "New User";
        const welcomeMsg = `👋 Welcome ${name}!\n\nHope you enjoy your time here!`;

        api.sendMessage(welcomeMsg, threadID);
      }
    }
  }
};
