const express = require('express');
const api = express();
const userRoutes = require('./routes/userRoutes');



api.use('/users', userRoutes);


 /* api.post('/pruebas', function(req,res){
    req.body
}) */
 

module.exports = api;