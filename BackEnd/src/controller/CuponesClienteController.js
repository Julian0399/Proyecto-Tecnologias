'use strict';


const cuponesCliente = require('../models/CuponesCliente');

exports.readAll = function(req,res){
    cuponesCliente.readAll((err, data)=>{
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al Consultar Los Datos."
            });
        } else {
            res.send(data);           
        }
    });
}

exports.create = function(req,res){
    const cuponData = new cuponesCliente(req.body);
    var result = cuponesCliente.create(cuponData);
    res.send(result);
}

exports.delete = function(req,res){
    const cuponData = new cuponesCliente(req.body);
    var result = cuponesCliente.delete(cuponData);
    res.send(result);
}