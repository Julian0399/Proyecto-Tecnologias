'use strict'

var cuponDao = require('../daos/CuponDao');

var cupon = function(cupon){
    this.id_cupon = cupon.id_cupon;
    this.valor = cupon.valor;
    this.cantidad = cupon.cantidad;
    this.tipo = cupon.tipo;
   
}

cupon.readAll = (result) => {
    cuponDao.readAll(function(err, res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("cupon: ",res)
            result(null,res);
        }
    })
}

// Crear cupon
cupon.create = (cupon) => {
    console.log("Creando cupon")
    var result = cuponDao.create(cupon);
    return result;
}


cupon.delete = (cupon) => {
    console.log("Borrar cupon")
    var result = cuponDao.delete(cupon);
    return result;
}

module.exports = cupon;