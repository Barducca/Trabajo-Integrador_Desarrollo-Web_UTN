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
            required: "Obligatorio",
            minlength: "El nombre debe tener almenos 3 caracteres"
        },
        email: {
            required: "Obligatorio",
            email: "Ingrese un correo valido"
        },
        mensaje: {
            required: "Obligatorio",
            maxlength: "El mensaje debe ser menor a 200 caracteres"
        }
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
    let nombre = $("#nombre").val();
    let email = $("#email").val();
    let mensaje = $("#mensaje").val();

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

    // ocultar el segundo formulario y  vuelve a mostrar el primero
    $("#form-2").hide();
    $("#form-1").show();
    
    //vaciamos las variables para que el formulario este limpio  
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
});
