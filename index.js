import validator from "./validator.js";

// DOM metodo getElementById
const ingresarTarjeta = document.getElementById("ingresarTarjeta"); 
const formulario = document.getElementById("formulario");

// Funcion Ingresar Numero de Tarjeta
function numeroTarjeta(evento) {
  evento.preventDefault();
  let cardValue = ingresarTarjeta.value
  // Prueba de Funcionamiento al realizar clic en el botón
  // console.log(`Asociando Tarjeta`);
  // Obteniendo valor del input
  // 

  //  Validar tarjeta
  console.log(validator.isValid(cardValue));

// Enmascarar Caracteres
  console.log(`Funcion maskfi`);
  
  console.log(validator.maskify(cardValue));
  
}

formulario.onsubmit = numeroTarjeta;


