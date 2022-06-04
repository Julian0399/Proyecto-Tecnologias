// insertar información a la base de datos capturados desde interfaz gráfica

$(document).ready(function(){
	$("#Registration_2").submit(function(event){
		console.log("entro");
		event.preventDefault();
	});
});

function limpiarFormulario() {
  $('#email').val()
  $('#name').val()
  $('#cedula').val()
  $('#confirm_password').val()
  $('#telefono').val()
}

// Enviar los Datos para crear un Administrador
function crearCliente() {
  
  var email = $('#email').val()
  var nombre = $('#name').val()
  var cedula = $('#cedula').val()
  var contraseña = $('#password2').val()
  var numero_celular = $('#telefono').val()

  var object = {
    email: email,
    nombre: nombre,
    cedula: cedula,
    contraseña: contraseña,
    numero_celular: numero_celular,
  };

  console.log(object);

  fetch("http://localhost:3000/createCliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
    cache: "no-cache",
  })
    .then(function (response) {
      //console.log("entro");
      return response.text();
    })
    .then(function (data) {
      if (data == "1") {
        alert("Cliente Creado");
        
      } else {
        alert("error al insertar");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
function CargarVisitas(){
	console.log("Entró a llamar Clientes");
	fetch('http://localhost:3000/getClientes',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                cargarDatos(result);
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function cargarDatos(data){
    var rows = "";
    $("#dataTable tr").remove();
    $("#dataTable").append('<tr><td style="background-color: #333;">idProducto</td>'+
    '<td  style="background-color: rgb(146, 145, 145)";>Cedula</td>' + 
    '<td style="background-color: #333";>Correo</td>'+ 
    '<td style="background-color: rgb(146, 145, 145)";>NumeroCelular</td>');
    for (x in data) {
        rows += `<tr><td ">${data[x].id_cliente}</td><td>${data[x].cedula}</td><td>${data[x].email}</td><td>${data[x].numero_celular}</td>/tr>`;
    }
    $("#dataTable").append(rows);
}
//Actualizar Datos Usuario crearAdministrador
function updateCliente(cedula) {

  var email = $('#email').val()
  var nombre = $('#name').val()
  var cedula = $('#cedula').val()
  var contraseña = $('#confirm_password').val()
  var numero_celular = $('#telefono').val()

  var object = {
    email: email,
    nombre: nombre,
    cedula: cedula,
    contraseña: contraseña,
    numero_celular: numero_celular,
  };

  console.log(object);

  fetch("http://localhost:3000/updateCliente", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
    cache: "no-cache",
  })
    .then(function (response) {
      //console.log("entro");
      return response.text();
    })
    .then(function (data) {
      if (data == "1") {
        alert("Cliente Actualizado");
        limpiarFormulario();
      } else {
        alert("error al insertar");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
$("#holi").click(function () {
    
  CargarVisitas();
  document.getElementById('tag-id');
});
//Borrar Usuario Administrador
function deleteCliente(cedula) {
  var cedula = $('#cedula').val()
  var object = { cedula: cedula };
  fetch('http://localhost:3000/deleteCliente',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
    })
        .then(function (response) {
            //console.log("entro");
            limpiarFormulario();
            return response.text();
        })
        .catch(function (err) {
            console.log(err)
        });

}
