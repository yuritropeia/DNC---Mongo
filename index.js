const express = require('express')
const userModel = require('./src/model/user')
const familiaModel = require('./src/model/familia')
const { default: mongoose } = require('mongoose')
const app = express()

app.use(express.json())

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

app.get('/familias', async (req, res) => {

    const membros = await familiaModel.find({})
    if (req.query.idade) {
        
        const membrosMaioresdeIdade = await familiaModel.find({}).where('idade').gt(req.query.idade) //método com filtros do url
        //const YuriMaiordeIdade = await familiaModel.find({nome: "Yuri"}).where('idade').gt(req.query.idade) --> além de filtrar, estou selecionando apenas as pessoas com nome Yuri
        //const YuriMaiordeIdade = await familiaModel.find({nome: "Yuri"}).gt('idade', req.query.idade) --> outra maneira, porém sem utilizar o 'where'
        
        return res.status(200).json({ data: membros })

        //para passar o parametro de idade a url ficaria assim: http://localhost:8080/familias?idade=21
        //const membrosMaioresVinteUmAnos = membros.filter(item => item.idade > 21) método js
    }
    
    return res.status(200).json({ data: membros })
})

app.get('/familias/:id', async (req, res) => {
    try {
        const membro = await familiaModel.findById(req.params.id)
        return res.status(200).json({ data: membro })
    }
    catch (error) {
        return res.status(400).json({
            data: [],
            message: "Não foi possível encontrar o ID."
        })
    }
    
})

app.put('/familias/:id', async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({
            data: [],
            message: "Não foi possível encontrar o ID."
        })
    }
    const membro = await familiaModel.updateOne({ _id: req.params.id }, req.body) //caso eu queira excluir uma informação, como por exemplo profissao, posso usar const membro = await familiaModel.updateOne({ _id: req.params.id }, {$unset: {profissao: 1}})
    
    return res.status(200).json({ data: membro })
})

app.delete('/familias/:id', async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({
            data: [],
            message: "Não foi possível encontrar o ID."
        })
    }
    const membro = await familiaModel.deleteOne({ _id: req.params.id }) 
    
    return res.status(200).json({ data: membro })
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})