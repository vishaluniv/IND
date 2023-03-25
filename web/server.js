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

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://code.highcharts.com/highcharts.js","https://maps.googleapis.com", "https://code.jquery.com", "https://cdnjs.cloudflare.com", "https://stackpath.bootstrapcdn.com", "https://fonts.googleapis.com"],
      connectSrc: ["'self'", "http://18.116.43.166:5000", "https://18.116.43.166:5000","mongodb+srv://your-mongodb-url"],
      frameAncestors: ["'none'"],
      "Cross-Origin-Embedder-Policy": "require-corp",
      imgSrc: ["'self'", "data:"],
      styleSrc: ["'self'","https://maxcdn.bootstrapcdn.com", "https://stackpath.bootstrapcdn.com", "https://fonts.googleapis.com", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://maxcdn.bootstrapcdn.com","https://stackpath.bootstrapcdn.com","https://fonts.gstatic.com", "https://fonts.googleapis.com", "data:"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    },
    reportOnly: false
  }
}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


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




