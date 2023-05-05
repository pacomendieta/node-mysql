import express from 'express';
import dbmysql from './database/dbmysql.js'
import routerProgramas from './routes/programaRoutes.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});


app.use('/programas', routerProgramas)

app.listen(process.env.PORT, () => {
  console.log('El servidor está funcionando en el puerto ', process.env.PORT);
});


dbmysql.authenticate()
.then( ()=>console.log("Conexion OK MySQL"))
.catch( (err)=>console.log("Error conexion MySQL:", err))