/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { isValid, maskify } from "./validator.js";

document.querySelector("#pago").addEventListener("click", validateNumber);


function validateNumber() {
  const cardNumber = document.getElementById("cardNumber").value;
  // Condicional que alerta si es o no es un numero    
  if (isNaN(cardNumber) || cardNumber.length < 1 ) {
    document.getElementById("result").innerHTML = "Ingresa un numero de tarjeta válido";
    console.log("Entro a la funcion");
  } else {
      if (isValid(cardNumber) === true) {
      console.log("entro al final")
      document.getElementById("result").innerHTML = "La tarjeta " + maskify(cardNumber) + " es válida";
    } else {
      document.getElementById("result").innerHTML = "La tarjeta no es válida. Intente de nuevo";
    }
  }
}


// Probablemente colapsa por tantos if; simplifica en codigo



// maskify(parsed)
// console.log("Los numeros son " + maskify)
// isValid();