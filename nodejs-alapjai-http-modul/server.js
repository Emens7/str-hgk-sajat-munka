const http = require('http')
const siteRouter = require('./router/site.router')

const port = process.env.PORT || 8080

const printRequestInfo = (req) => {
   const date = new Date().toLocaleDateString('hu-HU');
   console.log(`Date: ${date} Url: ${req.url} Method: ${req.method}`);
}

http.createServer((req, res) => {
   printRequestInfo(req);
   siteRouter[req.url] 
   ? siteRouter[req.url](res)
   : siteRouter['/404'](res)
})
.on('error', err => console.log(`Server error: ${err.message}`))
.on('listening', () => console.log(`Server is run http://127.0.0.1:${port}`))
.listen(port)

