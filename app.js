const http   = require('http')
const rp     = require('request-promise')
const config = require('./config/master')


let sphynx = (req, res, next) => {
    let token = req.headers['x-auth']

    let options = {
        uri: config.target.uri,
        headers: {
            "x-auth": token
        }
    }
    
    rp(options).then((user) => {
        if(!user) {
            res.send('Usuário não encontrado')
        }

        req.user = user 
        next()

    }).catch((e) => {
        res.status(500).send({message: 'Ocorreu um erro'})
    })
}

module.exports = {sphynx}
