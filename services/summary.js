const moment = require('moment')
const query = require('../repository/query/index')

async function get (obj){
  let sql = `SELECT currency, sum(amount)as total FROM payments p group by currency`
  return await query.execute(sql)
}
async function getWithdrawal (obj){
  let sql = `SELECT currency, sum(amount)as total FROM withdrawal p group by currency`
  return await query.execute(sql)
}


async function getTransationsPayments (obj){
  let sql = `SELECT * FROM payments p`
  return await query.execute(sql)
}

async function getTransationsWithdrawal (obj){
  let sql = `SELECT * FROM withdrawal p `
  return await query.execute(sql)
}

module.exports = {
  get,
  getTransationsPayments,
  getTransationsWithdrawal,
  getWithdrawal
}