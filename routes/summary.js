const express = require('express')
const routes = express.Router()
const services = require('../services/summary')


routes.get('/', async (req, resp)=>{
  try {
    const rows = await services.get()
    resp.status(200).send({ data: { status: 201, data: rows } })
  } catch (error) {
    console.log(error)
    resp.status(500).send({msg:"Ocurrio un problema en el server"})
  }
})

routes.get('/transactions', async (req, resp)=>{
  try {
    const rowsPayments = await services.getTransationsPayments()
    const rowsWithdrawal = await services.getTransationsWithdrawal()
    console.log(rowsPayments)
    let data = rowsPayments.concat(rowsWithdrawal)
    resp.status(200).send({ data: { status: 201, data: data } })
  } catch (error) {
    console.log(error)
    resp.status(500).send({msg:"Ocurrio un problema en el server"})
  }
})

module.exports = routes