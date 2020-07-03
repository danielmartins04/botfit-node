const Youtube = require('youtube-node');
const config = require('./yt-config.json');

const youtube = new Youtube();
youtube.setKey(config.key);

youtube.search('Exercicio em casa para biceps', 2, (error, result) => {
    if (!error)
        console.log(JSON.stringify(result, null, 2));
    else
    console.log('Deu erro');
});