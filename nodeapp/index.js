const express = require ('express');
const  dbmysql= require ('./database/dbmysql.js')
const  routerProgramas = require ('./routes/programaRoutes.js')
const routerLibrerias  = require ( './routes/libreriaRoutes.js')

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});


app.use('/programas', routerProgramas)
app.use('/librerias', routerLibrerias)
app.use((req, res, next) => {
   res.status(404).send("Pagina 404")
  //res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(process.env.PORT, () => {
  console.log('El servidor está funcionando en el puerto ', process.env.PORT);
});


dbmysql.authenticate()
.then( ()=>console.log("Conexion OK MySQL"))
.catch( (err)=>console.log("Error conexion MySQL:", err))