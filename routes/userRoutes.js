const express = require('express');
const apUser = express.Router();
const userController = require('../controllers/userController');

apUser.get('/list', function(req, res){
    res.json( { message:'Lista de usuarios', datos:'datos de usuarios' } );
});
apUser.post('/crear', userController.crear);
apUser.put('/update', function(req, res){
  res.json( { message:'Actualizar usuarios', datos:'datos de usuarios' } );
});

apUser.delete('/borrar', function(req, res){
  res.json( { message:'Eliminar usuarios', datos:'datos de usuarios' } );
});

module.exports = apUser;