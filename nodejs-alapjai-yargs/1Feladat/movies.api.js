const { readFile, writeFile } = require('fs').promises

const MoviesApi = (path, prop) => ({
    async get () {
        const dataSting = await readFile(path)
        const data = JSON.parse(dataSting)[prop]
        return data
    },

    async save (data) {
       await writeFile(path, JSON.stringify({ [prop]: data }))

    }
})

module.exports = MoviesApi