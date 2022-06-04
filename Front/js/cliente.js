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
function mostrar(){
	document.getElementById('navbarsExample').style.display='none';
	document.getElementById('teamo').style.display='flex';
}
function ocultar(){
	document.getElementById('navbarsExample').style.display='flex';
	document.getElementById('teamo').style.display='none';
}
// document.write('<nav class="navbar-nav  navbar-expand-sm navbar-dark bg-dark justify-content-between rounded"style="background-color: #e3f2fd" id="navbarsExample"><ul>	<li></li></ul><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample"	aria-controls="navbarsExample" aria-expanded="true" aria-label="Toggle navigation">	<span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-start" >	<ul class="nav navbar-nav" id="myTab" role="tablist"><li class="nav-item active"><a class="nav-link" id="home-tab" data-toggle="tab" href="#Home" role="tab" aria-controls="home"aria-selected="true">Inicio</a>	</li>		<li class="nav-item">			<a class="nav-link" id="table-tab" data-toggle="tab" href="#Table" role="tab" aria-controls="tabla"				aria-selected="false">Tablas</a>		</li>		<li class="nav-item dropdown" id="service-tab">			<a class="nav-link dropdown-toggle" href="#" id="dropdownEx" data-toggle="dropdown"				aria-haspopup="true" aria-expanded="true">Servicios</a>			<div class="dropdown-menu" aria-labelledby="dropdownEx">				<a class="dropdown-item" href="#Maps" data-toggle="tab">Mapa</a>				<a class="dropdown-item" href="#Comentarios" data-toggle="tab">Comentarios</a>			</div>		</li>	</ul></div><button class="btn btn-primary" type="submit">Button</button></nav>')

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
function setStorage(){


	var user= document.getElementById("name").value;
	var cedula= document.getElementById("cedula").value;
	var email= document.getElementById("email").value;
	var password= document.getElementById("password").value;
	var password2= document.getElementById("password2").value;
	var telefono= document.getElementById("telefono").value;
	Usuario = {"nombre":user,"cedula":cedula,"email":email,"contrasena":password,"contrasena2":password2,"telefono":telefono}
	var usuar=[{'email':123}];
	usuar.push(Usuario);
	var prueba = JSON.parse(localStorage.getItem("usuario"));
	if(prueba==null ){
		localStorage.setItem("usuario",JSON.stringify(usuar));
	}else{
		prueba.push(Usuario);
		localStorage.setItem("usuario",JSON.stringify(prueba));
	}
	
}

function iniciarSesion(){
	var aux=false;
	var prueba = JSON.parse(localStorage.getItem("usuario"));
	var email2= document.getElementById("emailsingup").value;
	var password2= document.getElementById("passwordsingup").value;
	var user= document.getElementById("name").value;
	for(var i=0;i<prueba.length;i++){
		if(prueba[i].email==email2 && prueba[i].contrasena==password2 ){
			ocultar();
			aux=true;
			$("#result1").text(email2);
			//document.getElementById('respuesta').innerHTML = (JSON.parse(email2));
		}
	}if(aux==false){
		swal("No puede ser!", "CONTRASEÑA O USUARIO INCORRECTO", "error");
		//window.alert(" ");
		console.log('ERROR')
	}
	

}

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

function ValidatePasswords() {
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("password2").value;
	if (password != confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}else{
		setStorage();
		return true;
	}	
}

function ValidateLogin() {
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("password2").value;
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