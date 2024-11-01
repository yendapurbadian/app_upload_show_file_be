import mysql from 'mysql'

var db = mysql.createPool(
    {
        host : '127.0.0.1',
        port: '3306',
        database: 'dbupload',
        user: 'root',
        password: '',
        charset: 'utf8mb4'
    }
)

module.exports = db