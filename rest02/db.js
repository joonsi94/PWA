require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections: true,   //대기할지 여부
    connectionLimit: 10,    //최대 연결 수
    queueLimit: 0,  //대기열의 최대 수 작업지시 개수
});

module.exports = "asd";