// aqui tendran la logica
const validator = {
  isValid: function(cardNumber) {
    
    let reversedCardNumberArray = Array.from(cardNumber).reverse();
    
    //Cambiar de strings a números
    for (let i = 0; i < reversedCardNumberArray.length; i++) {
      reversedCardNumberArray[i] = parseInt(reversedCardNumberArray[i]);
    }
    
    //Hacer la misma operación en cada número par del arreglo
    for (let i = 1; i < reversedCardNumberArray.length; i += 2) {
      reversedCardNumberArray[i] *= 2;

      //Checar si el resultado es de más de un dígito (o sea mayor que nueve) y sumar los dígitos
      if (reversedCardNumberArray[i] > 9) {

        let twoDigitNumberArray = reversedCardNumberArray[i].toString().split("");
        
        //Pasar los números a dígitos
        for (let i = 0; i < twoDigitNumberArray.length; i++) {
          twoDigitNumberArray[i] = parseInt(twoDigitNumberArray[i]);
        }
        //Sumar los dígitos
        //.reduce usa una función anónima en su primer argumento que va a aplicar a cada elemento del arreglo y en el segundo argumento va el número de donde comienza
        reversedCardNumberArray[i] = twoDigitNumberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      }
    }
  
    //Suma de todos los dígitos
    let digitsSum = reversedCardNumberArray.reduce((a, c) => a + c);
    
    //Checar si la suma de los dígitos termina en 0
    let lastDigit = digitsSum.toString().slice(-1);

    //Checar que el primer dígito (el de la posición 0) sea 0
    return lastDigit == 0 ? true : false;
  },
  
  maskify: function(cardNumber) {
    //Convertir de string a arreglo
    let cardNumberArray = Array.from(cardNumber);

    //Esconder los primeros números
    for (let i = 0; i < cardNumberArray.length - 4; i++) {
      cardNumberArray[i] = "#";
    }

    // Cambiar de arreglo a variable de nuevo
    let maskedCardNumber = cardNumberArray.join("");
    return maskedCardNumber;
  }
}


/*
const validator = {
  "isValid": function (tarjetadecredito) {
    const arreglito = Array.from(tarjetadecredito)
    console.log(arreglito)
    return `Que onda recibí ${tarjetadecredito}.... ¿que se arma?¿que show?`
  },
  "maskify": function () {
    return "algo"
  }
}
*/

export default validator;
