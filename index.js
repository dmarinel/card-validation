import validator from "./validator.js";

const contenedorInicio = document.getElementById("contenedorInicio");
const formNuevoUsuario = document.getElementById("formNuevoUsuario");
const formularioTarjeta = document.getElementById("formularioTarjeta");
const btnNuevoUsuario2 = document.getElementById("btnNuevoUsuario2");
const numeroTarjeta = document.getElementById("numeroTarjeta");

const fechaVencimiento = document.getElementById("fechaVencimiento");
const codSeguridad = document.getElementById("codSeguridad");
const mostrarTarjeta = document.getElementById("mostrarTarjeta");
const modal = document.getElementById("modal");
// const btnCerrarModal = document.getElementById("btnCerrarModal")

// Entras para nuevo usuario

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

const validarFormularioTarjeta = () => {
  console.log("Estoy validando los datos");
  const numeroTarjetaValue = numeroTarjeta.value.trim();
  const codSeguridadValue = codSeguridad.value.trim();
  console.log(codSeguridadValue);

  let numeroTarjetaValido =
    numeroTarjetaValue === ""
      ? generarError(numeroTarjeta, "No puede dejar el campo en blanco")
      : isNaN(+numeroTarjetaValue)
      ? generarError(numeroTarjeta, "Solo se acepta valores numéricos")
      : numeroTarjetaValue.length < 16
      ? generarError(
          numeroTarjeta,
          "Su número de tarjeta debe tener 16 caracteres"
        )
      : validator.isValid(numeroTarjetaValue) === false
      ? generarError(numeroTarjeta, "Tu número de tarjeta no es válido")
      : datoCorrecto(numeroTarjeta);

  let codSeguridadValido =
    codSeguridadValue === ""
      ? generarError(codSeguridad, "No puede dejar el campo en blanco")
      : codSeguridadValue.length < 3
      ? generarError(
          codSeguridad,
          "El codigo de seguridad debe tener 3 caracteres"
        )
      : isNaN(+codSeguridadValue)
      ? generarError(numeroTarjeta, "Solo se acepta valores numéricos")
      : datoCorrecto(codSeguridad);
  let datosCorrectos = numeroTarjetaValido && codSeguridadValido ? true : false;

  return datosCorrectos;
};

const datoCorrecto = (input) => {
  // console.log(`Informacion correcta`);
  input.className = "contenedor__formulario-input textoin correcto";
  const small = input.nextElementSibling;
  small.classList.add("hidden__small");
  small.classList.remove("visible__small");
  return true;
};

const generarError = (input, msg) => {
  // console.log(`Este es un error`);
  const small = input.nextElementSibling;
  small.classList.remove("hidden__small");
  small.classList.add("visible__small");
  input.className = "contenedor__formulario-input textoin error";
  small.textContent = msg;
  return false;
};

const validarFormularioUsuario = () => {
  const nombreValue = nombre.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password1Value = password1.value.trim();
  // console.log(nombreValue,emailValue,passwordValue,password1Value);

  let nombreValido =
    nombreValue === ""
      ? generarError(nombre, "No puede dejar el campo en blanco")
      : datoCorrecto(nombre);
  // console.log(`nombre: ${nombreValido}`);
  let emailValido =
    emailValue === ""
      ? generarError(email, "No puede dejar el campo en blanco")
      : datoCorrecto(email);
  // console.log(`correo: ${emailValido}`);

  let passwordValido =
    passwordValue === ""
      ? generarError(password, "No puede dejar el campo en blanco")
      : datoCorrecto(password);
  // console.log(`password: ${passwordValido}`);

  let password1Valido =
    password1Value === ""
      ? generarError(password1, "No puede dejar el campo en blanco")
      : password1Value !== passwordValue
      ? generarError(password1, "Las contraseñas no coinciden ")
      : datoCorrecto(password1);
  // console.log(`password1: ${password1Valido}`);

  let datosCorrectos =
    nombreValido && emailValido && passwordValido && password1Valido
      ? true
      : false;

  // console.log(datosCorrectos);
  return datosCorrectos;
};

formularioTarjeta.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`Click en asociar tarjeta`);
  let rpta = validarFormularioTarjeta();
  let encriptar = validator.maskify(numeroTarjeta.value);
  if (rpta === true) {

    modal.innerHTML = `
    <div class="modal__contenedor" id="modalContenedor">
    <a href="#" id="btnCerrarModal" class="btnCerrar">x</a>
    <figure>
      <img src="./img/icons8-checked-100.png " width="70" alt="" />
    </figure>
    <h3 id="mostrarTarjeta">La tarjeta N°: ${encriptar}</h3>
    <p>Se asocio correctamente</p>
    <p>Gracias por ser parte de PayPata</p>
  </div>   
    `;
  }

  modal.classList.add("activarModal");
  // Limpiar Formulario
  numeroTarjeta.value = "";
  fechaVencimiento.value = "";
  codSeguridad.value = "";
});

formNuevoUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  let rpta = validarFormularioUsuario();
  // console.log(rpta);

  if (rpta === true) {
    formNuevoUsuario.classList.replace("on", "off");
    formularioTarjeta.classList.replace("off", "on");
    // Limpiar formulario
    nombre.value = "";
    email.value = "";
    password.value = "";
    password1.value = "";
  }
});

btnNuevoUsuario2.addEventListener("click", () => {
  contenedorInicio.classList.replace("on", "off");
  formNuevoUsuario.classList.replace("off", "on");
});

// btnCerrarModal.addEventListener('click', (e) =>{
//     e.preventDefault()
//       let cerrarModal = modal.classList.remove("activarModal")
//       contenedorInicio.classList.replace("off", "on")
    
//     console.log(cerrarModal);

//   })