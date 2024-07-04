const TelegramApi = require('node-telegram-bot-api')
const express = require('express');

require('dotenv').config();

const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true })
const webUrl = process.env.WEB_APP_URL;

const app = express();
const PORT = process.env.EXPRESS_PORT | 7000

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

app.get('/', (req, res) => {
    res.send('Bot is running...')
})

app.listen(PORT, () => {
    console.log('Server for bot is started...')
})

console.log('Bot and server initialized successfully');