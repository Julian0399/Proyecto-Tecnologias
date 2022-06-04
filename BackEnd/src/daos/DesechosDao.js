'use strict';

const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT d.id_desechos, d.tipo, d.peso FROM desechos d";
const INSERT = "INSERT INTO desechos (tipo, peso)  values(?,?)";
const UPDATE = "UPDATE desechos SET tipo = ?,peso = ? WHERE id_desechos = ?";
const DELETE = "DELETE FROM desechos WHERE id_desechos = ?";

exports.readAll = function (result){
    dbConn.query(CONSULTA,function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        }else{
            console.log("Desechos: ", res)
            result(null, res);
        }
    });
}


exports.create = (desechos) => {
    console.log("Creando Desechos" + desechos);
    var result = "1";
    dbConn.query(INSERT,[desechos.tipo,desechos.peso],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    
    });
    return result;
}

exports.update = (desechos) => {
    console.log("Updating Desechos" + desechos);
    var result = "1";
    dbConn.query(UPDATE,[desechos.tipo,desechos.peso,desechos.id_desechos],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });
    return result;
}

exports.delete = (desechos) => {
    console.log("Deleting Desechos" + desechos);
    var result = "1";
    dbConn.query(DELETE,[desechos.id_desechos],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });
    return result;
}