let handler = async (m, { conn, args }) => {
  let users = args.join` `.split`,`.map(v => v.replace(/[^0-9]/g/, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  await conn.groupAdd(m.chat, user)
conn.reply(m.chat, 'Falha ao adicionar contato, talvez porque é privado',m)
}
handler.command = /^(add|\+)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

