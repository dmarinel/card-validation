const validator = {
  isValid: (crediCardNumber) => {
    let crediCarValue = crediCardNumber.value;
    let crediCarArray = crediCarValue.split("");
    // let sumaImpar, sumaImparDosDigitos, sumaPar, sumaTotal = 0;
    let impares = [];
    let pares = [];
    let sumarImpar = 0;
    let sumarImparDosDigitos = 0;
    let sumarPar = 0;
    let sumaTotal = 0;

    // Metodo reverse => para invertir el array
    // https://www.neoguias.com/invertir-array-javascript/
    let crediCarArrayInvert = [...crediCarArray].reverse();
    // console.log(crediCarArray);
    // console.log(crediCarArrayInvert);
    let nuevo = crediCarArrayInvert.map((i) => Number(i));
    // console.log(nuevo);
    for (let j = 0; j < nuevo.length; j++) {
      if (j % 2 !== 0) {
        impares.push(nuevo[j] * 2);
        // console.log(impares);
      } else {
        pares.push(nuevo[j]);
        // console.log(`Numeros en la posicion par: ${pares}`);
        // console.log(pares);
      }
    }
    //Suma de números ubicados en posiciones impares
    for (let i = 0; i < impares.length; i++) {
      if (impares[i] >= 10) {
        let sumarDigitos = impares[i] - 9;
        sumarImparDosDigitos += sumarDigitos;
        // console.log(`Posicion: ${impares[i]} - ${sumarDigitos}`);
        // console.log(`Suma de numeros 2D tratados: ${sumarImparDosDigitos}`);
      } else {
        sumarImpar += impares[i];
        // console.log(`Posicion: ${impares[i]}`);
        // console.log(`Suma de numeros 1D: ${sumarImpar}`);
      }
    }
    // Suma de digitos posicion par 
    for (let i = 0; i < pares.length; i++) {
      let numeroPosicionPar = pares[i];
      sumarPar += numeroPosicionPar;
      // console.log(`Posicion: ${numeroPosicionPar}`);
      // console.log(`Suma de numeros posicion par: ${sumarPar}`);
    }
    sumaTotal = sumarImpar + sumarImparDosDigitos + sumarPar
    console.log(`Suma total: ${sumaTotal}`);
    // condición ? expr1 : expr2 
    const validarCard = sumaTotal % 10 === 0 ? true :false
    console.log(validarCard);
    return validarCard
  },
  maskify: (creditCardNumber) => {
    // return console.log(`Holas maskify ${creditCardNumber.value}`);
    return creditCardNumber.value;
  },
};

export default validator;
