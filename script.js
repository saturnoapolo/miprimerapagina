document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
// selecciona el botón del pie de página por su identificador "button-footer"
var buttonFooter = document.getElementById("button-footer");

// agrega un manejador de eventos "click" al botón del pie de página
buttonFooter.addEventListener("click", function() {
  // muestra una alerta cuando se hace clic en el botón del pie de página
  alert("Has hecho clic en el botón del pie de página.");
});


