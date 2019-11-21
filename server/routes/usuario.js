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
        let id_usuario=req.body.id_usuario;
        let permiso=req.body.permiso;

        let respuesta={};

    mysqlConnection.query('CALL pa_registrar_permiso_user(?,?)', [id_usuario,permiso])
    .then(rows=>{
        
            respueesta['respuesta']=rows;
            res.json(respuesta);
        
    }).catch(err =>{
        console.log(err);
    });
});





module.exports = router;