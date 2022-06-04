'use strict'
const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT v.id_visita_estado, v.nombre_visita_estado FROM visita_estado v";
const UPDATE = "UPDATE visita_estado set nombre_visita_estado = ? WHERE id_visita_estado = ?"
const INSERT = "INSERT INTO visita_estado (nombre_visita_estado) values(?)";
const DELETE = "DELETE FROM visita_estado WHERE id_visita_estado = ?"

exports.readAll = function(result) {
    dbConn.query(CONSULTA,function(err, res) {
        if (err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('visita Estado: ', res);
            result(null,res);
        }
    });
}

exports.create = (visitaE) => {
    console.log("Creando Visita" + visitaE);
    var result = "1";
    dbConn.query(INSERT,[visitaE.nombre_visita_estado],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    
    });
    return result;
}

exports.update = (visitaE) => {
    console.log("Updating visita Estado" + visitaE);
    var result = "1";
    dbConn.query(UPDATE,[visitaE.nombre_visita_estado,visitaE.id_visita_estado],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });
    return result;
}

exports.delete = (visitaE) => {
    console.log("Deleting Visita" + visitaE);
    var result = "1";
    dbConn.query(DELETE,[visitaE.id_visita_estado],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });      
    return result;
}