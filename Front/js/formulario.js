
  function limpiarFormulario() {
    $("#passwordsingup").val("");
    $("#emailsingup").val("");
    $("#username").val("");
    $("#surname").val("");
    $("#email").val("");
    $("#confirm_password").val("");
    $("#password1").val("");
    $("#emailLogin").val("");
  }

  function check_pass() {
    if (document.getElementById('password1').value == document.getElementById('confirm_password').value) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}
