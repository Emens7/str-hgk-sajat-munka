const { access, mkdir, writeFile} = require('fs').promises

const createStarterTemplate = () => {
    access('views')
    .catch( () => mkdir('views'))
    access('controllers')
    .catch( () => mkdir('controllers'))
    access('routers')
    .catch( () => mkdir('routers'))
    .then( () => writeFile('./views/index.html', 'Index'))
    .then( () => writeFile("./controllers/site.controller.js", 'Controller'))
    .then( () => writeFile('./routers/site.router.js', 'Router'))
    .then( () => writeFile('app.js', 'App'))
    .catch( (err) => console.log('\x1b[31m', err.message))
}

module.exports = createStarterTemplate