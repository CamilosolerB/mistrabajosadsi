/*const express=require('express')
const morgan=require("morgan")
const app=express();
const path=require('path')
app.use(morgan("dev"));
app.use(require('./conexion/conexion'))
//const mongoose=require('mongoose');
//const user='root';
//const password='JVmORTctFlNvF0rX';
//const database='Banco';
//const uri=`mongodb+srv://${user}:${password}@cluster0.dbwnz.mongodb.net/${database}?retryWrites=true&w=majority`
//mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
//.then(()=>console.log("Conexion ok"))
//.catch(e=>console.log(e));




app.use(require("./Rutas/rutas"));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'vista'));
app.use=((err,req,res,next)=>{
    res.send({err:err.message});
});
const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("En conexion")
    res.end("conexion ok")
})

server.listen(3000,()=>{
    console.log("Esperando respuesta")
})


//servidor
app.set("port",process.env.PORT || 5500);
app.listen(app.get("port"),()=>{
    console.log(`en el servidor ${app.get("port")}`);
})*/


const express=require('express');
const morgan=require('morgan');
const app=express();
const path=require('path')
const bodyparser=require('body-parser')



app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(require('./Rutas/rutas'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'vista'));
app.use((err,req,res,next)=>{
  res.send({err:err.message});

});




//Servidor
app.set('port',process.env.PORT || 5000);


app.listen(app.get('port'),()=>{
console.log(`En el servidor ${app.get("port")}`)
});