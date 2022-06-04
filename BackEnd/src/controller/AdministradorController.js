'use strict';

const administrador = require('../models/Administrador');

exports.readAll = function(req,res){
    administrador.readAll((err, data)=>{
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
    const administradorData = new administrador(req.body);
    var result = administrador.create(administradorData);
    res.send(result);
}

exports.update = function(req,res){
    const administradorData = new administrador(req.body);
    var result = administrador.update(administradorData);
    res.send(result);
}

exports.delete = function(req,res){
    const administradorData = new administrador(req.body);
    var result = administrador.delete(administradorData);
    res.send(result);
}
