const axios = require('axios')
const config = require('./config/master')
const http = require('http')

const sphynx = async (req, res, next) => {
  try {
    const token = req.headers['x-auth']
    const user = await axios({
      method: 'get',
      url: config.target.uri,
      headers: {
        'x-auth': token
      }
    })

    req.user = user
    next()
  } catch (e) {
    res.status(500).send({message: 'An error occured', e})
  }
}

module.exports = { sphynx }
