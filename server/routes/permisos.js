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


module.exports = router;