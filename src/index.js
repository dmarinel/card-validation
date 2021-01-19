import validator from "./validator.js";

// DOM metodo getElementById
const $ingresarTarjeta = document.getElementById("ingresarTarjeta");
const $formulario = document.getElementById("formulario");

// Funcion Ingresar Numero de Tarjeta
function numeroTarjeta(evento) {
  evento.preventDefault();
  // Prueba de Funcionamiento al realizar clic en el botón
  console.log(`Asociando Tarjeta`);
  // Obteniendo valor del input
  console.log(typeof $ingresarTarjeta.value);
  // pruebas

  console.log(`Funcion validar card `);
  const data = validator.isValid($ingresarTarjeta);
  console.log(data);
  console.log($ingresarTarjeta.value);
  console.log(`Funcion maskfi`);
  console.log(validator.maskify($ingresarTarjeta));
}

$formulario.onsubmit = numeroTarjeta;

//
