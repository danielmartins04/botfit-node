const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');

const token = '1326050646:AAEA0pLp45K4G5tTY36ri9ZiC38H4HEw9C4';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    if(dfResponse.intent === 'Treino especifico') {
        
    }

    bot.sendMessage(chatId, dfResponse.text);
});