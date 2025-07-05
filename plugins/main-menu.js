const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function getHarareTime() {
    return new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Harare',
        hour12: true,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}

async function getBotVersion() {
    try {
        if (!config.REPO) throw new Error('config.REPO is not defined');
        const rawUrl = config.REPO.replace('github.com', 'raw.githubusercontent.com') + '/main/package.json';
        const { data } = await axios.get(rawUrl);
        return data.version || '1.0.0';
    } catch (error) {
        console.error("Version check error:", error);
        return 'Ultimate';
    }
}

const botname = "𝐄𝐍𝐂𝐑𝐘𝐏𝐓𝐎 𝐌𝐃";
const ownername = "𝐃𝐔𝐃𝐀𝐒";
const imageUrl = config.BOT_IMAGE || 'https://camo.githubusercontent.com/0965bd555f54ab382c6270592e4856142514efde045ac1c4bfe66b567f60c097/68747470733a2f2f692e6962622e636f2f513979643974522f494d472d32303235303131372d5741303039372e6a7067';

cmd({
        pattern: "menu",
        desc: "encrypto menu",
        alias: "help",
        category: "menu",
        react: "🥷🏻",
        filename: __filename
    },
    async (conn, mek, m, context) => {
        try {
            const { from, reply, sender } = context;
            await conn.sendPresenceUpdate('composing', from);

            const version = await getBotVersion();
            const totalCommands = Array.isArray(commands) ? commands.length : Object.keys(commands).length;

            const dec = `\`\`\`${config.BOT_NAME}\`\`\`

⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴅᴜᴅᴀꜱ (🇿🇦)*
▧ *ᴛɪᴍᴇ* : ${getHarareTime()} ⌛
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *${version}*
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
▧ *ᴄᴏᴍᴍᴀɴᴅs* : ${totalCommands}
⟣──────────────────⟢

> ＥＮＣＲＹＰＴＯ - ＭＤ - ＢＯＴ

⟣──────────────────⟢
${readMore}

🧠 *AI MENU*:
⬡ ${config.PREFIX}gpt | ${config.PREFIX}bot | ${config.PREFIX}ai | ${config.PREFIX}gpt4 | ${config.PREFIX}gemini | ${config.PREFIX}dalle | ${config.PREFIX}vision

📥 *DOWNLOADER*:
⬡ ${config.PREFIX}play | ${config.PREFIX}ytmp3 | ${config.PREFIX}ytmp4 | ${config.PREFIX}tiktok | ${config.PREFIX}mediafire | ${config.PREFIX}pinterest | ${config.PREFIX}instagram

🔍 *SEARCH*:
⬡ ${config.PREFIX}spotify | ${config.PREFIX}movie | ${config.PREFIX}recipe | ${config.PREFIX}wiki | ${config.PREFIX}weather | ${config.PREFIX}npm

🧪 *CONVERTERS*:
⬡ ${config.PREFIX}toaudio | ${config.PREFIX}tovideo | ${config.PREFIX}sticker | ${config.PREFIX}attp | ${config.PREFIX}removebg | ${config.PREFIX}tiny | ${config.PREFIX}translate

👑 *OWNER*:
⬡ ${config.PREFIX}setbotname | ${config.PREFIX}setownername | ${config.PREFIX}shutdown | ${config.PREFIX}restart | ${config.PREFIX}ping | ${config.PREFIX}update

👥 *GROUP*:
⬡ ${config.PREFIX}kick | ${config.PREFIX}add | ${config.PREFIX}promote | ${config.PREFIX}demote | ${config.PREFIX}close | ${config.PREFIX}open | ${config.PREFIX}hidetag

📌 *INFO*:
⬡ ${config.PREFIX}alive | ${config.PREFIX}menu | ${config.PREFIX}about | ${config.PREFIX}botinfo | ${config.PREFIX}repo | ${config.PREFIX}version

💥 *ENCRYPTED TOOLS*:
⬡ ${config.PREFIX}obfuscate | ${config.PREFIX}encrypt | ${config.PREFIX}decode | ${config.PREFIX}qr | ${config.PREFIX}readqr

🔞 *NSFW*:
⬡ ${config.PREFIX}nude | ${config.PREFIX}sex | ${config.PREFIX}anal | ${config.PREFIX}kiss | ${config.PREFIX}xvideo

🧰 *ADMIN TOOLS*:
⬡ ${config.PREFIX}setwelcome | ${config.PREFIX}setgoodbye | ${config.PREFIX}antilink | ${config.PREFIX}antiviewonce | ${config.PREFIX}autoreply

━━━━━━━━━━━━━━━━━━━━
> ＭＡＤＥ ＢＹ ＤＵＤＡＳ
━━━━━━━━━━━━━━━━━━━━
        `;

            await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '🍁『 𝐄𝐍𝐂𝐑𝐘𝐏𝐓𝐎 𝐌𝐃 』🍁 ',
                        serverMessageId: 143
                    }
                }
            }, { quoted: mek });

            await conn.sendPresenceUpdate('paused', from);

        } catch (e) {
            console.error(e);
            context.reply(String(e));
        }
    });