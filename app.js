const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

// Agrega las rutas para manejar los pasos 1, 2 y 3

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// ...

app.post('/paso2', (req, res) => {
    const curso = req.body.curso;
    res.render('paso2', { curso });
  });
  
  app.post('/paso3', (req, res) => {
    const curso = req.body.curso;
    const modulos = req.body.modulos;
    const pago = req.body.pago;
  
    // Realiza los cálculos y muestra el detalle y total a pagar en la vista
    let total = 0;
    if (curso === 'Java') {
      total = 1200 * modulos.length;
    } else if (curso === 'PHP') {
      total = 800 * modulos.length;
    } else if (curso === '.NET') {
      total = 1500 * modulos.length;
    }
  
    if (pago === 'efectivo') {
      total -= total * 0.1; // Aplicar descuento del 10%
    }
    console.log(curso)
    res.render('paso3', { curso, modulos, pago, total });
  });
  
  // ...
  