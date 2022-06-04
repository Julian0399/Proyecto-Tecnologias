'use strict';

const desecho = require('../models/Desechos');

exports.readAll = function(req,res){
    desecho.readAll((err, data)=>{
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
    const desechoData = new desecho(req.body);
    var result = desecho.create(desechoData);
    res.send(result);
}

exports.update = function(req,res){
    const desechoData = new desecho(req.body);
    var result = desecho.update(desechoData);
    res.send(result);
}

exports.delete = function(req,res){
    const desechoData = new desecho(req.body);
    var result = desecho.delete(desechoData);
    res.send(result);
}
