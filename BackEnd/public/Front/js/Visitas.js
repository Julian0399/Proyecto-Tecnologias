$(document).ready(function () {
    $("#productoForm").submit(function (event) {
        event.preventDefault();
        submitFormInsert();
    });
});
$("#hola").click(function () {
    
    CargarVisitas();
    document.getElementById('tag-id');
});
function CargarVisitas(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getVisitas',{
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
    '<td  style="background-color: rgb(146, 145, 145)";>Direccion</td>' + 
    '<td style="background-color: #333";>Ciudad</td>'+ 
    '<td style="background-color: rgb(146, 145, 145)";>NumeroCelular</td>');
    for (x in data) {
        rows += `<tr><td style="background-color: rgb(146, 145, 145)">${data[x].id_visita}</td><td style="background-color: #333">${data[x].direccion}</td><td style="background-color: rgb(146, 145, 145)">${data[x].numero_celular}</td><td style="background-color: #333">${data[x].ciudad}</td>/tr>`;
    }
    $("#dataTable").append(rows);
}



function createVisita() {
    var direccion = $('#direccion').val()
    var ciudad = $('#ciudad').val()
    var codigo_postal = $('#postal').val()
    var numero_celular = $('#cel').val()

    var object = {
        direccion: direccion,
        ciudad: ciudad,
        codigo_postal: codigo_postal,
        numero_celular: numero_celular,
    };

    fetch('http://localhost:3000/CreateVisitas',{
	    method:	'POST',
	    headers:{
		'Content-Type' : 'application/json'
	},
        body: JSON.stringify(object),
        cache: "no-cache",
	}) .then(function (response) {
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

function DeleteVisita() {
    fetch('http://localhost:3000/DeleteVisitas',{
	method:	'DELETE',
	headers:{
		'Content-Type' : 'application/json'
	},
    body: JSON.stringify(object),
    cache: "no-cache",
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