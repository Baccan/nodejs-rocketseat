const express = require('express')
const mongoose = require('mongoose')

// Iniciando App
const app = express()
const port = 3001

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/node-rocketseat-starter', {
  useNewUrlParser: true
})

// Rotas
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Api app listening on port ${port}!`))