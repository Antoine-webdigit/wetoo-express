const disconnect = (server) => {
  server.data.userCount--
  server.io.emit('disconnect', server.data.userCount)
  return server
}

module.exports = disconnect
