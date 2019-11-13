const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/incidentes', (req,res) => {
    const query=`CALL pa_mostrar_incidente;`;
    mysqlConnection.query(query, (err, rows, fields) =>{
        
       
        if(!err) {
            res.json(rows);
             
        } else {
            console.log(err);
            
        }
    })
})





module.exports = router;