const pool = require('../connection/index')

async function select(sql) {
  try {
    let cn = await pool.connection()
    const [rows, fields] = await cn.query(sql)
    cn.end()
    return rows
  } catch (err) {
    throw new Error(err)
  }
}
async function insert(sql) {
  try {
    let cn = await pool.connection()
    const [rows, fields] = await cn.query(sql)
    cn.end()
    return rows
  } catch (err) {
    throw new Error(err)
  }
}
async function execute(sql) {
  try {
    let cn = await pool.connection()
    const [rows, fields] = await cn.query(sql)
    cn.end()
    return rows
  } catch (err) {
    throw new Error(err)
  }
}

// async function executePromise(sql) {
//   try {
//     let cn = await pool.connection()
//     return await cn.query(sql)
//   } catch (err) {
//     throw new Error(err)
//   }
// }

module.exports = {
  select,
  insert,
  execute
  //   executePromise
}
