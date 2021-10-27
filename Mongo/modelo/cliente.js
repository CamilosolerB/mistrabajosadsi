const express = require('express')
const mongoose=require('mongoose')
const {Schema}=mongoose
const Clienteshe = new Schema({
    Documento:String,
    Nombre:String,
    Apellido:String,
    correo:String,
    celular:String,
    sexo:String,
    fecha:String
})
const clientes = mongoose.model('cliente',Clienteshe)
module.exports=clientes