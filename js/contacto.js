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
            required: "Debe ingresar un nombre",
            minlength: "El nombre debe tener almenos 3 caracteres"
        },
        email: {
            required: "Debe ingresar un email",
            email: "Ingrese un correo valido"
        },
        mensaje: {
            required: "Debe ingresar un mensaje",
            maxlength: "El mensaje debe tener menor a 200 caracteres"
        }
    },
    success: function(label) {
        label.addClass("valid").text("Ok!");
    },
    errorElement: 'div'
});

//esconde el formulario 2
$("#container__form-2").hide();

//agregamos un evento click al boton "enviar" 
$("#botonEnviar").click(function() {

    //validamos el formulario
    if($("#form-1").valid() == false){
        return;
    }

    // recopilamos datos del primer fomulario
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var telefono = $("#telefono").val();
    var mensaje = $("#mensaje").val();

    //mostramos un resumen de los datos ingresados en el <div> del segundo formulario
    $("#resumen").html(`<strong>Nombre: </strong>${nombre}<br><br>
                        <strong>Email: </strong>${email}<br><br>
                        <strong>Telefono: </strong>${telefono}<br><br>
                        <strong>Mensaje: </strong>${mensaje}`);
        
    // ocultar el primer formulario y muestra el segundo con el resumen
    $("#container__form-1").hide();
    $("#container__form-2").fadeIn("fast");
});

//agregamos un evento click al boton "atras"      
$("#botonAtras").click(function() {

    $("label.error").css("display", "none");

    // ocultar el segundo formulario y  vuelve a mostrar el primero
    $("#container__form-2").hide();
    $("#container__form-1").fadeIn("fast");
    
    //vaciamos las variables para que el formulario este limpio  
    $("#nombre").val() = "";
    $("#email").val() = "";
    $("#telefono").val() = "";
    $("#mensaje").val() = "";
});