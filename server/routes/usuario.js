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





module.exports = router;