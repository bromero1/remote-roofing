const express = require('express');
const bodyParser = require('body-parser');

// Database
const db = require('./config/db');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

// Index route
app.get('/', function (req, res) {
    res.send('<h1 style="text-align: center">Remote Roofing Backend test</h1>')
  })


 app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));