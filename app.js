const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');

// Serve static files in the "public" directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

