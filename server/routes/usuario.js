const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/usuario', (req,res) => {
    const query = `
        CALL pa_user_permisos;
    `;
    mysqlConnection.query(query, (err, rows, fields) =>{
            
        let respuesta={};

        let usuarios = {};
        
        
        if(!err) {
            usuarios['Respuesta'] = {'Response' : 'OK','StatusCode':200};
            usuarios['usuarios'] = rows[0];
            res.json(usuarios);
            
             
        } else {
            console.log(err);
            
        }
    })
})

router.put('/usuario/modificarpermiso', (req,res) => {

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

router.post('/usuario/insertarusuario', (req,res) => {

    const {uss,pasw,idemp,idperm,idsub} = req.body;
    let respuesta={};
    const query = `
    CALL pa_InsertarUsuario(?,?,?,?,?);
    `;
    mysqlConnection.query(query,[uss,pasw,idemp,idperm,idsub],(err,rows,fields) => {
        if(!err) {
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
            console.log(err);
            
        }
    })
})

router.post('/usuario/verificarLogin', (req,res) => {

    const {usuario,contraseña} = req.body;
    let respuesta={};
    const query = `
    CALL pa_verificarLogin(?,?);
    `;
    mysqlConnection.query(query,[usuario,contraseña],(err,rows,fields) => {
        if(!err) {
           // respuesta['Respuesta'] = {'Response' : 'OK','StatusCode':200};
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
           // respuesta['Respuesta'] = {'Response' : 'NO','StatusCode':400};
            console.log(err);

            
        }
    })
})





module.exports = router;