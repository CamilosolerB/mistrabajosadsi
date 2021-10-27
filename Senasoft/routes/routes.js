const express = require('express');
const controller = require('../controller/controller');
const ret =express.Router();

ret.get('/',controller.inicio);
ret.get('/login',controller.iniciosesion);
ret.get('/registro',controller.registrate);
ret.get('/cliente',controller.cliente);
ret.post('/crear',controller.crear);
ret.post('/validate',controller.login);

module.exports=ret;