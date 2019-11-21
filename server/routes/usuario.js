const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/usuario', (req,res) => {
    const query = `
        CALL pa_user_permisos;
    `;
    mysqlConnection.query(query, (err, rows, fields) =>{

        let usuarios = {};
        
        
        if(!err) {
            usuarios['usuarios'] = rows[0];
            res.json(usuarios);
            
             
        } else {
            console.log(err);
            
        }
    })
})

router.post('/usuario/modificarpermiso', (req,res) => {
       
        let sub_nivel_permisos=req.body.sub_nivel_permisos;
        let idUsuario=req.body.idUsuario;

        let respuesta={};

    mysqlConnection.query('CALL pa_registrar_permiso_user(?,?)', [sub_nivel_permisos,idUsuario])
    .then(rows=>{
        
            respuesta['respuesta']=rows;
            res.json(respuesta);
        
    }).catch(err =>{
        console.log(err);
    });
});





module.exports = router;