'use strict'

var desechoDao = require('../daos/DesechosDao')

var desecho = function(desechos){
    this.id_desechos = desechos.id_desechos;
    this.tipo = desechos.tipo;
    this.peso = desechos.peso;
}

desecho.readAll = (result) => {
    desechoDao.readAll(function(err,res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("visita: ",res)
            result(null,res);
        }
    })
}

desecho.create = (desechos) => {
    console.log("Creando desechos: "+desechos)
    var result = desechoDao.create(desechos)
    return result;
}

desecho.update = (desechos) => {
    console.log("Update Desechos"+desechos)
    var result = desechoDao.update(desechos)
    return result;
}

desecho.delete = (desechos) => {
    console.log("Delete Desechos"+desechos)
    var result = desechoDao.delete(desechos)
    return result;
}

module.exports = desecho;