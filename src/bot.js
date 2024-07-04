const TelegramApi = require('node-telegram-bot-api')

require('dotenv').config()

const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true })
const webUrl = process.env.WEB_APP_URL

bot.setMyCommands([
    { command: '/start', description: 'Запуск бота' }
])

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Кнопка щоб забронювати студію нижче 👇', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📸 Забронювати студію 📸', web_app: { url: webUrl } }]
            ]
        }
    })
})

module.exports = bot;