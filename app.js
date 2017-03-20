const express = require('express');                       // require express module

const app = express();                                    // creating variable app and running express function


app.get('/', function(req, res) {                         // creating a get route with home URI '/'
  res.send('Hello Express');                              // sending text back and route is requested
});


app.listen(3000, function() {                             // app server listening to defined port 3000
  console.log('server started on port 3000');             // message printed when server is run
});