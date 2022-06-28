const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/',(req, res) => {
  res.send(`
  <h1>Seminario de analisis y desarrollo de sistemas</h1>
  <h2>Examen Teorico - Practico</h2>
  <h3>Nombre: Kevin Hernán Gómez Malchic</h3>
  <h3>Carnet: 0908-14-12551</h3>
  `);
});

app.listen(port, () => {
  console.log('Api corriendo en puerto: ' + port);
})

routerApi(app);

