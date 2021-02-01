const validator = {
  isValid: (crediCardNumber) => {
    // Declaracion de variables
    let crediCarArray = crediCardNumber.split("");
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
    sumaTotal = sumarImpar + sumarImparDosDigitos + sumarPar;
    // console.log(`Suma total: ${sumaTotal}`);
    // condición ? expr1 : expr2
    const validarCard = sumaTotal % 10 === 0 ? true : false;
    // console.log(validarCard);
    return validarCard;
  },

  maskify: (creditCardNumber) => {
    const creditArray = creditCardNumber.split("");
    const newArrayFirst = []
  
    // console.log(creditArray);
    // Dividiendo  array en dos partes 
    const arrayFirst = creditArray.slice(0, -4);
    // console.log(arrayFirst);
    const arraySecond = creditArray.slice(-4);
    // console.log(arraySecond);
    // Enmascarar  el primer array 
    for (let i = 0; i < arrayFirst.length; i++) {
       newArrayFirst.push('#')
      //  console.log(newArrayFirst);
    }
    const newArrayCredit = newArrayFirst.concat(arraySecond)
    let arrayToString = newArrayCredit.join('')
    
    // console.log(arrayToString);

    return arrayToString;
  },
};

export default validator;
