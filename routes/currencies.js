const express = require('express')
const routes = express.Router()
const axios = require('axios')


routes.get('/dollars', async (req, resp)=>{
  try {
    axios.get('https://www.freeforexapi.com/api/live?pairs=USDMXN') .then(msg => {
      resp.status(200).send({ data: { status: 201, data: msg.data.rates.USDMXN.rate } })
    })
    .catch(err => {
      console.log(err)
    });
    
  } catch (error) {
    console.log(error)
    resp.status(500).send({msg:"Ocurrio un problema en el server"})
  }
})


routes.get('/yuanes', async (req, resp)=>{
  try {
    axios.get('https://www.freeforexapi.com/api/live?pairs=USDCNY') .then(msg => {
      resp.status(200).send({ data: { status: 201, data: msg.data.rates.USDCNY.rate } })
    })
    .catch(err => {
      console.log(err)
    });
    
  } catch (error) {
    console.log(error)
    resp.status(500).send({msg:"Ocurrio un problema en el server"})
  }
})



module.exports = routes