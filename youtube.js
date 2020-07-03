const Youtube = require('youtube-node');
const config = require('./yt-config.json');

const youtube = new Youtube();
youtube.setKey(config.key);

function searchVideoUrl(message, queryText) {
    return new Promise((resolve, reject) => {
        youtube.search(`Exercicio em casa para biceps ${queryText}`, 2, (error, result) => {
            if (!error)
                console.log(JSON.stringify(result, null, 2));
            else
                console.log('Deu erro');
        });
    });
}