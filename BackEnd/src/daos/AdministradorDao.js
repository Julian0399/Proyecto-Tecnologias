'use strict';

const dbConn = require('../../config/dbConnection');
var dbConnection = require('../../config/dbConnection');

//const CONSULTA
const CONSULTA = "SELECT a.id_administrador, a.email, a.contraseña, a.nombre, a.cedula, a.numero_celular FROM administrador a";
const INSERT = "INSERT INTO administrador (email, nombre, contraseña, cedula, numero_celular) values(?,?,?,?,?)";
const UPDATE = "UPDATE administrador SET email = ?, nombre = ?, contraseña = ?, numero_celular = ? WHERE cedula= ?";
const DELETE = "DELETE FROM administrador WHERE cedula = ?";

exports.readAll = function(result) {
   dbConn.query(CONSULTA,function(err, res) {
      if (err){
          console.log("error: ", err);
          result(null, err);
      }else{
          console.log('Administrador: ', res);
          result(null,res);
      }
  });
}

//Crear
exports.create = (administrador) => {
   console.log("Creando"+administrador);
   var result = "1";
   dbConn.query(INSERT,[administrador.email,administrador.nombre,administrador.contraseña,administrador.cedula,administrador.numero_celular],function(err, res){
      if (err) {
          console.log(err);
          result = "0";
      } 
   });

   return result;
}

//Actualizar
exports.update = (administrador) =>{
   console.log("Update"+administrador);
   var result = "1";
   dbConn.query(UPDATE,[administrador.email,administrador.nombre,administrador.contraseña,administrador.numero_celular,administrador.cedula],function(err, res){
      if (err) {
          console.log(err);
          result = "0";
      } 
   });

   return result;
}

//Borrar
exports.delete = (administrador) => {
    console.log("Delete"+administrador);
    var result = "1";
    dbConn.query(DELETE,[administrador.cedula],function(err, res){
       if (err) {
           console.log(err);
           result = "0";
       } 
    });
 
    return result;
}