const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/usuario', (req,res) => {
    const query = `
        CALL pa_user_permisos;
    `;
    mysqlConnection.query(query, (err, rows, fields) =>{
        
        console.log(res.status(200));
        if(!err) {
            res.json(rows[0]);
            
             
        } else {
            console.log(err);
            
        }
    })
})





module.exports = router;