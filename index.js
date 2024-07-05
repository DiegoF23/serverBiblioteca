require('dotenv').config();
const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const port = process.env.PORT || 3000 ;
const usuariosRoutes = require('./routes/usuariosRoutes')

// Middleware para parsear JSON y datos URL-encoded



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`)
});

app.use('/', usuariosRoutes);



// app.get('/libros',(req,res) => {
//     db.query('SELECT * FROM libros', (error,resultado) =>{
//         if (error){
//             res.status(500).json({error:error});
//             return;
//         }
//         res.json(resultado);
//     });
// });

// app.get('/prestamos',(req,res) => {
//     db.query(
// "select P.id as 'CODIGO', U.nombre as 'Nombre de Usuario', L.titulo as 'Libro', P.fecha_prestamo as 'Fecha de Prestamo', P.fecha_devolucion as 'Fecha de Devolucion' from prestamos as P  inner join usuarios as U ON P.usuario_id = U.id inner join libros as L on P.libro_id = L.id;", (error,resultado) =>{
//         if (error){
//             res.status(500).json({error:error});
//             return;
//         }
//         res.json(resultado);
//     });
// });
// app.get('/autores',(req,res) => {
//     db.query('SELECT * FROM autores', (error,resultado) =>{
//         if (error){
//             res.status(500).json({error:error});
//             return;
//         }
//         res.json(resultado);
//     });
// })


