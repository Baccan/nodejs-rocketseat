const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando App
const app = express()
const port = 3001

// Iniciando DB
mongoose.connect('mongodb://192.168.99.100:27017/node-rocketseat-starter', {
  useNewUrlParser: true
})
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(port, () => console.log(`Api app listening on port ${port}!`))