const moment = require('moment')
const query = require('../repository/query/index')

async function post (obj){
  let sql = `INSERT INTO withdrawal (currency, amount, created_at) 
  VALUES ('${obj.currency}', '${obj.quantity}', '${moment().format('YYYY-MM-DD')}')`
  return await query.execute(sql)
}


module.exports = {
  post
}