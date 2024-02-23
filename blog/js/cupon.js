$(document).ready(function () {
  // Mostrar modal al hacer clic en el botón
  $("#mostrar-cupon").click(function () {
    $("#cupon-modal").fadeIn();
  });

  // Cerrar modal al hacer clic en la "X"
  $(".close").click(function () {
    $("#cupon-modal").fadeOut();
  });

  // Contador de tiempo atrás
  var countdown = 600; // segundos
  var timerDisplay = $("#timer");

  function updateTimer() {
    var minutes = Math.floor(countdown / 60);
    var seconds = countdown % 60;

    timerDisplay.text(minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

    if (countdown <= 0) {
      // Aquí puedes ejecutar alguna acción cuando el tiempo expire
      $("#cupon-modal").fadeOut();
    } else {
      countdown--;
      setTimeout(updateTimer, 1000);
    }
  }

  // Acción al tomar el cupón
  $("#tomar-cupon").click(function () {
    // Redirige a la URL deseada
    window.location.href = "https://tu-URL-deseada.com";
  });
});
