//declaramos las reglas de validación de datos
$("#form-1").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        },
        mensaje: {
            required: true,
            maxlength: 200
        }
    },
    messages: {
        nombre: {
            required: "Debe ingrese un nombre",
            minlength: "El nombre debe tener almenos 3 caracteres"
        },
        email: {
            required: "Debe ingresar un email",
            email: "Ingrese un correo valido"
        },
        mensaje: {
            required: "Debe ingrese un mensaje",
            maxlength: "El mensaje debe tener menor a 200 caracteres"
        }
    },
    errorPlacement: function(error, element) { 
        error.insertBefore(element);
    },
    success: function(label) {
        label.addClass("valid").text("Ok!");
    }
});

//esconde el formulario 2
$("#form-2").hide();

//agregamos un evento click al boton "enviar" 
$("#botonEnviar").click(function() {

    //validamos el formulario
    if($("#form-1").valid() == false){
        return;
    }

    // recopilamos datos del primer fomulario
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var mensaje = $("#mensaje").val();

    //mostramos un resumen de los datos ingresados en el <div> del segundo formulario
    $("#resumen").html(`<strong>Nombre: </strong>${nombre}<br><br>
                        <strong>Email: </strong>${email}<br><br>
                        <strong>Mensaje: </strong>${mensaje}`);
        
    // ocultar el primer formulario y muestra el segundo con el resumen
    $("#form-1").hide();
    $("#form-2").show();
});

//agregamos un evento click al boton "atras"      
$("#botonAtras").click(function() {

    $("label.error").css("display", "none");

    // ocultar el segundo formulario y  vuelve a mostrar el primero
    $("#form-2").hide();
    $("#form-1").show();
    
    //vaciamos las variables para que el formulario este limpio  
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
});