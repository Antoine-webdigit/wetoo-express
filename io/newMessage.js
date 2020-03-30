const handle = (server, message) => {
  message = format(message)
  emit(message, server.io)
  server.data.messages.push(message)
  return server
}

const emit = (message, io) => {
  io.emit('newMessage', message)
}

const format = (message) => {
  message.date = new Date()
  return message
}

const newMessage = { handle, emit, format }

module.exports = newMessage
