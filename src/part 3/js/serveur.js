const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.status(200).send('Hello world');
});

app.post('/repeat-cat-name', (req, res) => {
  const message = req.body.message;
  if (!message) {
    res.status(400).send('Bad Request');
  } else {
    res.send(message);
  }
});

app.put('/repeat-header', (req, res) => {
  const message = req.headers['x-message'];
  if (!message) {
    res.status(400).send('Bad Request');
  } else {
    res.send(message);
  }
});

// Lancer le serveur
app.listen(3000, () => {
  console.log('Le serveur écoute sur le port 3000');
});


//  CURLS DE TEST:
// Curl GET:
// curl http://localhost:3000/hello

// Curl POST :
// curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, world!"}' http://localhost:3000/repeat-cat-name

// Curl PUT :
// curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, world!"}' http://localhost:3000/repeat-cat-name

