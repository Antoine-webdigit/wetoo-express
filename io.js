const newUser = require('./io/newUser')
const newMessage = require('./io/newMessage')
const disconnect = require('./io/disconnect')
const sendExistingMessages = require('./io/sendExistingMessages')
const data = {
  userCount: 0,
  messages: []
}
const setupIo = io => {
  io.on('connection', client => {
    let server = { data, io, client }
    server = newUser(server)
    sendExistingMessages(server, data.messages)
    client.on('postMessage', (message) => {
      server = newMessage.handle(server, message)
    })
    client.on('disconnect', () => {
      server = disconnect(server)
    })
  })
}

module.exports = setupIo
