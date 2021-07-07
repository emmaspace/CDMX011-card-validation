import validator from './validator.js';

let cardInput = document.getElementById("cardInput");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    let cardNumber = cardInput.value;
    let validationResult = validator.isValid(cardNumber);
    let maskedNumber = validator.maskify(cardNumber);
    resultMessage(validationResult, maskedNumber);
});

function resultMessage(validationResult, maskedNumber) {
    if (validationResult == true) {
        alert("Tu tarjeta "+maskedNumber+" es válida");
    } else {
        alert("Tu tarjeta "+maskedNumber+" es inválida");
    }
}

//button.addEventListener("click", function (event) { event.preventDefault });

/*
//Otro intentillo
cardInput.addEventListener("keyup", updateVariable);

function updateVariable() {
    cardNumber = cardInput.value;
}
*/

//cardInput.addEventListener("input", maskify);




/*
document.getElementById("botoncito").addEventListener("click", function () {
    const tarjetita = document.getElementById("cardNumber").value;
    const result = validator.isValid(tarjetita) // solo mandamos valores y esperamos respuestas
    console.log(result) //usamos las respuesta
})
*/