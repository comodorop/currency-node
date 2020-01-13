const express = require('express')
const routes = express.Router()
const services = require('../services/payments')


routes.post('/', async (req, resp)=>{
  let {body} = req
  try {
    const rows = await services.post(body)
    resp.status(200).send({ data: { status: 201, msg: 'Payment apply' } })
  } catch (error) {
    console.log(error)
    resp.status(500).send({msg:"Ocurrio un problema en el server"})
  }
})


module.exports = routes