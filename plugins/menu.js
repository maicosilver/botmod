let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
🤖 [BOT Q SO FALA OI] 🤖

Hi, ${name} 👋
Exp: ${exp}

Cara Tambah XP:
+1 Exp/pesan biasa
+10 Exp/command

📟 Waktu: ${time}
📆 Tanggal: ${week}, ${date}

${more.repeat(1000)}
╠═════○〘 Menu 〙○═══
║
╠═〘 Xp 〙 ═
╠➥ ${_p}leaderboard [jumlah user]
║
╠═〘 Comando 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
╠➥ ${_p}?
║
╠═〘 Quotes 〙 ═
╠➥ ${_p}bucin
╠➥ ${_p}pantun
╠➥ ${_p}murothal
╠➥ ${_p}quran
║
╠═〘 Kerang 〙 ═
╠➥ ${_p}apakah
╠➥ ${_p}kapankah
╠➥ ${_p}kapan
║
╠═〘 Others 〙 ═
╠➥ ${_p}qr <teks>
╠➥ ${_p}stiker (caption)
╠➥ ${_p}stiker <url>
╠➥ ${_p}toimg (reply)
╠➥ ${_p}ssweb <url>
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pencarian>
╠➥ ${_p}googlef <pencarian>
╠➥ ${_p}readmore <teks>|<sembunyi>
╠➥ ${_p}quran
╠➥ ${_p}modApk
║
╠═〘 Grupo 〙 ═
╠➥ ${_p}add [55xxxxxxxxxxx]
╠➥ ${_p}promote [@marcarmembro]
╠➥ ${_p}demote [@marcaradm]
╠➥ ${_p}linkgrup
╠➥ ${_p}pengumuman [texto]
╠➥ ${_p}hidetag [texto]
╠➥ ${_p}listonline
╠➥ ${_p}kick @Removermembro
╠➥ ${_p}grouplist
║
╠═〘 EXPERIMENTAL 〙 ═
╠➥ ${_p}jadibot [kode login jika ada / kosongin]
╠➥ ${_p}berhenti
╠➥ ${_p}getcode
║
╠═〘 OWNER 〙 ═
╠➥ ${_p}bcgc <teks>
╠➥ ${_p}setmenu <teks>
╠➥ ${_p}deletechat (chat grup)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat grup)
╠➥ ${_p}mutechat group
║
╠═〘 IKLAN 〙 ═
╠➥ Instagram: off
╠➥ Github: https://github.com/
║
╠═〘 Info Bot 〙 ═
╠➥
╠═════
║ Advanced:
║  > return m
║
╠═〘 BOT Q SO FALA OI 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
