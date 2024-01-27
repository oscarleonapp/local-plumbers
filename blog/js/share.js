 
// Seleccionamos el botón con id 'btn-compartir' 
const shareButton = document.getElementById("btn-compartir");
 
// Creamos una función que se ejecutará cuando el usuario haga click en el botón
shareButton.addEventListener("click", (event) => {
 
  // Verificamos si el navegador tiene soporte para el API compartir
  if ("share" in navigator) {
    navigator
      .share({
        // Defino un título para la ventana de compartir
        title: "Comparte Esta Página en Tu Plataforma Favorita",
 
        // Detecto la URL actual de la página 
        url:
            window.location.href
      })
 
      // Mensaje en Consola cuando se presiona el botón de compartir 
      .then(() => {
        console.log("Contenido Compartido !");
      })
      .catch(console.error);
  } else {
    // Si el navegador no tiene soporte para la API compartir, le enviamos un mensaje al usuario
    alert('Lo siento, este navegador no tiene soporte para recursos compartidos.')
  }
});
