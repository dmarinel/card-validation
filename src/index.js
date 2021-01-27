import validator from "./validator.js";

const inicio = document.getElementById("inicio");
const formNuevoUsuario = document.getElementById("formNuevoUsuario");
const formulario = document.getElementById("formulario");
const btnInicio = document.getElementById("btnInicio");
const btnNuevoUsuario1 = document.getElementById("btnNuevoUsuario1");
const btnNuevoUsuario2 = document.getElementById("btnNuevoUsuario2");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnAsociarTarjeta = document.getElementById("btnAsociarTarjeta");

// Entras para nuevo usuario
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

const ingresarTarjeta = document.getElementById("ingresarTarjeta");

const revisarEntradasNuevoUsuario = () => {
  // Quitar espacios
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password1Value = password1.value.trim();

  if (nombreValue === "") {
    generarErrorPara(nombre, "No puede dejar el campo nombre vacío");
  } else {
    exitosoPara(nombre);
  }

  if (emailValue === "") {
    generarErrorPara(email, "No puede dejar el campo correo vacío");
  } else if (!isEmail(emailValue)) {
    generarErrorPara(emailValue, "El correo que ingreso no es válido");
  } else {
    exitosoPara(email);
  }

  if (passwordValue === "") {
    generarErrorPara(password, "No puede dejar el campo password vacío");
  } else {
    exitosoPara(password);
  }
  if (password1Value === "") {
    generarErrorPara(
      password1,
      "No puede dejar el campo confirmar password vacío"
    );
  } else if (passwordValue !== password1Value) {
    generarErrorPara(password1Value, "Las contraseñas no coinciden");
  } else {
    exitosoPara(password1);
  }
};

const generarErrorPara = (entrada, mensaje) => {
  const formularioControl = entrada.parentElement
  const small = formularioControl.querySelector('small')
  formularioControl.className = 'contenedor__formulario-input error'
  small.innertText = mensaje
};

const exitosoPara = (entrada) => {
  const formularioControl = entrada.parentElement
  formularioControl.className = 'contenedor__formulario-input correcto'
};

const isEmail = (email) => {
  return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
};

const pantallaInicio = () => {
  inicio.classList.replace("off", "on");
  formulario.classList.replace("on", "off");
  formNuevoUsuario.classList.replace("on", "off");
};

const pantallaCrearUsuario = () => {
  inicio.classList.replace("on", "off");
  formNuevoUsuario.classList.replace("off", "on");
};

const formularioNuevoUsuario = (e) => {
  console.log(`Estoy a punto de explotar `);
  console.log(e);
  e.preventDefault();
  revisarEntradasNuevoUsuario();

  // formNuevoUsuario.classList.replace("on", "off");
  // formulario.classList.replace("off", "on");
};

const formularioValidacionTarjeta = () => {
  console.log(`Ir a pantalla emergente`);
};
 

btnNuevoUsuario1.addEventListener("click", pantallaCrearUsuario);
btnNuevoUsuario2.addEventListener("click", pantallaCrearUsuario);
btnInicio.addEventListener("click", pantallaInicio);
formNuevoUsuario.addEventListener('submit', formularioNuevoUsuario)
btnAsociarTarjeta.addEventListener("click", formularioValidacionTarjeta);

