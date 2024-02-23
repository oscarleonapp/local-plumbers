$(document).ready(function () {
  // Ocultar el modal al cargar la página
  $("#cupon-modal, #segundo-modal").hide();

  // Mostrar modal al hacer clic en el botón
  $("#mostrar-cupon").click(function () {
    // Puedes establecer la fecha deseada en el siguiente formato: "YYYY-MM-DD HH:mm:ss"
    var fechaDeseada = "2024-03-01 00:00:00";

    // Calcular la diferencia en milisegundos entre la fecha actual y la fecha deseada
    var diferencia = new Date(fechaDeseada).getTime() - new Date().getTime();

    // Mostrar el modal con el tiempo actualizado
    mostrarModal(diferencia);
  });

  // Cerrar modal al hacer clic en la "X"
  $(".close").click(function () {
    $("#cupon-modal, #segundo-modal").fadeOut();
  });

  // Función para mostrar el modal con el contador actualizado
  function mostrarModal(tiempoInicial) {
    // Mostrar el modal
    $("#cupon-modal").fadeIn();

    // Contador de tiempo atrás
    var countdown = tiempoInicial; // milisegundos
    var timerDisplay = $("#timer");

    function updateTimer() {
      var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((countdown % (1000 * 60)) / 1000);

      timerDisplay.text(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s"
      );

      if (countdown <= 0) {
        // Aquí puedes ejecutar alguna acción cuando el tiempo expire
        $("#cupon-modal").fadeOut();
      } else {
        countdown -= 1000;
        setTimeout(updateTimer, 1000);
      }
    }

    // Iniciar el contador de tiempo atrás
    updateTimer();

    // Acción al tomar el cupón
    $("#tomar-cupon").click(function () {
      // Cerrar el primer modal
      $("#cupon-modal").fadeOut();

      // Mostrar el segundo modal con el enlace
      $("#segundo-modal").fadeIn();
    });

    // Cerrar el segundo modal al hacer clic en la "X"
    $("#segundo-modal .close").click(function () {
      $("#segundo-modal").fadeOut();
    });
  }
});
