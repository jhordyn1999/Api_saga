const express = require('express');

const router = express.Router();

const mysqlConnection = require('../config/database');


 

router.get('/incidentes', (req,res) => {
    const query=`CALL pa_mostrar_incidente;`;
    mysqlConnection.query(query, (err, rows, fields) =>{
        
       let incidente={};
        if(!err) {
                incidente['Incidente']=rows[0];
            res.json(incidente);
             
        } else {
            console.log(err);
            
        }
    })
})

router.put('/incidente/registrarincidente', (req,res) => {

    //const {sub_nivel_permisos, idUsuario} = req.body;
    let respuesta={};
    const query = `
    CALL pa_registrar_incidencia;
    `;
    mysqlConnection.query(query,(err,rows,fields) => {
        if(!err) {
            respuesta['respuesta']=rows[0];
            res.json(respuesta);
        } else {
            console.log(err);
            
        }
    })
})




module.exports = router;