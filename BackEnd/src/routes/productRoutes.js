'use strict';

var clienteController = require('../controller/ClienteController');
var adminController = require('../controller/AdministradorController');
var visitaController = require('../controller/VisitaController');
var cuponController = require('../controller/CuponController');
var desechosController = require('../controller/DesechosController')
var visitaEstadoController = require('../controller/VisitaEstadoController');
var CuponesClienteController = require('../controller/CuponesClienteController')

exports.assignRoutes = function(app){

    // Routes Cliente
    app.get('/getClientes', clienteController.readAll);
    app.post('/createCliente', clienteController.create);
    app.put('/updateCliente', clienteController.update);
    app.delete('/deleteCliente', clienteController.delete);
    
    // Routes Administrador
    app.get('/getAdmins', adminController.readAll);
    app.post('/createAdmin', adminController.create);
    app.put('/updateAdmin', adminController.update);
    app.delete('/deleteAdmin', adminController.delete);

    // Routes Visita
    app.get('/getVisitas',visitaController.readAll )
    app.post('/createVisitas', visitaController.create);
    app.delete('/deleteVisitas', visitaController.delete);

    // Routes Cupon
    app.get('/getCupons',cuponController.readAll )
    app.post('/createCupon', cuponController.create);
    app.delete('/deleteCupon', cuponController.delete);

    // Routes Desechos 
    app.get('/getDesechos',desechosController.readAll);
    app.post('/createDesecho',desechosController.create);
    app.put('/updateDesecho', desechosController.update);
    app.delete('/deleteDesecho', desechosController.delete);

    // Routes VisitaEstado  
    app.get('/getVisitaE',visitaEstadoController.readAll);
    app.post('/createVisitaE',visitaEstadoController.create);
    app.put('/updateVisitaE', visitaEstadoController.update);
    app.delete('/deleteVisitaE', visitaEstadoController.delete);

    // Routes Cupones Cliente
    app.get('/getCuponesCliente',CuponesClienteController.readAll);
    app.post('/createCuponesCliente',CuponesClienteController.create);
    //app.put('/updateCuponesCliente',CuponesClienteController.update);
    app.delete('/deleteCuponesCliente',CuponesClienteController.delete);
}


