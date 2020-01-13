const express = require('express')
const cors = require('cors')
const app = express();
var bodyParser = require('body-parser')
require('dotenv').config()
const payments= require('./routes/payments')
const withdrawal = require('./routes/withdrawal')
const summary = require('./routes/summary')
const currency = require('./routes/currencies')


app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(cors())
app.use('/v1/payments', payments)
app.use('/v1/withdrawal', withdrawal)
app.use('/v1/summary', summary)
app.use('/v1/currency', currency)



app.listen(process.env.PORT, ()=>{
  console.log(`Server inicializado ${process.env.PORT}`)
})