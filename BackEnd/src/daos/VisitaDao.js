'use strict'
const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT v.id_visita, v.direccion, v.ciudad, v.numero_celular FROM visitas v";
const INSERT = "INSERT INTO visitas (direccion, ciudad, codigo_postal, numero_celular) values(?,?,?,?)";
const DELETE = "DELETE FROM visitas WHERE id_visita = ?"

exports.readAll = function(result) {
    dbConn.query(CONSULTA,function(err, res) {
        if (err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('visita: ', res);
            result(null,res);
        }
    });
}

exports.create = (visita) => {
    console.log("Creando Visita" + visita);
    var result = "1";
    dbConn.query(INSERT,[visita.direccion,visita.ciudad,visita.codigo_postal,visita.numero_celular],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    
    });
    return result;
}

exports.delete = (visita) => {
    console.log("Deleting Visita" + visita);
    var result = "1";
    dbConn.query(DELETE,[visita.id_visita],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });      
    return result;
}