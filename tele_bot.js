require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELE_TOKEN, { polling: true });
const chatId = process.env.TELE_CHATID; // chat with myself

module.exports.bot = bot;
module.exports.chatId = chatId;
