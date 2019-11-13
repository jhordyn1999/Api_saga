const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/permisos', (req,res) => {
    mysqlConnection.query('SELECT * FROM permisos', (err, rows, fields) =>{
        
        
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    });
});


module.exports = router;