
const config = require('../config')
const {cmd , commands} = require('../command')



cmd({
    pattern: "test2",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 

 
 const botname = "𝐄𝐍𝐂𝐑𝐘𝐏𝐓𝐎 𝐌𝐃"; //add your name
 const ownername = "𝐃𝐔𝐃𝐀𝐒"; // add your name
 const encrypto = {
 key: { 
  remoteJid: 'status@broadcast', 
  participant: '0@s.whatsapp.net' 
   }, 
message:{ 
  newsletterAdminInviteMessage: { 
    newsletterJid: '120363270086174844@newsletter', //add your channel jid
    newsletterName: "𝐈𝐂𝐘 𝐁𝐎𝐓", //add your bot name
    caption: botname + ` 𝐁𝐘 ` + ownername, 
    inviteExpiration: 0
  }
 }
}



let des = `*👋 Hello ${pushname}*`
return await conn.sendMessage(from,{
    image: {url: `https://files.catbox.moe/703kuc.jpg`},
    caption: des
},{quoted: encrypto})

// {quoted: mek} ඔයාලගෙ ඔතන 👈 ඔහොම ඇත්තෙ එක උඩ විදිහට හදා ගන්න..👆

}catch(e){
console.log(e)
reply(`${e}`)
}
})
