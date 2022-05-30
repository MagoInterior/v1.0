/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/+5522992224505
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'BF39D349845E',
}

// Other
global.dono = ['5522992224505']
global.premium = ['5522992224505']
global.packname = 'Hisoka Morrow'
global.author = 'Jeff'
global.sessionName = 'session'
global.prefa = ['/','!','.','#',',','_']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Recursos especiais de administração de grupo!',
    botAdmin: 'Bot deve ser administrador primeiro!',
    dono: 'Recursos especiais do proprietário do bot',
    group: 'Recurso usado apenas para grupos!',
    private: 'Recursos usados ​​apenas para bate-papo privado!',
    bot: 'Recursos especiais para usuários de números de bot',
    wait: 'Carregando...',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
