const express = require('express');
const fs = require('fs')
const helmet = require("helmet");
const https = require('https')
var sslOptions = {
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem'),
passphrase: 'qwerty'
};
var app = express();
app.use(helmet());

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

var server = https.createServer(sslOptions, app).listen(port, function(){
  console.log("Express server listening on port " + port);
  });

  app.get('/', function (req, res) {
    res.sendFile(`${base}/welcome.html`);
  });

  app.get('/add-device', function (req, res) {
    res.sendFile(`${base}/add_d.html`);
  });
  app.get('/d_data', function (req, res) {
    res.sendFile(`${base}/d_data.html`);
  });

  app.get('/pref', function (req, res) {
    res.sendFile(`${base}/pref.html`);
  });

  app.get('/remove_d', function (req, res) {
    res.sendFile(`${base}/remove_d.html`);
  });

  app.get('/lighting', function (req, res) {
    res.sendFile(`${base}/lighting.html`);
  });

  app.get('/acond', function (req, res) {
    res.sendFile(`${base}/acond.html`);
  });

  app.get('/security', function (req, res) {
    res.sendFile(`${base}/security.html`);
  });




