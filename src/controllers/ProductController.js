const mongoose = require('mongoose')

const Product = mongoose.model('Product');

module.exports = {
  // List
  async index(req, res) {
    // query é utilizado para parametros GET
    const {
      page = 1
    } = req.query;

    // const products = await Product.find()
    // O objeto seria utilizado para passar filtros/wheres
    // page = pagina atual  /  limt = limite por pagina
    const products = await Product.paginate({}, {
      page,
      limit: 10
    })

    return res.json(products)
  },

  // Detalhe
  async show(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  },

  // Create
  async store(req, res) {
    const product = await Product.create(req.body)

    return res.json(product)
  },

  // Update
  async update(req, res) {
    // Sem o new, retorna o produto antes da atualização
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(product)
  },

  // Delete
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id)

    return res.send()
  },
}