require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'biblioteca' 
}); 


connection.connect((error)=>{
    if (error) {
        console.error('Error conectando a la base de datos: ',error.stack);
        return;
    }
    console.log('Conectado a la BD MYSQL como id ' + connection.threadId);

});

module.exports = connection;