const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');



router.get('/iluminacion', (req,res) => {
    mysqlConnection.query('SELECT * FROM iluminacion', (err, rows, fields) =>{
        
        
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    });
});

router.post('/iluminacion/InsertarIluminacion', (req,res) => {

    const {_area} = req.body;
    let respuesta={};
    const query = `
    CALL pa_insertarIluminacion(?);
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




module.exports = router;