/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { isValid, maskify } from "./validator.js";

document.querySelector("#pago").addEventListener("click", validateNumber);

/* Selector changes background of gift card */
const optionCard = document.getElementById('bgCard');
optionCard.addEventListener('change', (event) => {
  document.getElementById('bgGiftCard').src = "./imgs/" + event.target.value + ".png"
})

/* Input For changes the card */
const nameForI = document.getElementById('nameForI')
nameForI.addEventListener('input', () => {
  document.getElementById('nameFor').innerText = 'Para: ' + nameForI.value;
});

/* Input By changes the card */
const nameByI = document.getElementById('nameByI');
nameByI.addEventListener('input', () => {
  document.getElementById('nameBy').innerText = 'De: ' + nameByI.value;
});

/* Selector Amount changes the card */
const amountI = document.getElementById('amountI');
amountI.addEventListener('change', (event) => {
  document.getElementById('amount').innerHTML = "Válido por $" + event.target.value
})

/* Input Message changes the card */
const messageI = document.getElementById('messageI');
messageI.addEventListener('input', () => {
  document.getElementById('message').innerText = messageI.value;
});

/**   */
const expiracion = document.getElementById('expiracion');
expiracion.addEventListener('input', () => {
  const inputValue = expiracion.value;
  let formattedValue = '';

  for (let i = 0; i < inputValue.length; i++) {
    if (i === 2) {
      formattedValue += '/' + inputValue[i];
    } else {
      formattedValue += inputValue[i];
    }
  }

  expiracion.value = formattedValue;
});

/** Show secret cvv */
const cvvI = document.getElementById('cvv');
const cvvButton = document.getElementById('secret');
cvvButton.addEventListener('click', () => {
  if(cvvI.type === 'text') {
    cvvI.type = 'password'; 
    cvvButton.style.backgroundImage = 'url(./imgs/closed-eye.png)';
  } else {
    cvvI.type = 'text';
    cvvButton.style.backgroundImage = 'url(./imgs/open-eye.png)';

  }
})


function validateNumber() {
  const cardNumber = document.getElementById("cardNumber").value;
  if (isNaN(cardNumber) || cardNumber.length < 1) {
    document.getElementById("result").innerHTML = "Ingresa un numero de tarjeta válido";
  } else {
    if (isValid(cardNumber) === true) {
      document.getElementById("result").innerHTML = "La tarjeta " + maskify(cardNumber) + " es válida";
    } else {
      document.getElementById("result").innerHTML = "La tarjeta no es válida. Intente de nuevo";
    }
  }
}