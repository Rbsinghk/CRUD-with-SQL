const mysql = require('mysql');
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud',
    multipleStatements: true
})
connect.connect((e) => {
    if (e) {
        console.log('Sql is Not Connected ')
    } else {
        console.log("Sql is Connected")
    }
})
module.exports = connect