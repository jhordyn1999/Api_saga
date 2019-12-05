const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');



router.get('/temperatura', (req,res) => {
    mysqlConnection.query('SELECT * FROM temperatura', (err, rows, fields) =>{
        
        
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    });
});

router.post('/temperatura/InsertarTemperatura', (req,res) => {

    const {temp} = req.body;
    let respuesta={};
    const query = `
    CALL pa_InsertarTemperatura(?);
    `;
    mysqlConnection.query(query,[temp],(err,rows,fields) => {
        if(!err) {
        //    respuesta['Respuesta'] = {'Response' : 'OK','StatusCode':1};
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
           // respuesta['Respuesta'] = {'Response' : 'NO','StatusCode':400};
            console.log(err);

            
        }
    })
})




module.exports = router;