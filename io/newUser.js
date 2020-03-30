const newUser = (server) => {
  server.data.userCount++
  server.io.emit('newUser', server.data.userCount)
  return server
}

module.exports = newUser
