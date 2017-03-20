const express = require('express');                       // require express module

const app = express();                                    // creating variable app and running express function


app.get('/', function(req, res) {                         // creating a get route with home URI '/'
  res.send('Hello Express!');                             // sending text back and route is requested
});


app.get('/about', (req, res)=> {                          // creating an about route (using ES6 arrow syntex)
  res.send('<h1> About </h1>');                           // text send when this route is requested
});

app.get('/user/:name', (req, res)=>{                      // creating a user route with dynamic routing
  let user = req.params.name;                             // accessing params given on req
  res.send('<h1>' + user + '</h1>');                      // sending dynamic data back
})

app.listen(3000, function() {                             // app server listening to defined port 3000
  console.log('server started on port 3000');             // message printed when server is run
});