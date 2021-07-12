import validator from './validator.js';

const cardInput = document.getElementById("cardInput");
const button = document.getElementById("button");
const cardForm = document.getElementById("cardForm");
const validCard = document.getElementById("validCard");
const invalidCard = document.getElementById("invalidCard");
const validMaskedCardNumber = document.getElementById("validMaskedCardNumber");
const invalidMaskedCardNumber = document.getElementById("invalidMaskedCardNumber");
const validCardNewVerification = document.getElementById("validCardNewVerification");
const invalidCardNewVerification = document.getElementById("invalidCardNewVerification");

let cardNumberArray = [];
let cardNumber = "";

//Guardar la info del input mientras en usuario la escribe
cardInput.addEventListener("keydown", saveInputInfo);

let typedKey = "";
let typedKeyCode = "";
function saveInputInfo(event){
    typedKey = event.key;
    typedKeyCode = event.keyCode;
    if(typedKey == "Backspace"){
        if (cardInput.getSelection) {
            console.log("Hay texto seleccionado");
            cardNumberArray.pop(cardNumberArray[cardNumberArray.length - 1]);
        } else {
            cardNumberArray.pop(cardNumberArray[cardNumberArray.length - 1]);
        }
    }else if((57 >= typedKeyCode) && ( typedKeyCode>= 48)){
        cardNumberArray.push(typedKey); 
    }else {
        //console.log("Por favor sólo ingresa números");
    }
}

//Enmascarar el número mientras es escrito
cardInput.addEventListener("keyup", mask);

let toMask = "";
let masked = "";
let maskedNumberWithSpaces = "";
function mask() {
    toMask = cardNumberArray.join("");
    masked = validator.maskify(toMask);
    if (cardNumberArray.length > 12) {
        maskedNumberWithSpaces = masked.substring(0, 4) + " "
                                + masked.substring(4, 8) + " "
                                + masked.substring(8, 12) + " "
                                + masked.substring(12, masked.length);
        cardInput.value = maskedNumberWithSpaces;
    } else if (cardNumberArray.length > 8) {
        maskedNumberWithSpaces = masked.substring(0, 4) + " "
                                + masked.substring(4, 8) + " "
                                + masked.substring(8, masked.length);
        cardInput.value = maskedNumberWithSpaces;
    } else if (cardNumberArray.length > 4) {
        maskedNumberWithSpaces = masked.substring(0, 4) + " "
                                    + masked.substring(4, masked.length);
        cardInput.value = maskedNumberWithSpaces;
    } else {
        cardInput.value = cardNumberArray.join("");
    }
}


//Correr validación y dar resultado
cardForm.addEventListener("submit", (e) => e.preventDefault());
button.addEventListener("click", function () {
    cardNumber = cardNumberArray.join("");
    let validationResult = validator.isValid(cardNumber);
    let maskedNumber = validator.maskify(cardNumber);
    resultMessage(validationResult, maskedNumber);
});

function resultMessage(validationResult, maskedNumber) {
    if (validationResult == true) {
        cardForm.classList.toggle("visible");
        cardForm.classList.toggle("invisible");
        validCard.classList.toggle("visible");
        validCard.classList.toggle("invisible");
        validMaskedCardNumber.innerHTML = maskedNumber;
    } else {
        cardForm.classList.toggle("visible");
        cardForm.classList.toggle("invisible");
        invalidCard.classList.toggle("visible");
        invalidCard.classList.toggle("invisible");
        invalidMaskedCardNumber.innerHTML = maskedNumber;
    }
}

//Nueva verificación
validCardNewVerification.addEventListener("click", newVerification);
invalidCardNewVerification.addEventListener("click", newVerification);

function newVerification() {
    console.log(cardNumber);
    if (validator.isValid(cardNumber) == true) {
        cardForm.classList.toggle("visible");
        cardForm.classList.toggle("invisible");
        validCard.classList.toggle("visible");
        validCard.classList.toggle("invisible");
    } else {
        cardForm.classList.toggle("visible");
        cardForm.classList.toggle("invisible");
        invalidCard.classList.toggle("visible");
        invalidCard.classList.toggle("invisible");
    }
    cardNumberArray = [""];
    cardInput.value = "";
}

//button.addEventListener("click", function (event) { event.preventDefault });

//return firstArray.slice(0, -4).replace(/./g, '#') + firstArray.slice(-4);