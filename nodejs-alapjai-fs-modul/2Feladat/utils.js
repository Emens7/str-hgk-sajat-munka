const { access, mkdir, writeFile, copyFile, unlink } = require('fs').promises
const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const util = require('util');

const pipe = util.promisify(pipeline);

/*
const fileHandlerCallback = (err) => {
    if (err) throw err
    console.log(`File process succesfull`)
}

const copyFileWrapper = ({src, dest, callback = fileHandlerCallback} = {}) => {
    copyFile(src, dest, callback)
}

module.exports = { copyFileWrapper };

const readableStream = createReadStream('./views./index.html')


const writeStream = createWriteStream('./views/index.bak')

*/

const copyDeleteFileWrapper = () => {
    access('views')
    .catch( () => mkdir('views'))
    access('index.html')
    .catch( () => mkdir('index.html'))
    .then( () => writeFile('./views/index.html', 'INDEX'))
    .then( () => copyFile('./views/index.html', './views/index.bak'))
    .then( () => {
        //createGzip("./views/index.html.gz")
        const gzip = createGzip();
        const source = createReadStream('./views/index.html')
        const dest = createWriteStream('./views/index.html.gz')
        return pipe(source, gzip, dest);
    })
    .then( () => unlink('./views/index.html'))
    .then( () => unlink('./views/index.bak'))
}

module.exports = { copyDeleteFileWrapper }