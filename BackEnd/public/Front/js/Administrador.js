// insertar información a la base de datos capturados desde interfaz gráfica

$(document).ready(function(){
	$("#Registration2").submit(function(event){
		console.log("entro");
		event.preventDefault();
		crearAdministrador();
	});
});

// Enviar los Datos para crear un Administrador
function crearAdministrador() {
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

  fetch("http://localhost:3000/createAdmin", {
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
        alert("Producto registrado");
      } else {
        alert("error al insertar");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Actualizar Datos Usuario crearAdministrador
function updateAdministrador(cedula) {
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

  fetch("http://localhost:3000/updateAdmin", {
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
        alert("Producto registrado");
      } else {
        alert("error al insertar");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Borrar Usuario Administrador
function deleteAdministrador(cedula) {
  var cedula = $('#cedula').val();
  var object =  {cedula: cedula };
  fetch('http://localhost:3000/deleteAdmin',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
    })
        .then(function (response) {
            //console.log("entro");
            return response.text();
        })
        .catch(function (err) {
            console.log(err)
        });

}
