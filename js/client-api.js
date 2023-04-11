        function sendRequest() {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=3703eb6b830f455212008b6bf5b4a561&lang=es&units=metric',
                type: 'GET',
                dataType: "JSON",
                success: function (data) {
                    var datos = mostrarDatos(data);
                    $("#show").html(datos);
                },
                complete: function () {
                    /* Se actualiza cada en 60 segundos */
                    setTimeout(function () {
                        sendRequest();
                    }, 60000);
                }
            });
        };

        $(function () {
            sendRequest();
        });

        function mostrarDatos(data) {
            return "<h4>" + data.main.temp + " &deg;C</h4>" +
                "<h4><img src='https://openweathermap.org/img/wn/" + 
                data.weather[0].icon + ".png'></h4>" ;
        }