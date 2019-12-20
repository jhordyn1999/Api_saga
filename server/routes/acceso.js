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
router.post('/acceso/cerrarAcceso', (req,res) => {

    const {accesoid} = req.body;
    let respuesta={};
    const query = `
    CALL pa_cerrarAcceso(?);
    `;
    mysqlConnection.query(query,[accesoid],(err,rows,fields) => {
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

router.get('/acceso/ultimoAcceso', (req,res) => {

   // const {iduser} = req.body;
    let respuesta={};
    const query = `
    CALL pa_ultimoAcceso();
    `;
    mysqlConnection.query(query,(err,rows,fields) => {
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



router.get('/iluminacion', (req,res) => {
    mysqlConnection.query('SELECT * FROM iluminacion', (err, rows, fields) =>{
        
        
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    });
});

router.post('/iluminacion/insertarIluminacion', (req,res) => {

    const {areainsert} = req.body;
    let respuesta={};
    const query = `
    CALL pa_insertarIluminacion(?);
    `;
    mysqlConnection.query(query,[areainsert],(err,rows,fields) => {
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
router.post('/iluminacion/apagarIluminacion', (req,res) => {

    const {_area} = req.body;
    let respuesta={};
    const query = `
    CALL pa_apagarIluminacion(?);
    `;
    mysqlConnection.query(query,[_area],(err,rows,fields) => {
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
router.get('/iluminacion/ultimaIluminacion', (req,res) => {


    let respuesta={};
    const query = `
    CALL pa_ultimaIluminacion();
    `;
    mysqlConnection.query(query,(err,rows,fields) => {
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
router.get('/iluminacion/ultimoApagado', (req,res) => {


    let respuesta={};
    const query = `
    CALL pa_ultimoApagado();
    `;
    mysqlConnection.query(query,(err,rows,fields) => {
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