const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      tC = require('./controllers/triviaController'),
      PORT = 4000;


app.use(bodyParser.json());

//POST
app.post('/api/questionslist', tC.create);

app.listen(PORT, () => console.log(`noTriviaDB server running on port ${PORT}`))