const mongoose = require('mongoose');
const mongoUrl = require('../utils/env');

mongoose.connect(mongoUrl.mongo);

mongoose.connection.on('open',()=>{
    console.log('connected to Database :-)');
 })

 module.exports = mongoose;
