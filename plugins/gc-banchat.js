let handler = async (m, { participants }) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*\n*—◉ 𝚂𝙸 𝙰𝙻 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝙻 𝙲𝙷𝙰𝚃 (#unbanchat) 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙷𝙰𝙲𝙴 𝙲𝙰𝚂𝙾 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂, 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 (#owner) 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝙻 𝙲𝙷𝙰𝚃*')
}
handler.help = ['banchat']
handler.tags = ['group']
handler.command = /^banchat$/i
handler.group = true
handler.admin = true
export default handler
