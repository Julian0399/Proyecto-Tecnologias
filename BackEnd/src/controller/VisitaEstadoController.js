'use strict'

const visitaE = require("../models/VisitaEstado");

exports.readAll = function(req,res){
    visitaE.readAll((err, data)=>{
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

exports.update = function(req,res){
    const visitaEData = new visitaE(req.body);
    var result = visitaE.update(visitaEData);
    res.send(result)
}

exports.create = function(req,res){
    const visitaEData = new visitaE(req.body);
    var result = visitaE.create(visitaEData);
    res.send(result)
}

exports.delete = function(req,res){
    const visitaEData = new visitaE(req.body);
    var result = visitaE.delete(visitaEData);
    res.send(result)
}