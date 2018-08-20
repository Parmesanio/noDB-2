const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = 4000;


app.use(bodyParser.json());



app.listen(PORT, () => console.log(`noTriviaDB server running on port ${PORT}`))