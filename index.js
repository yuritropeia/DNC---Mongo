const express = require('express')
const userModel = require('./src/model/user')
const familiaModel = require('./src/model/familia')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {

    const users = await userModel.find({})
    return res.status(200).json({ data: users })
})

app.post('/familias', async (req, res) => {
    
    /*
        Método instanciado
        const membro = new familiaModel()
        membro.nome = req.body.nome
        membro.idade = req.body.idade
        membro.profissao = req.body.profissao
        const response = await membro.save()

        Método mais comum
        const response = await familiaModel.create({
            nome: req.body.nome,
            idade: req.body.idade,
            profissao: req.body.profissao
        })
    */
    
    const response = await familiaModel.create({
            nome: req.body.nome,
            idade: req.body.idade,
            profissao: req.body.profissao
        })
    return res.status(200).json({
        data: response
    })
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})