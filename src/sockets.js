const logger = require('./logger')

module.exports = function (io) {
  io.on('connection', (socket) => {
    socket.on('chatmessage', message => {
      logger.info(`received message: ${message}`)
    })
  })
}
