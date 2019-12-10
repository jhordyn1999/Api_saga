const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');



router.get('/acceso', (req,res) => {
    mysqlConnection.query('SELECT * FROM acceso', (err, rows, fields) =>{
        
        
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    });
});

router.post('/acceso/insertarAcceso', (req,res) => {

    const {iduser,permiso} = req.body;
    let respuesta={};
    const query = `
    CALL pa_InsertarAcceso(?,?);
    `;
    mysqlConnection.query(query,[iduser,permiso],(err,rows,fields) => {
        if(!err) {
        //    respuesta['Respuesta'] = {'Response' : 'OK','StatusCode':1};
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
           // respuesta['Respuesta'] = {'Response' : 'NO','StatusCode':400};
            console.log(err);

            
        }
    });
});

router.post('/acceso/ultimoAcceso', (req,res) => {

    const {iduser} = req.body;
    let respuesta={};
    const query = `
    CALL pa_ultimoAcceso(?);
    `;
    mysqlConnection.query(query,[iduser],(err,rows,fields) => {
        if(!err) {
        //    respuesta['Respuesta'] = {'Response' : 'OK','StatusCode':1};
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
           // respuesta['Respuesta'] = {'Response' : 'NO','StatusCode':400};
            console.log(err);

            
        }
    });
});




module.exports = router;