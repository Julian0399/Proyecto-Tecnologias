//JAVASCRIPT
var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), 
        {
            center: {lat: 4.942523, lng: -74.012765},
            zoom: 8          
        });
    }
	

// JQUERY - Ante el evento de hacer click en la opción Mapa, se llama la función de inicializar mapa.	
$(function(){
    $("a[href='#Maps']").on('shown.bs.tab', function() {
        initMap();
    });
});	


// JQUERY Consultar base de datos y mostrar en una tabla

$("#table-tab" ).click(function() {
	submitConsulta();
});


function cargarDatos(data){
    var rows = "";
    $("#dataTable tr").remove();
    $("#dataTable").append('<tr><td>Placa</td>'+
    '<td>Modelo</td>' + 
    '<td>Campo</td>');
    for (x in data) {
        rows += `<tr><td>${data[x].placa}</td><td>${data[x].modelo}</td><td>${data[x].campo}</td></tr>`;
    }
    $("#dataTable").append(rows);
	
}


function submitConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getVehiculos',{
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

// insertar información a la base de datos capturados desde interfaz gráfica

$(document).ready(function(){
	$("#vehiculoForm").submit(function(event){
		console.log("entro");
		event.preventDefault();
		submitFormInsert();
	});
});


function submitFormInsert(){
	
	var placa = $("#placa").val();
    var modelo = $("#modelo").val();
    var campo = $("#campo").val();
    var object = {"placa":placa,"modelo":modelo, "campo":campo};
	
	
		
	fetch('http://localhost:3000/insertVehiculo',{
	method:	'POST',
	headers:{
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify(object),
	cache: 'no-cache'
	
	})
	
	.then(function(response){
		console.log("entró");
		return response.text();
	})
	
	.then(function(data){
		console.log('data = ',data);
		if(data === "OK"){
			formSuccess();
        }
        else{
            alert("Error al insertar");
        }
	})
	.catch(function(err){
		console.error(err);
	});
}


function formSuccess(){
	alert("Datos almacenados");
}

// const userOrder = {};

// function getValues(e) {
//   // turn form elements object into an array
//   const elements = Array.prototype.slice.call(e.target.elements);

//   // go over the array storing input name & value pairs
//   elements.forEach((el) => {
//     if (el.type !== "submit") {
//       userOrder[el.name] = el.value;
//     }
//   });

//   // finally save to localStorage
//   localStorage.setItem('userOrder', JSON.stringify(userOrder));
// }  

// document.getElementById("myform").addEventListener("submit", getValues);

function setStorage(){

	// var user= document.getElementById("username").value;
	// var userSurname= document.getElementById("surname").value;
	// var userEmail = document.getElementById("emailLogin").value;
	// var password_1 = document.getElementById("password1").value;
	// // var confirm_password_1 = document.getElementById("confirm_password").value;
	// // var btnradio_1 = document.getElementById("btnradio1").value;
	// // var btnradio_2 = document.getElementById("btnradio2").value;
	// var testObject = { 'username': user, 'surname':userSurname, 'email': userEmail, 'password': password_1 };

	// // Put the object into storage
	// localStorage.setItem('testObject', JSON.stringify(testObject));
	// // Retrieve the object from storage
	// var retrievedObject = localStorage.getItem('testObject');
	// console.log('retrievedObject: ', JSON.parse(retrievedObject));
	

	// console.log(user);
	// localStorage.setItem("username", user);

	// console.log(userSurname);
	// localStorage.setItem("surname", userSurname);

	// console.log(userEmail)
	// localStorage.setItem("emailLogin",userEmail);

	// console.log(password_1)
	// localStorage.setItem("password1",password_1);

	// console.log(confirm_password_1)
	// localStorage.setItem("confirm_password",confirm_password_1);

	// console.log(btnradio_1)
	// localStorage.setItem("btnradio1",btnradio_1);
	// console.log(btnradio_2)
	// localStorage.setItem("btnradio2",btnradio_2);

}


function ValidatePasswords() {
	var password = document.getElementById("password1").value;
	var confirmPassword = document.getElementById("confirm_password").value;
	if (password != confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}else{
		setStorage();
		return true;
	}	
}

function ValidateLogin() {
	var password = document.getElementById("password1").value;
	var confirmPassword = document.getElementById("confirm_password").value;
	if (password != confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}else{
		setStorage();
		return true;
	}	
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();