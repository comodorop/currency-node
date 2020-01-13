const express = require('express')
const routes = express.Router()
const services = require('../services/summary')


routes.get('/', async (req, resp)=>{
  try {
    const rows = await services.get()
    const rowss = await services.getWithdrawal()
    
    let currency = [{
      currency: 'BitCoins',
      total: '0'
    },
    {
      currency: 'Dolares',
      total: '0'
    },
    {
      currency: 'Pesos',
      total: '0'
    },{
      currency: 'Yuans',
      total: '0'
    }]
   

    for(let x = 0; x < rows.length; x++){
      if(rows[x].currency === 'BitCoins'){
        currency[0].total = rows[x].total
      }
      if(rows[x].currency === 'Dolares'){
        currency[1].total = rows[x].total
      }
      if(rows[x].currency === 'Pesos'){
        currency[2].total = rows[x].total
      }
      if(rows[x].currency === 'Yuans'){
        currency[3].total = rows[x].total
      }
    }

    for(let x = 0; x < rowss.length; x++){
      if(rowss[x].currency === 'BitCoins'){
        currency[0].total = currency[0].total -  rowss[x].total
      }
      if(rowss[x].currency === 'Dolares'){
        currency[1].total = currency[1].total - rowss[x].total
      }
      if(rowss[x].currency === 'Pesos'){
        currency[2].total = currency[2].total - rowss[x].total
      }
      if(rowss[x].currency === 'Yuans'){
        currency[3].total = currency[3].total - rowss[x].total
      }
    }

    console.log(currency)


    resp.status(200).send({ data: { status: 201, data: currency } })
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