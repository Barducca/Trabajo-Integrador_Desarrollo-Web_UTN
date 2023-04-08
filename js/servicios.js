
//declaramos las reglas de validación de datos
$("#form-datos").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
        },
        apellido: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        nombre: {
            required: "Debe ingrese un nombre",
            minlength: "El nombre debe tener almenos 3 caracteres"
        },
        apellido: {
            required: "Debe ingrese un apellido",
            minlength: "El nombre debe tener almenos 3 caracteres"
        },
        email: {
            required: "Debe ingresar un email",
            email: "Ingrese un correo valido"
        }
    },
    success: function(label) {
        label.addClass("valid").text("Ok!");
    },
    errorElement: 'div'
});


//esconde los formularios 2 al 4.
$("#container__form-datos, #container__form-comentario, #container__form-resumen").hide();


//se crea un array para guardar toda la informacion y mostrarla al final.
const resumen = [];


$("#boton__servicios-siguiente").click(function() {

    var servicios = [];

    //se guardan los valores de los checkbox seleccionados en un array.
    $('input[type="checkbox"]:checked').each(function(index, elem) {
        servicios.push($(elem).val());
    });
    
    resumen.push(servicios);
    //console.log(resumen);

    $("#container__form-servicios").hide();
    $("#container__form-datos").fadeIn("fast");
});


$("#boton__datos-siguiente").click(function() {

    //validación del formulario
    if($("#form-datos").valid() == false){
        return;
    }

    //se guardan los datos
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var telefono = $("#telefono").val();
    var email = $("#email").val();
    var eleccion = $('input[type="radio"]:checked').val();

    const datos = [nombre, apellido, telefono, email, eleccion];
    //console.log(datos);
    resumen.push(datos);
    //console.log(resumen);

    $("#container__form-datos").hide();
    $("#container__form-comentario").fadeIn("fast");
});


//se vuelve al formulario anterior al presionar el boton atrás.
$("#boton__datos-atras").click(function() {
    
    $("#container__form-datos").hide();
    $("#container__form-servicios").fadeIn("fast");
});


$("#boton__comentario-enviar").click(function() {
    
    var comentario = $("#comentario-consulta").val();

    resumen.push(comentario);
    //console.log(resumen);

    $("#container__form-comentario").hide();
    $("#container__form-resumen").fadeIn("fast");
});

$("#boton__comentario-atras").click(function() {
    
    $("#container__form-comentario").hide();
    $("#container__form-datos").fadeIn("fast");
});


//agregamos un evento click al boton "enviar" 
$("#boton__resumen-descargar").click(function() {

    
});

