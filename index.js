const express = require('express')
const mysql = require('mysql2/promise');
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    var connection = await mysql.createConnection({
        host: "sql9.freemysqlhosting.net",
        user: "sql9620952",
        password: "JlGvzTsmJm",
        database: 'sql9620952'
    })

    const [rows] = await connection.execute('SELECT * FROM usuarios')

    connection.end();
    res.send(rows)
})

app.listen(port, () => {
    console.log('Meu servidor está na porta 3000')
})