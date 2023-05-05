import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(process.env.PORT, () => {
  console.log('El servidor está funcionando en el puerto ', process.env.PORT);
  console.log("process.env:", process.env)
});