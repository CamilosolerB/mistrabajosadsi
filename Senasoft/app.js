//llamado de las librerias
const express = require('express');
const morgan = require('morgan');
const dir = express();
const path = require('path');
const fr = require('fs');
const session = require('express-session');
//const { dirname } = require('path/posix');

//uso libreria express
dir.use(morgan("dev"));
dir.use(express.static(path.join(__dirname,'public')));
dir.set('view engine','ejs');
dir.set('views',path.join(__dirname,'views'));

//tiempos de las sesiones
dir.use(
    session({
    secret:'123',
    resave:true,
    saveUninitialized:true
}))

dir.use(express.urlencoded({extended:true}));
dir.use(require("./routes/routes"));
dir.use=((err,req,res,next)=>{
    res.send({err:err.message});//si existe error en el app lo muestra
});


//servidor

dir.set('port',process.env.PORT || 666);

dir.listen(dir.get('port'),()=>{
    console.log(`En el servidor ${dir.get("port")}`)
})