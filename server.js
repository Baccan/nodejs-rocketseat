const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando App
const app = express()
const port = 3001

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/node-rocketseat-starter', {
  useNewUrlParser: true
})
requireDir('./src/models')

const Product = mongoose.model('Product');

// Rotas
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'https://github.com/facebook/react-native'
  })

  res.send('Hello World!')
})
app.listen(port, () => console.log(`Api app listening on port ${port}!`))