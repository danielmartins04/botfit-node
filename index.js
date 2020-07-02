const TelegramBot = require('node-telegram-bot-api');

const token = '1326050646:AAEA0pLp45K4G5tTY36ri9ZiC38H4HEw9C4';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem');
});