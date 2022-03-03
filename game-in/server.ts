export{}

const express = require('express');
const cors = require('cors');

const app = express();

const { auth } = require('express-openid-connect');

const port : number = 8080

app.get('/', (req, res) => {
    res.json("Hello World")
})

app.listen(3000, ()=> console.log(`Listening on port ${port}`))


const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: '6I2ePLioTkFLHjWBFpNv0h372l6ZywnX',
    issuerBaseURL: 'https://dev-y4mz30ly.us.auth0.com',
    secret: '374eb7bb9b0e180fe0f578258f989f27724e537d27a569f335352e239300d3c0'
  };
  
  app.use(auth(config));
  
  
  app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
  });