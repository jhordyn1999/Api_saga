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

    const {sub_nivel_permisos, idUsuario} = req.body;
    let respuesta={};
    const query = `
    CALL pa_registrar_permiso_user(?,?);
    `;
    mysqlConnection.query(query,[sub_nivel_permisos,idUsuario],(err,rows,fields) => {
        if(!err) {
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
            console.log(err);
            
        }
    })
})





module.exports = router;