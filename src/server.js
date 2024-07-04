const express = require('express');
const bot = require('./bot');

require('dotenv').config();

const app = express();

const PORT = process.env.EXPRESS_PORT | 7000

app.get('/', (req, res) => {
    res.send('Bot is running...')
})

app.listen(PORT, () => {
    console.log('Server for bot is started...')
})