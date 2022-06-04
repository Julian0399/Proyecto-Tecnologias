'use strict';

var administradorDao = require('../daos/AdministradorDao');

var administrador = function(administrador) {
    this.id_administrador = administrador.id_administrador;
    this.email = administrador.email;
    this.contraseña = administrador.contraseña;
    this.nombre = administrador.nombre;
    this.cedula = administrador.cedula;
    this.numero_celular = administrador.numero_celular;
}

// Implementar Crear Actualizar Borrar Get
administrador.readAll = (result) => {
    administradorDao.readAll(function(err, res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("cliente: ",res)
            result(null,res);
        }
    })
}

//Modelo Creación Usuario de Admin
administrador.create = (administrador) => {
    console.log('Creando Administrador.')
    var result = administradorDao.create(administrador);
    return result;
}
//Modelo Actualización Datos del Usuario Admin
administrador.update = (administrador) => {
    console.log('Actualizando Administrador.')
    var result = administradorDao.update(administrador);
    return result;
}
//Modelo Elimina el Usuario de Admin
administrador.delete = (administrador) => {
    console.log('Eliminando Administrador.')
    var result = administradorDao.delete(administrador);
    return result;
}

module.exports = administrador;