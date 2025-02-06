const mongoose = require('mongoose')
const conn = require('../../config/mongo')

conn()

const familiaSchema = mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
})

const familiaModel = mongoose.model('familias', familiaSchema)

module.exports = familiaModel