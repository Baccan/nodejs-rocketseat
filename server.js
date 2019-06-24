const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando App
const app = express()
app.use(express.json())
app.use(cors())

const port = 3001

// Iniciando DB
mongoose.connect('mongodb://192.168.99.100:27017/node-rocketseat-starter', {
  useNewUrlParser: true
})
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(port, () => console.log(`Api app listening on port ${port}!`))