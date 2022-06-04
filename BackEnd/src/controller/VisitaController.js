'use strict';

const visita = require('../models/Visita');

exports.readAll = function(req,res){
    visita.readAll((err, data)=>{
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
    const visitaData = new visita(req.body);
    var result = visita.create(visitaData);
    res.send(result);
}

exports.delete = function(req,res){
    const visitaData = new visita(req.body);
    var result = visita.delete(visitaData);
    res.send(result);
}