'use strict';

require('dotenv').config();     // not taken in class
// declaring a variable to use express library
const express = require('express');
const { request } = require('http');  // not taken in class
const { response } = require('express');
// initializing the server
const app = express();   // could replace "app" with "server" but you need to modify the whole code
// declare a port
const PORT = process.env.PORT || 3000;
// to let users access the static files (the website itself)
// locally will be http://localhost:3000/index.html     to access index.html in public folder

app.use(express.static('./public'));
// "/hello" is called "rout" when added to the end of the url the corresponding function will work and do something
// here it will send(display) "Hello" alone in the page
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});
// not taken in class
app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
  };
  response.status(200).json(airplanes);
});
// to view "you are awsome" when route is test
app.get('/test', (request, response) =>{
  response.send('you are awsome');
});

// to view an array of objects called cars when route is carsdata
app.get('/car', (request, response) =>{
  let cars=[
    {name: 'BMW'},
    {name: 'Ford'},
    {name: 'Kia'}
  ];
  response.json(cars);
});

// when the rout does not exist (wrong url) it will run the corresponding function
app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));
// to let the server listen to the port(take and give info and data) and execute a function
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
