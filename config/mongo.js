const mongoose = require('mongoose')

let conn

const connection = () => {
    if (conn) {
        return conn
    }

    return conn = mongoose.connect('mongodb://127.0.0.1:27017/local') //caso o modelo tenha login e senha, passar dessa forma mongoose.connect('mongodb://username:password@127.0.0.1:27017/local')
}

module.exports = connection