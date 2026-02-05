// import { app } from './routes/car.routes';

// const express = require('express');
// const PORT = 3000;

// app.use(express.json());


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });   












const express = require('express');
const db = require('./db/db');

const app = express();
const PORT = 3000;

app.use(express.json());

// GET all cars
app.get('/cars', (req, res) => {
  db.all('SELECT * FROM cars', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// GET a car
app.get('/cars/:id', (req, res) => {
  const id = req.params.id;
  db.all('SELECT * FROM cars WHERE id = ?', [id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});   

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});   