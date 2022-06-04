'use strict'

var visitaDao = require('../daos/VisitaDao');

var visita = function(visita){
    this.id_visita = visita.id_visita;
    this.direccion = visita.direccion;
    this.ciudad = visita.ciudad;
    this.codigo_postal = visita.codigo_postal;
    this.numero_celular = visita.numero_celular;
}

visita.readAll = (result) => {
    visitaDao.readAll(function(err, res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("visita: ",res)
            result(null,res);
        }
    });
}

// Crear Visita
visita.create = (visita) => {
    console.log("Creando Visita")
    var result = visitaDao.create(visita);
    return result;
}


visita.delete = (visita) => {
    console.log("Borrar Visita")
    var result = visitaDao.delete(visita);
    return result;
}

module.exports = visita;