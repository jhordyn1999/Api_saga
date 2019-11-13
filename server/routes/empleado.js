const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/empleado', (req,res) => {
    mysqlConnection.query('SELECT * FROM empleado', (err, rows, fields) =>{
        
        
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    });
});

router.get('/empleado/:im', (req,res) => {
    const { im } = req.params;
    mysqlConnection.query('SELECT * FROM empleado WHERE idEmpleado = ?', [im], (err,rows,fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(im+"algo");
            
            
            
        }
    });
    
});
router.post('/empleado/registrarempleado', (req,res) => {
    const {nombre, apellido,etc} = req.body;

    const query = `
        CALL pa_seguimiento_insertarSeguimiento (?,?,?);
    `;
    mysqlConnection.query(query,[IMEI],(err,rows,fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
            
        }
    })
});

module.exports = router;