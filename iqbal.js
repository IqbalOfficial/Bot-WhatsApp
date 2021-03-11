const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys')

//
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const FileType = require('file-type')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const emojiUnicode = require('emoji-unicode')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const fs = require("fs")
const axios = require('axios')
const util = require('util')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const cd = 4.32e+7
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

//
const { mediaa } = require('./menu/media.js')
const { creator, listephoto, listtextpro } = require('./menu/creator.js')
const { fun } = require('./menu/fun.js')
const { informasi } = require('./menu/informasi.js')
const { spam } = require('./menu/spam.js')
const { scrapper } = require('./menu/scrapper.js')
const { encrypt } = require('./menu/encrypt.js')
const { groupp } = require('./menu/group.js')
const { menupremium } = require('./menu/premium.js')
const { others } = require('./menu/others.js')
const { primbon } = require('./menu/primbon.js')
const { ownerrr } = require('./menu/owner.js')
const { antivirtexx } = require('./menu/antivirtex.js')
const { help, bahasa, donasi, limitcount, bottt, listsurah } = require('./menu/help')

const { BarBarApi, ZeksApi, TobzApi, VthearApi, LolApi, Fxc7Api } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const _welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const _badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const randomdilan = JSON.parse(fs.readFileSync('./database/json/dilan.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const premium = JSON.parse(fs.readFileSync('./database/json/premium.json'))

memberLimit = setting.memberlimit
OwnerNumber = setting.OwnerNumber
instagram = setting.instagram
limitt = setting.limitt
botinfo = setting.botinfo
prefix = setting.prefix
name = setting.name
yt = setting.yt
ban = []

//function
const zalgo = require('./Fxc7/zalgo')
const { fetchFxc7, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exif } = require('./lib/exif')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, banner, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Iqbal\n'
            + 'ORG:Owner Rck8;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281315995628:+62 81315995628\n'
            + 'END:VCARD'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}

function addMetadata(packname, author) {
				if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' Fxc7';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}

const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)
		}

const limitAdd = (sender) => {
		let position = false
		Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
		position = i 
		}
	}
)
		if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
		}
	} 
const getAllPremiumUser = () => {
		const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
		})
		return array
		}
const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return premium[position].expired 
	}
} 
const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		premium.splice(position, 1)
		fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium)) 
		}
	}, 1000)
}

async function starts() {
	const iqbal = new WAConnection()
	iqbal.logger.level = 'warn'
	console.log(banner.string)
	iqbal.on('qr', () => {
		lolcatjs.fromString('[SYSTEM] SCAN THIS QR CODE...')
	})

	fs.existsSync('./iqbal.json') && iqbal.loadAuthInfo('./iqbal.json')
	iqbal.on('connecting', () => {
		start('2', 'Connecting...')
	})
	iqbal.on('open', () => {
		success('2', 'Connected:)')
	})
	await iqbal.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./iqbal.json', JSON.stringify(iqbal.base64EncodedAuthInfo(), null, '\t'))

	iqbal.on('group-participants-update', async (anu) => {
		if (!_welkom.includes(anu.jid)) return
		try {
			const mdata = await iqbal.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await iqbal.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
				}
				teks = `@${num.split('@')[0]} \nWelcome Di Group *${mdata.subject}*\nJangan Lupa Intro!!`
				let buff = await getBuffer(ppimg)
				iqbal.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await frhan.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]} IRENE MISS YOU:D`
				let buff = await getBuffer(ppimg)
				iqbal.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	}
)

		iqbal.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	}
)

	iqbal.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = iqbal.contacts[nameReq] != undefined ? iqbal.contacts[nameReq].vname || iqbal.contacts[nameReq].notify : undefined
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			const FXC7 = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const txt = mek.message.conversation
			const isCmd = body.startsWith(prefix)
			iqbal.chatRead(from)
			
			mess = {
				wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				success: 'Berhasil! ',
				levelon: 'leveling udah on nih ayo tingkatkan level dengan cara aktif di group',
				leveloff: 'sayang sekali leveling off gak seru ahk',
				levelnoton: 'Yah sayang sekali leveling belum di aktifkan ayo kak! lapor ke owner untuk mengaktifkannya dengan cara !lapor bug',
				levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					premium: 'Maaf kak perintah ini hanya untuk user premium! ❌',
					mod: 'Maaf kak fitur ini untuk user mods iqbal',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					ownerG: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					ownerB: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					daftarB: `──「 BELUM VERIVIKASI 」──\nHalo kak kamu belum verify!\nverify dulu kak di bot iqbal... \n\nCommand : ${prefix}verify`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
				}
			}
			const botNumber = iqbal.user.jid
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await iqbal.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? _welkom.includes(from) : false 
			const isAnime = isGroup ? _anime.includes(from) : false
			const isNsfw = isGroup ? _nsfw.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false 
			const isBadWord = isGroup ? _badword.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender) || isOwner 
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
			const reply = (teks) => {
				iqbal.sendMessage(from, teks, text, {quoted:mek})
		}
			const sendMess = (hehe, teks) => {
				iqbal.sendMessage(hehe, teks, text)
		}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? iqbal.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : iqbal.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
		}
	const costum = (pesan, tipe, target, target2) => {
			iqbal.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = limitt - lmt.limit
			if (limitCounts <= 0) return iqbal.sendMessage(from,`Limit request anda sudah habis\n`, text, { quoted: mek})
			iqbal.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : mek})
			found = true 
			}
		}
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
			iqbal.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : mek})
			}
		} 
			
			//funtion limited
const isLimit = (sender) =>{ 
			if (isOwner && isPrem) {return false;}
			let position = false
			for (let i of _limit) {
			if (i.id === sender) {
			let limits = i.limit
			if (limits >= limitt ) {
			position = true
			reply('*Limit Anda Sudah Habis*')
			return true 
			} else {
			_limit
			position = true
			return false 
			}
		}
	}
			if (position === false) {
const obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
			return false 
			}
		}

			expiredCheck()
			var premi = '*NOT PREMIUM*'
			if (isPrem) {
			premi = '*YES PREMIUM*'
			} 
			if (isOwner) {
			premi = '*UNLIMITED PREMIUM*'
			}
			var Simihh = 'OFF'
			if(isSimi) {
			Simihh = 'ON'
			}
			var Welcomee = 'OFF'
			if (isWelkom) {
			Welcomee = 'ON'
			}
			var ModeAnime = 'OFF'
			if (isAnime) {
			ModeAnime = 'ON'
			}
			var Nsfww = 'OFF'
			if (isNsfw) {
			Nsfww = 'ON'
			}
			var BadWordd = 'OFF'
			if (isBadWord) {
			BadWordd = 'ON'
			}
			var AntiLinkk = 'OFF'
			if (isAntiLink) {
			AntiLinkk = 'ON'
			}
			var AntiVirtexx = 'OFF'
			if (isAntiVirtex) {
			AntiVirtexx = 'ON'
			}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			let authorname = frhan.contacts[from] != undefined ? frhan.contacts[from].vname || frhan.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			
			switch(command) { 
			case 'menu':
			case 'help':
			if (isBanned) return reply(mess.only.benned)
				uptime = process.uptime()
				user.push(sender)
				costum(help(prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal(), groupName, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx), text)
			break 
			default:
					if (body.startsWith(`${prefix}${command}`)) {
					reply(`Maaf kak, Command Salah Coba Periksa Kembali`)
				}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[IQBAL]','aqua'), 'Command Tidak Terdaftar', color(sender.split('@')[0]))
					}
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()