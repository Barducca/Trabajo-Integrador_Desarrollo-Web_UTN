//limpiamos todos los campos al cargar la pagina
$(function(){
    $('input:checkbox:checked').each(function() {
        $('input:checkbox').prop ("checked", false);
    });

    $("#nombre").val("");
    $("#apellido").val("");
    $("#telefono").val("");
    $("#email").val("");
    $("#eleccion-email").prop ("checked", true);


    $("#comentario-consulta").val("");
});


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


//se esconden los formularios 2 al 4.
$("#container__form-datos, #container__form-comentario, #container__form-resumen").hide();


//se crea un array para guardar toda la informacion y mostrarla al final.
const resumen = [];
var resumenPdf = "";


$("#boton__servicios-siguiente").click(function() {

    var servicios = [];

    //se guardan los valores de los checkbox seleccionados en un array.
    $('input:checkbox:checked').each(function(index, elem) {
        servicios.push($(elem).val());
    });
    
    resumen[0]= servicios;
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
    var datos = new Object();

    datos.Nombre = $("#nombre").val();
    datos.Apellido = $("#apellido").val();
    datos.Telefono = $("#telefono").val();
    datos.Email = $("#email").val();
    datos.Contacto = $('input[type="radio"]:checked').val();
          
    resumen[1] = datos;
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
    
    resumen[2] = $("#comentario-consulta").val();
    //console.log(resumen);

    var listaServicios = document.createElement("ul");

    //se crean listas con la información ingresada por el usuario.
    $.each(resumen[0], function(index, value){
        var li = document.createElement("li");
        li.innerHTML = value;
        listaServicios.appendChild(li);
    });

    var listaDatos = document.createElement("ul");

    $.each(resumen[1], function(key, value){
        var li = document.createElement("li");
        li.innerHTML = `<strong>${key}</strong>: ${value}`;
        listaDatos.appendChild(li);
    });

    //se muestra un resumen de la información en el ultimo formulario al presionar "Enviar".
    $("#resumen").html(
        `<p>Quiero recidir mas información acerca de:</p><br>
         ${listaServicios.outerHTML}<br>
         <p>Datos personales Ingresados:</p><br>
         ${listaDatos.outerHTML}<br>
         <p>Comentario/consulta:</p><br>
         <div>${resumen[2]}</div>`);

    $("#container__form-comentario").hide();
    $("#container__form-resumen").fadeIn("fast");
});

//se vuelve al formulario anterior al presionar el boton atrás.
$("#boton__comentario-atras").click(function() {
    
    $("#container__form-comentario").hide();
    $("#container__form-datos").fadeIn("fast");
});


var jsPDF = window.jspdf.jsPDF;

$(document).ready(function() {
	if(jsPDF && jsPDF.version) {
	$('#dversion').text('Version ' + jsPDF.version);
	}
});


//le damos al usuario la opción de descargar un comprobante en dpf. 
$("#boton__resumen-descargar").click(function() {

    var pdf = new jsPDF();
    
    pdf.text("Constancia de Solicitud de Información", 105 , 10, null,  null, "center");
    pdf.line(55, 12, 155, 12);
    pdf.text("Quiero recidir mas información acerca de:", 10, 30);
    for(let i = 0; i < resumen[0].length; i++){

        var linea = (i+4)*10;

        pdf.text("-" + resumen[0][i], 15, linea);
        
    };

    pdf.text("Datos personales Ingresados:", 10, linea + 20);
    pdf.text("-Nombre: " + resumen[1].Nombre, 15, linea + 30);
    pdf.text("-Apellido: " + resumen[1].Apellido, 15, linea + 40);
    pdf.text("-Teléfono: " + resumen[1].Telefono, 15, linea + 50);
    pdf.text("-Email: " + resumen[1].Email, 15, linea + 60);
    pdf.text("-Forma de contacto: " + resumen[1].Contacto, 15, linea + 70);

    pdf.text("comentarios/consulta:", 10, linea + 90);
    pdf.text(resumen[2], 15, linea + 100);

    pdf.save("resumen.pdf");

});

