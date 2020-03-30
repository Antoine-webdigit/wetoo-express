const sendExistingMessages = (server) => {
  server.client.emit('existingMessages', server.data.messages)
}

module.exports = sendExistingMessages
