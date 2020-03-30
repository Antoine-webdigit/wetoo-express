const express = require('express')
const app = express()

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  if (error.message === 'Not found') {
    return res.status(error.status).json({ error: { message: error.message } })
  }
  console.log(error)
  res.status(500).json({ error: { message: 'Service unavailable' } })
})

module.exports = app