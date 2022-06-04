'use strict';

const cliente = require('../models/Cliente');

exports.readAll = function(req,res){
    cliente.readAll((err, data)=>{
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
    const clienteData = new cliente(req.body);
    var result = cliente.create(clienteData);
    res.send(result);
}

exports.update = function(req,res){
    const clienteData = new cliente(req.body);
    var result = cliente.update(clienteData);
    res.send(result);
}

exports.delete = function(req,res){
    const clienteData = new cliente(req.body);
    var result = cliente.delete(clienteData);
    res.send(result);
}
