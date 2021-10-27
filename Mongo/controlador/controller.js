/*const connection=require('../conexion/conexion');
const {render}=require('ejs');
const Cliente=require('../modelo/cliente')
const controller={};

controller.index=async(req,res,next)=>{
    await connection();
    const datos= await Cliente.find()
    console.log(datos)
}*/
const connection=require('../conexion/conexion')
const {render}=require('ejs');
const Cliente=require('../modelo/cliente');
//const { Connection } = require('mongoose');
const controller={};
controller.index=async(req,res,next)=>{
     connection();
    try {
        const datos=await Cliente.find();
        console.log(datos)

        res.render('formcliente',{datos:datos})
    } catch (error) {
        console.log("error")
        
    }
}
    controller.insertar=async(req,res,next)=>{

        const body=req.body;
        console.log(body)
        await Cliente.create(body);
        res.redirect('/')


    }
  




module.exports=controller;