/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { isValid, maskify } from "./validator.js";

document.querySelector("#pago").addEventListener("click", validateNumber);

/* Selector changes background og gift card */
const optionCard = document.getElementById('bgCard');
optionCard.addEventListener('change', (event) => {
  document.getElementById('bgGiftCard').src = "./imgs/" + event.target.value + ".svg"
})


function validateNumber() {
  const cardNumber = document.getElementById("cardNumber").value;
  // Condicional que alerta si es o no es un numero    
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