'use strict'

var visitaEstadoDao = require('../daos/VisitaEstadoDao');

var visitaEstado = function(visitaE){
    this.id_visita_estado = visitaE.id_visita_estado;
    this.nombre_visita_estado = visitaE.nombre_visita_estado;
}

visitaEstado.readAll = (result) => {
    visitaEstadoDao.readAll(function(err, res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("visitaEstado: ",res)
            result(null,res);
        }
    });
}

visitaEstado.update = (visitaE) => {
    console.log("Actualizando Estado de visita")
    var result = visitaEstadoDao.update(visitaE);
    return result;
}

// Crear Estado de la visita
visitaEstado.create = (visitaE) => {
    console.log("Creando Estado de visita")
    var result = visitaEstadoDao.create(visitaE);
    return result;
}

visitaEstado.delete = (visitaE) => {
    console.log("Borrar Visita")
    var result = visitaEstadoDao.delete(visitaE);
    return result;
}

module.exports = visitaEstado;