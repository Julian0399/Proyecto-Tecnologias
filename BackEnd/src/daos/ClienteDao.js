'use strict';

const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

const CONSULTA = "SELECT c.id_cliente, c.email, c.contraseña, c.nombre, c.cedula, c.numero_celular FROM cliente c";
const INSERT = "INSERT INTO cliente (email, contraseña, nombre, cedula, numero_celular) values(?,?,?,?,?)";
const UPDATE = "UPDATE cliente SET email = ?, contraseña = ?, numero_celular = ? WHERE cedula = ?"
const DELETE = "DELETE FROM cliente WHERE cedula = ?"

exports.readAll = function(result) {
    dbConn.query(CONSULTA,function(err, res) {
        if (err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('producto: ', res);
            result(null,res);
        }
    });
}

exports.create = (nuevoCliente) => {
    console.log("Creando Nuevo Cliente" + nuevoCliente);
    var result = "1";
    dbConn.query(INSERT,[nuevoCliente.email,nuevoCliente.contraseña,nuevoCliente.nombre,nuevoCliente.cedula,nuevoCliente.numero_celular],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    
    });
    return result;
}

exports.update = (ActualizarCliente) =>{
    console.log("Actualizando Cliente" + ActualizarCliente);
    var result = "1";
    dbConn.query(UPDATE,[ActualizarCliente.email,ActualizarCliente.contraseña,ActualizarCliente.numero_celular,ActualizarCliente.cedula],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    
    });
    return result;
}

exports.delete = (BorrarCliente) => {
    console.log("Deleting Cliente" + BorrarCliente);
    var result = "1";
    dbConn.query(DELETE,[BorrarCliente.cedula],function(err,res){
        if (err) {
            console.log(err);
            result="0";
        }
    });      
    return result;
}




