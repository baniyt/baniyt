/*
 𝐑𝐄𝐍𝐀𝐌𝐄 𝐁𝐘 𝐊𝐄𝐈𝐒𝐄𝐑𝐙,🐉
 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐊𝐞𝐢𝐬𝐞𝐫𝐳𝐒𝐭𝐚𝐫
𝐦𝐞𝐧𝐮 𝐲𝐚𝐧𝐠 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐝𝐢 𝐭𝐚𝐦𝐛𝐚𝐡𝐢𝐧 𝐨𝐥𝐞𝐡 𝐤𝐞𝐢𝐬𝐞𝐞𝐫𝐳
-𝙸𝚗𝚟𝚒𝚜𝚒𝚋𝚕𝚎 𝙱𝚞𝚐
-𝙲𝚛𝚊𝚜𝚑 𝚄𝙸
-𝚒𝚗𝚜𝚝𝚊𝚕𝚕 𝚙𝚊𝚗𝚎𝚕
-𝚖𝚎𝚗𝚞 𝚙𝚊𝚗𝚎𝚕
 𝚍𝚕𝚕𝚕
 
 𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙺𝚎𝚒𝚜𝚎𝚛𝚣𝚂𝚝𝚊𝚛

*/
require("./module")

global.owner = "6283188140830" //PAKE NO LU BIAR BISA ADD AKSES
//======================================
global.namabot = "'͟͟͞͞🩸⃟༑⌁⃰𝐊𝐞𝐢𝐬𝐞𝐫𝐳 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🐉" //NAMA BOT GANTI
//======================================
global.nameCreator = "𝐊𝐞𝐢𝐬𝐞𝐫𝐳𝐖𝐚𝐧𝐠𝐬𝐚𝐟𝐟" //NAMA CREATOR GANTI AJA
//======================================
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
//======================================
global.antilink = true //NOT CHANGE / JANGAN GANTI
//======================================
global.versisc = '2.0.0' //NOT CHANGE / JANGAN GANTI
//======================================
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
//======================================
global.domain = 'https://vvip-keiserz.private-panel.online' //DOMAIN 1
//======================================
global.apikey = 'ptla_HDAA07tpGoCk09LZTMbePt6FPrXLwlde1OCMlUbSu7T' // PLTA 1
//======================================
global.capikey = 'ptlc_3215srTKIRGjGpgVb2jFF5TRaj4ROKd78WSnvdvv73q' //PLTC 1
//======================================
global.eggsnya = '15' //ID EGGS 1
//=====================================
global.location = '1' //SEMUA LOCATION SAMA AJA BIAR G EROR
//======================================
global.imageurl = 'https://files.catbox.moe/yowhfl.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
//======================================
global.isLink = 'https://chat.whatsapp.com/LlYgiEBRDpaKhAeF1f2xeC' ///GANTI MENGGUNAKAN LINK GRUBMU YA
//======================================
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.imgmenu = fs.readFileSync("./Media/Menu.jpg")
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.linksaluran = ""
global.linkyt = 'https://www.youtube.com/@KeiserzStar'
global.idsaluran = "12345678889@newsletter"
global.simbol = 'ダ'
global.simbol1 = '❖'
global.simbol2 = '✦'
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "𝘉𝘰𝘵 𝘉𝘺 𝐊𝐞𝐢𝐬𝐞𝐫𝐳𝐖𝐚𝐧𝐠𝐬𝐚𝐟𝐟𝐝𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫" //GANTI AJ
global.author = "𝐊𝐞𝐢𝐬𝐞𝐫𝐳𝐖𝐚𝐧𝐠𝐬𝐚𝐟𝐟𝐝𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})