const validator = {
  isValid: (crediCardNumber) => {
    let crediCarValue = crediCardNumber.value;
    let crediCarArray = crediCarValue.split("");
    // Metodo reverse => para invertir el array
    // https://www.neoguias.com/invertir-array-javascript/
    let crediCarArrayInvert = [...crediCarArray].reverse();
    for (let i = 0; i < crediCarArrayInvert.length; i++) {
      // Metodo de conversion string a number 
      // parseInt or + 
      // https://stackabuse.com/javascript-convert-string-to-number/
      const crediCarInt = +crediCarArrayInvert[i]
      // console.log(crediCarInt);
      if ( crediCarInt % 2 === 0 ) {
          let resultado = crediCarInt * 2
          console.log(resultado);
          if (resultado >= 10) {
            let addDigits = resultado-9
            // console.log(addDigits);
          }
      }
      
      
    } 

    console.log(crediCarArray);
    console.log(crediCarArrayInvert);

    return crediCarValue;
  },
  maskify: (creditCardNumber) => {
    // return console.log(`Holas maskify ${creditCardNumber.value}`);
    return creditCardNumber.value;
  },
};

export default validator;
