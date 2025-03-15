const mysql = require('mysql2');

// console.log(mysql);

function people_select() {
    const dbInfo = {
        host: '192.168.0.99',
        user: 'root',
        password: 'rootpassword',
        database: 'js'
    }

    const connection = mysql.createConnection(dbInfo);
    // console.log(connection);

    // DB 연결 시작
    connection.connect();

    connection.query('select * from people', (error, result, fields) => {
        if (error) throw error;
        console.log(result);
    })

    // DB 연결 끊기
    connection.end();
}

module.exports = { people_select }