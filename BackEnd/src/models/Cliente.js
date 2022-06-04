'use strict';

var clienteDAO = require('../daos/ClienteDao');


var cliente = function(cliente){
    this.id_cliente = cliente.id_cliente;
    this.contraseña = cliente.contraseña;
    this.email = cliente.email;
    this.nombre = cliente.nombre;
    this.cedula = cliente.cedula;
    this.numero_celular = cliente.numero_celular;
    
}

cliente.readAll = (result) => {
    clienteDAO.readAll(function(err, res){
        if (err) {
            console.log("error: ",err);
            result(null, err);
        }else{
            console.log("cliente: ",res)
            result(null,res);
        }
    })
}

cliente.create = (cliente) => {
    console.log("Creando Usuario Cliente.")
    var result = clienteDAO.create(cliente);
    return result;
}

cliente.update = (ActualizarCliente)=>{
    console.log("Actualizando Usuario Del cliente");
    var result  = clienteDAO.update(ActualizarCliente);
    return result;
}

cliente.delete = (BorrarCliente)=>{
    console.log("Borrando Usuario del cliente");
    var result = clienteDAO.delete(BorrarCliente);
    return(result);
}

module.exports = cliente;