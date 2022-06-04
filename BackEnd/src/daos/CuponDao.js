'use strict'
const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT c.id_cupon, c.cantidad, c.valor, c.tipo FROM cupon c";
const INSERT = "INSERT INTO cupon (tipo, cantidad, valor) values(?,?,?)";
const DELETE = "DELETE FROM cupon WHERE id_cupon = ?"

exports.readAll = function(result) {
    dbConn.query(CONSULTA,function(err, res) {
        if (err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('cupon: ', res);
            result(null,res);
        }
    });
}

exports.create = (cupon) => {
    console.log("Creando Cupon" + cupon);
    var result = "1";
    dbConn.query(INSERT,[cupon.tipo,cupon.valor,cupon.cantidad],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    
    });
    return result;
}

exports.delete = (cupon) => {
    console.log("Deleting Cupon" + cupon);
    var result = "1";
    dbConn.query(DELETE,[cupon.id_cupon],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });      
    return result;
}