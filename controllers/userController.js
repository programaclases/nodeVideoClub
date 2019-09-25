const user = require('../models/userModel');

function listar(req,res){

    

}

function crear(req,res){
    
    //return res.status(200).json({'datos':req.body });

    const usuario = req.body.user;

    let newUser = new user( usuario );
/*
    newUser.nombre ='';
    newUser.email = ''
    newUser.password =''
*/
    newUser.save()
    .then(() => 
    {
        console.log('usuario creado');
        res.status(200).json({'message':'Usuario creado' ,newUser} );
    })
    .catch(error => {
         console.log("error user", error);
            res.status(400).json({ error } );
        });

        

    

}

function update(req,res){

    

}

function borrar(req,res){

    

}

module.exports = { 
    listar,
    crear,
    update,
    borrar
 };