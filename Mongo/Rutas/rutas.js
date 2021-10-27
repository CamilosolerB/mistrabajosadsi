/*const express=require('express')
const rutas=express.Router();
const controller=require('../controlador/controller');
rutas.get('/',controller.index);
module.exports=rutas;*/
const express=require('express');
const rutas=express.Router();
const controller=require('../controlador/controller');

rutas.get('/',controller.index);
rutas.post('/frminsertar',controller.insertar)
module.exports=rutas