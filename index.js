const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config()
const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true })
const webUrl = 'https://photostudio-booking.netlify.app/'

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if(text === '/start'){
        bot.sendMessage(chatId, 'Кнопка щоб забронювати студію нижче:', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Забронювати студію', web_app: {url: webUrl}}]
                ]
            }
        })
    }
})