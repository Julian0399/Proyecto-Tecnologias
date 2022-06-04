
  function limpiarFormulario() {
    $("#passwordsingup").val("");
    $("#emailsingup").val("");
    $("#name").val("");
    $("#cedula").val("");
    $("#email").val("");
    $("#password2").val("");
    $("#password").val("");
    $("#telefono").val("");
    $("#email").val("");
  }

  function check_pass() {
    if (document.getElementById('password').value == document.getElementById('password2').value) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}
