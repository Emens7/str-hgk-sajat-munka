const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');
const path = require('path');

// Osztály a transformáláshoz
class TitleCaseStream extends Transform {
    constructor() {
        super();
    }


    // A transform metodus felel az átalakításért
    _transform(chunk, enc, done) {
        // A chunk.toString azért kell, mert Buffert kapunk, ami nem karaktereket, hanemnbájtokat tartalmaz.
        const output = chunk.toString('utf8'.split(' '))
        .map(word => {
            return `${word[0].toUpperCase()}${word.slice(1)}`;
        })
        .join(' ');
        this.push(output);
        done();
    };
}

const rStream = createReadStream(
    path.join(__dirname, 'csip-csip.txt'), {
        encoding: 'utf8',
        highWaterMark: 1024
    }
);

const wStream = createWriteStream(
    path.join(__dirname, 'csip-csip-Copy.txt')
)

wStream.on('finish', () => {
    console.log('File transform successful');
});

rStream.pipe(new TitleCaseStream()).pipe(wStream)

module.exports = TitleCaseStream