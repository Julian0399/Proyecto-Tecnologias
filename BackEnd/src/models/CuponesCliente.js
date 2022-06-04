


'use strict'

var cuponesClienteDao = require('../daos/CuponesClienteDao');

var cuponesCliente = function(cuponesCliente){
    this.fk_id_cupon = cuponesCliente.fk_id_cupon;
}

cuponesCliente.readAll = result =>{
    cuponesClienteDao.readAll(function(err,res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("Cupones cliente: ",res)
            result(null,res);
        }
    });
}
cuponesCliente.create = (cuponesCliente)=>{
    console.log("Creando Cupon Cliente");
    var result = cuponesClienteDao.create(cuponesCliente);
    return(result);
}

cuponesCliente.delete = (cuponesCliente)=>{
    console.log("Borrando Cupon Cliente");
    var result = cuponesClienteDao.delete(cuponesCliente);
    return(result);
}

module.exports = cuponesCliente;