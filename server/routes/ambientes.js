const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/ambientes', (req,res) => {
    mysqlConnection.query('SELECT * FROM ambientes', (err, rows, fields) =>{
        
        let ambientes = {};
        if(!err) {
            ambientes['ambientes'] = rows[0];
            res.json(ambientes);
        } else {
            console.log(err);
            
        }
    })
})
router.get('/ambientes/:im', (req,res) => {
    const { im } = req.params;
    mysqlConnection.query('SELECT * FROM ambientes WHERE idAmbientes = ?', [im], (err,rows,fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(im+"algo");
            
            
            
        }
    });
    
});





module.exports = router;