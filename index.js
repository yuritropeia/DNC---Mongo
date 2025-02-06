const express = require('express')
const userModel = require('./src/model/user')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    return res.status(200).json({
        data: await userModel.find({})
    })
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})