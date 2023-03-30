$(document).ready(function () {
  $('#form-end').hide();
  $('#form-box').submit(function (event) {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();

    if (!nombre) {
      $("#nombre").next(".error").remove();
      $("#nombre").after('<span class="error">Campo Obligatorio</span>');
      event.preventDefault();
    } else {
      $("#nombre").next(".error").remove();
    }

    if (!apellido) {
      $("#apellido").next(".error").remove();
      $("#apellido").after('<span class="error">Campo Obligatorio</span>');
      event.preventDefault();
    } else {
      $("#apellido").next(".error").remove();
    }

    if (!email) {
      $("#email").next(".error").remove();
      $("#email").after('<span class="error">Campo Obligatorio</span>');
      event.preventDefault();
    } else {
      $("#email").next(".error").remove();
    }
});
});