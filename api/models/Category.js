const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  }
}, { timestamps: true })

module.exports = mongoose.model('category', categorySchema)