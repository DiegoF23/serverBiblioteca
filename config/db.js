const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'biblioteca'
});

connection.connect((error)=>{
    if (error) {
        console.error('Error conectando a la base de datos: ',error.stack);
        return;
    }
    console.log('Conectado a la BD MYSQL como id ' + connection.threadId);

});

module.exports = connection;