const http = require('http')
const app = require('./app')
const setupIo = require('./io')

const port = process.env.PORT || 3000
const server = http.createServer(app)
const io = require('socket.io')(server)
setupIo(io)
server.listen(port)
console.log('Server started on port : ' + port)

module.exports = server
