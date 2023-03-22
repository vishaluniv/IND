const mqtt = require('mqtt');
const express = require('express');
const SerialPort = require('serialport/bindings');
const Readline = require('@serialport/parser-readline');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Sensor = require('./models/sensor');
const Lighting = require('./models/lighting');
const Security = require('../api/models/security');
const AirCond = require('./models/acond');
const app = express();
app.use(express.static('public'));
const sport = new SerialPort('COM3', { baudRate: 9600 });
const parser = sport.pipe(new Readline({ delimiter: '\r\n' }));

mongoose.connect('mongodb+srv://vishal4855be21:PvO1yh5WOougtUQ4@cluster0.bvvimlw.mongodb.net/myFirstDatabase', {useNewUrlParser: true, useUnifiedTopology: true });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var pref_d1 = {};
var pref_d2 = {};
var pref_d3 = {};

const port = 5001;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

const client = mqtt.connect("mqtt://broker.hivemq.com:1883", {encoding: 'utf8'});

client.on('connect', () => {
    client.subscribe('/turnLight');
    console.log('mqtt connected');
   
    //testing

    // const name = 'Light3';
    // const room = '11';
    // const floor = '3';

    // // const Sdata = [20,1,40,0];
    // const topic = `/turnLight`;
    // const message = JSON.stringify({ name, room, floor});
  
    // client.publish(topic, message, () => {
    //   console.log('published new message');
    // });
  });

  parser.on('data', (data) => {
    console.log("reading from serial port");
    const topic = '/sensorData';
    let Id = '1';
    let Sdata = [0, 0, 0, 0];
    Sdata = data.split(',').map(parseFloat);
    const message = JSON.stringify({ Id, Sdata });
    client.publish(topic, message, () => {
      console.log('published new message');
    });
  });

  client.on('message', async (topic, message) => {

    if(topic === "/turnScene"){
      console.log(data);
      console.log("scene");

      if(pref_d1.type === '1'){
        try {
          const device = await Lighting.findOne({name: pref_d1.name, floor: pref_d1.floor, room: pref_d1.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,data.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else if(pref_d1.type === '2'){
        try {
          const device = await security.findOne({name: pref_d1.name, floor: pref_d1.floor, room: pref_d1.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,pref_d1.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else if(pref_d1.type === '3'){
        try {
          const device = await AirCond.findOne({name: pref_d1.name, floor: pref_d1.floor, room: pref_d1.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,pref_d1.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      
      if(pref_d1.type === '1'){
        try {
          const device = await Lighting.findOne({name: pref_d1.name, floor: pref_d1.floor, room: pref_d1.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,data.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else if(pref_d2.type === '2'){
        try {
          const device = await Security.findOne({name: pref_d2.name, floor: pref_d2.floor, room: pref_d2.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,pref_d2.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else if(pref_d1.type === '3'){
        try {
          const device = await AirCond.findOne({name: pref_d2.name, floor: pref_d2.floor, room: pref_d2.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,pref_d2.name);
          }
        } catch (err) {
          console.log(err);
        }
      }

      if(pref_d1.type === '1'){
        try {
          const device = await Lighting.findOne({name: pref_d1.name, floor: pref_d1.floor, room: pref_d1.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,data.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else if(pref_d3.type === '2'){
        try {
          const device = await security.findOne({name: pref_d3.name, floor: pref_d3.floor, room: pref_d3.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,pref_d3.name);
          }
        } catch (err) {
          console.log(err);
        }
      }
      else if(pref_d1.type === '3'){
        try {
          const device = await AirCond.findOne({name: pref_d3.name, floor: pref_d3.floor, room: pref_d3.room});
          if(!device){
  
          }
          else{
            device.status = true;
            await device.save();
            console.log("Done Toggle of Device:" ,pref_d3.name);
          }
        } catch (err) {
          console.log(err);
        }
      }

    }

    
    if (topic === '/turnLight') {
      
      const data = JSON.parse(message);
      console.log(data);
      console.log("mhm");

      try {
        const device = await Lighting.findOne({name: data.name, floor: data.floor, room: data.room});
        if(!device){

        }
        else{
          device.status = !device.status;
          await device.save();
          console.log("Done Toggle of Device:" ,data.name);
        }
      } catch (err) {
        console.log(err);
      }
    }

    else if (topic == '/sensorData') {
      const data = JSON.parse(message);
      console.log(data);
      console.log("I am here");
      try {
        const device = await Sensor.findOne({ "Id": data.Id });
        if (!device) {
          const newDevice = new Sensor({
            Id: data.Id,
            sensorData: data.Sdata            
          });
          await newDevice.save();
          console.log("New device created and added to db");
        } else {
          device.sensorData = data.Sdata;
          await device.save();
          console.log("Sensor data updated for existing device in db");
        }
      } catch (err) {
        console.log(err);
      }
    }
  });
  
  
  
  // console.log('Received POST request to /api/lighting');
  // console.log('Id:', 2);
  // console.log('sensorData:', [1,2,3,4]);
  // const newDevice = new Sensor({
  //   Id: 1, sensorData: [1,2,3,4]
  // });
  
  // try {
  //   (async () => {
  //     await newDevice.save();
  //     console.log('Successfully saved new device');
  //   })();
  // } catch (err) {
  //   console.log('Error saving new device:', err);
  // }
  
    // const Id = '3';
    // const Sdata = [2,11,0,20];
    // const topic = `/sensorData`;
    // const message = JSON.stringify({ Id, Sdata});
  
    // client.publish(topic, message, () => {
    //   console.log('published new message');
    // });
  
app.put('/sensor-data', (req, res) => {
    const { Id }  = req.body;
    const Sdata = [1,2,3,4];
    const topic = `/sensorData`;
    const message = JSON.stringify({ Id, Sdata});
  
    client.publish(topic, message, () => {
      res.send('published new message');
    });
  });

  app.post('/mqtt/pref', async (req, res) => {
    const { d1, d2, d3 } = req.body;
    
    console.log('Received POST request to /pref');
    console.log('d1:', d1);
    console.log('d2:', d2);
    console.log('d3:', d3);
  
    pref_d1 = d1;
    pref_d3 = d3;
    pref_d2 = d2;

    // console.log(pref_d1);
  });

app.listen(port, () => { 
    console.log(`listening on port ${port}`);
});
