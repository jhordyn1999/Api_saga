/*=============================================
=            Configuracion            =
=============================================*/

require('./config/config');
const express = require ('express');
var cors = require('cors');
const app = express();
/*=====  End of Configuracion  ======*/


/*=============================================
=            MIDDLEWARES            =
=============================================*/

app.use(express.json());
app.use(cors());

/*=====  End of MIDDLEWARES  ======*/



/*=============================================
=            Rutas            =
=============================================*/


app.use(require('./routes/empleado'));
app.use(require('./routes/ambientes'));
app.use(require('./routes/permisos'));
app.use(require('./routes/incidentes'));
app.use(require('./routes/usuario'));
app.use(require('./routes/tiponcidente'));


/*=====  End of Rutas  ======*/


/*=============================================
=            Empezar el servidor            =
=============================================*/


app.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
     

});

/*=====  End of Empezar el servidor  ======*/