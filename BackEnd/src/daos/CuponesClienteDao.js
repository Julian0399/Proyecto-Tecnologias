'use strict'
const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT * FROM cupones_cliente c, cupon WHERE fk_id_cupon = id_cupon";
const INSERT = "INSERT INTO cupones_cliente (fk_id_cupon) values(?)"
const DELETE = "DELETE FROM cupones_cliente WHERE id_cupon_cliente = ?"

exports.readAll = function(result){
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
exports.create = function(cuponCliente){
    console.log("Creando Cupon")
    var result = "1"
    dbConn.query(INSERT,[cuponCliente.fk_id_cupon],function(err, res){
        if (err) {
            console.log(err);
            result="0";
        }
    });
    return result;
}

exports.delete = function(cuponCliente){
    console.log("Deleting Cupon")
    var result = "1";
    dbConn.query(DELETE,[cuponCliente.id_cupon_cliente],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });      
    return result;
}

