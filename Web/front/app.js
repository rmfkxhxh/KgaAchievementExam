const express = require('express');
const axios = require('axios')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(bodyParser.json())

app.use(cors({
  origin : "http://localhost:3000",
  credentials: true,
}))

app.get('/', function(req, res){
  axios.get("http://localhost:3000/getCookie")
  .then(req.cookies);

  //fetch("http://localhost:4000/getCookie").then(req => req.text()).then(console.log);
});

app.listen(4000);