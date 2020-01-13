const mysql = require('mysql2/promise');
// async function connection() {
//     const pool = mysql.createPool({
//         host: 'localhost',
//         user: 'root',
//         password:'123456',
//         database: 'racek',
//         waitForConnections: true,
//         connectionLimit: 10,
//         queueLimit: 0
//     });
//     return pool
// }
async function connection() {
    // const pool = mysql.createPool({
    //     host: 'localhost',
    //     user: 'root',
    //     password:'123456',
    //     database: 'racek',
    //     waitForConnections: true,
    //     connectionLimit: 10,
    //     queueLimit: 0
    // });
    const pool = mysql.createPool({
        host: '155.138.204.10',
        user: 'root',
        password:'1234546',
        database: 'appcurrency',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    return pool
}
module.exports = {
    connection
}