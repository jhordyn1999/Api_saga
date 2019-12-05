const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/permisos', (req,res) => {
    mysqlConnection.query('SELECT * FROM permisos', (err, rows, fields) =>{
        
        let permisos={};
        if(!err) {
            permisos['Permisos']=rows;
            res.json(permisos);
        } else {
            console.log(err);
            
        }
    });
});

router.get('/subpermisos', (req,res) => {
    mysqlConnection.query('SELECT * FROM sub_permisos', (err, rows, fields) =>{
        
        let Subpermisos={};
        if(!err) {
            Subpermisos['SubPermisos']=rows;
            res.json(Subpermisos);
        } else {
            console.log(err);
            
        }
    });
});

router.post('/permiso/verificarPermiso', (req,res) => {

    const {permiso,subpermiso,iduser} = req.body;
    let respuesta={};
    const query = `
    CALL pa_verificarPermiso(?,?,?);
    `;
    mysqlConnection.query(query,[permiso,subpermiso,iduser],(err,rows,fields) => {
        if(!err) {
            respuesta['Respuesta'] = {'Response' : 'OK','StatusCode':200};
            respuesta['respuesta']=rows[0];
            console.log(respuesta["respuesta"][0]["valor"]);
            if(respuesta["respuesta"][0]["valor"] == 0){
                console.log("algo");
                res.status(500);
            } 
            
            res.json(respuesta);
        } else {
           // respuesta['Respuesta'] = {'Response' : 'NO','StatusCode':400};
            console.log(err);

            
        }
    })
})


module.exports = router;