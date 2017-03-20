const express = require('express');                       // require express module
const path = require('path');                             // require path *core module

const app = express();                                    // creating variable app and running express function
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.get('/', function(req, res) {                         // creating a get route with home URI '/'
//  res.send('Hello Express!');                             // sending text back and route is requested
//});


//app.get('/about', (req, res)=> {                          // creating an about route (using ES6 arrow syntex)
//  res.send('<h1> About </h1>');                           // text send when this route is requested
//});
//
//app.get('/user/:name', (req, res)=>{                      // creating a user route with dynamic routing
//  let user = req.params.name;                             // accessing params given on req
//  res.send('<h1>' + user + '</h1>');                      // sending dynamic data back
//});


// set static path

app.use(express.static(path.join(__dirname, 'public')));  // rendering html file at request

app.get('/users', (req, res)=> {                          // sending json data
  let users = [{
    first_name: "John",
    last_name: "Doe",
    age: 29,
    job_title: "FullStack Web Developer"
  }, 
  {
    first_name: "Jane",
    last_name: "Doe",
    age: 23,
    job_title: "Something"
  },
  {
    first_name: "John2",
    last_name: "Doex",
    age: 291,
    job_title: "Developer"
  }];
  res.json(users);
});

app.get('/downloads', (req, res)=> {                       // creating a download route to allow allow any type of file
  res.download(path.join(__dirname, '/downloads/dummy-data.xml')); //res *download then path name
});

app.post('/subcribe', (req, res)=> {
  let name=req.body.name;
  let email=req.body.email;
  console.log(name + ' has subcribed! with email: ' + email);
});

app.listen(3000, function() {                             // app server listening to defined port 3000
  console.log('server started on port 3000');             // message printed when server is run
});