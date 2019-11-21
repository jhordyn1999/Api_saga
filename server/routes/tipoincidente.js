const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/tipoincidente', (req,res) => {
    mysqlConnection.query('SELECT * FROM tipo_incidente', (err, rows, fields) =>{
        
        let tipoincidente={};
        if(!err) {
            tipoincidente['TipoIncidente']=rows;
            res.json(tipoincidente);
        } else {
            console.log(err);
            
        }
    });
});

module.exports = router;