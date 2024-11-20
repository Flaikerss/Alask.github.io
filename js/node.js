import { Telegraf, Markup } from 'telegraf'

const token = '7253299607:AAG9VjK5sWjVFxrjCH0CJFCUkpg1wSv9pzw'
const webAppUrl = 'https://google.com'
const bot = new Telegraf(token)
 
bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать',
        Markup.keyboard([Markup.button.webApp('отправить',webAppUrl)])
    )
})

bot.launch