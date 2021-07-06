const validator = {
  //Algoritmo de Luhn
  isValid: function (cardNumber) {
    
    let reversedCardNumberArray = Array.from(cardNumber).reverse()
          .map((i) => i = parseInt(i));
    
    //Multiplicar cada número en posición par por dos
    let twoDigitNumberArray = [];
    for (let i = 1; i < reversedCardNumberArray.length; i += 2) {

      reversedCardNumberArray[i] *= 2;

      //Si el elemento tiene más de un dígito, sumar los dígitos
      if (reversedCardNumberArray[i] > 9) {

        twoDigitNumberArray = reversedCardNumberArray[i].toString()
             .split("").map((i) => i = parseInt(i));
        
        reversedCardNumberArray[i] = twoDigitNumberArray
              .reduce((accumulator, currentValue) =>
                      accumulator + currentValue, 0);
      }
    }
  
    let cardDigitsSum = reversedCardNumberArray.reduce((a, c) => a + c);
    
    let lastDigit = cardDigitsSum.toString().slice(-1);

    return lastDigit == 0 ? true : false;
  },
  
  maskify: function(cardNumber) {

    let cardNumberArray = Array.from(cardNumber);

    //Esconder los dígitos menos los últimos cuatro
    for (let i = 0; i < cardNumberArray.length - 4; i++) {
      cardNumberArray[i] = "#";
    }

    let maskedCardNumber = cardNumberArray.join("");

    return maskedCardNumber;
  }
}

export default validator;
