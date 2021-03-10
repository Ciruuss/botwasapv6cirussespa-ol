const a = '```'

exports.wait = () => {
	return`* 「ESPERAR」 PROCESANDO *`
}

exports.succes = () => {
	return`*「 Éxitoso 」*`
}

exports.lvlon = () => {
	return`* 「HABILITAR」 NIVELAR *`
}

exports.lvloff = () => {
	return`* 「DESHABILITAR」 NIVELAR *`
}

exports.lvlnul = () => {
	return`* SU NIVEL AÚN ESTÁ VACÍO *`
}

exports.lvlnoon = () => {
	return`* NIVEL GRUB NO ACTIVADO *`
}

exports.noregis = () => {
	return`*「 REGISTRARSE 」*\n\n*como registrarse ${prefix}NOMBRE|EDAD* \n*ejemplo ${prefix}Ciruuss|15*`
}

exports.rediregis = () => {
	return`* 「YA REGISTRADO」 *\n\n* Ya estás registrado en la base de datos de bot *`
}

exports.stikga = () => {
	return`* yah falló intentar repetir en un rato *`
}

exports.linkga = () => {
	return`*lo siento, el enlace no es válido*`
}

exports.groupo = () => {
	return`*「SOLO GRUPO」*`
}

exports.ownerb = () => {
	return`*「SOLO PROPIETARIO BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO PROPIETARIOS DEL GRUPO」*`
}

exports.admin = () => {
	return`*「SOLO ADMIN DEL GRUPO」*`
}

exports.badmin = () => {
	return`*「BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ESTA DESACTIVADO*`
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*Formato incorrecto / texto en blanco*`
}

exports.clears = () => {
	return`*borrar todo, éxito*`
}

exports.pc = () => {
	return`*「REGISTRO」 *\n\npara saber si se ha registrado, por favor revise el mensaje que le envié \n\nNOTE:/n*si no ha recibido un mensaje. significa que no ha guardado su número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「DATOS DEL PAÍS」 *\n\nya está registrado con los datos\n\n┏━⊱nombre\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱edad\n┗⊱${umurUser}\n┏━⊱tiempo de registro\n┗⊱${time}\n\n┏━❉*NS*❉━\n┣⊱${serialUser}\n┗⊱NOTA: no olvide este número porque es importante`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}*no encontrado\intente escribir *${prefix}menú*`
}

exports.owneresce = (pushname) => {
	return`*lo siento, pero ${pushname} no es la secuencia de comandos del propietario*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Lo sentimos, el nivel de ${pushname} no es suficiente *\n\n* ┏⊱nivel: ${getLevelingLevel(sender)}*\n*┣⊱ tipo de comando: ${command}*\n*┗⊱nivel condicional: ${aha}*\n\n_NOTE: CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Lo sentimos, el nivel de ${pushname} no es suficiente *\n\n* ┏⊱nivel: ${getLevelingLevel(sender)}*\n*┣⊱ tipo de comando: ${command}*\n*┗⊱nivel condicional: ${ahb}*\n\n_NOTE: CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Lo sentimos, el nivel de ${pushname} no es suficiente *\n\n* ┏⊱nivel: ${getLevelingLevel(sender)}*\n*┣⊱ tipo de comando: ${command}*\n*┗⊱nivel condicional: ${ahc}*\n\n_NOTE: CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Lo sentimos, el nivel de ${pushname} no es suficiente *\n\n* ┏⊱nivel: ${getLevelingLevel(sender)}*\n*┣⊱ tipo de comando: ${command}*\n*┗⊱nivel condicional: ${ahd}*\n\n_NOTE: CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Lo sentimos, el nivel de ${pushname} no es suficiente *\n\n* ┏⊱nivel: ${getLevelingLevel(sender)}*\n*┣⊱ tipo de comando: ${command}*\n*┗⊱nivel condicional: ${ahe}*\n\n_NOTE: CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Lo sentimos, el nivel de ${pushname} no es suficiente *\n\n* ┏⊱nivel: ${getLevelingLevel(sender)}*\n*┣⊱ tipo de comando: ${command}*\n*┗⊱nivel condicional: ${ahf}*\n\n_NOTE: CHAT / SIEMPRE ACTIVADO PARA OBTENER XP_`

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process) => { 
	return `
${a}❏ Sobre el Usuario${a}
 ${a}│ Nombre : ${pushname}${a}
 ${a}│ Numero : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Dinero : Rp${uangku}${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Nivel : ${getLevelingLevel(sender)}${a}
 ${a}│ Rol : ${role}${a}
 ${a}╰ Registro de usuario : ${_registered.length}${a}

 *${prefix}info*
 *${prefix}donación*
 *${prefix}dueño*

${a}*❏MAKER MENU*${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏Menus Divertidos${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}╰•${prefix}happymod${a} 
 
${a}❏MUTUO${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏MENÚ DE MEDIOS${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏Canciones${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏NSFW${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏LÍMITE Y DINERO${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏Menu De Grupo${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏Herramientas${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏ALMACENAMIENTO EN LA NUBE${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏MENÚ PROPIETARIO${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}
