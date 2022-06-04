'use strict';

const cupon = require('../models/Cupon');

exports.readAll = function(req,res){
    cupon.readAll((err, data)=>{
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
    const cuponData = new cupon(req.body);
    var result = cupon.create(cuponData);
    res.send(result);
}

exports.delete = function(req,res){
    const cuponData = new cupon(req.body);
    var result = cupon.delete(cuponData);
    res.send(result);
}