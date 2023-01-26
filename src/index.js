/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import {maskify, isValid} from "./validator.js";

// const maskin = document.querySelector("#maskin");
// maskin.addEventListener("click", maskify());
document.querySelector("#pago").addEventListener("click", validateNumber);

function validateNumber() {
  const parsed = document.getElementById("cardNumber").value;
  // Condicional que alerta si es o no es un numero    
  if (isNaN(parsed)) {
    document.getElementById("result").innerHTML = "Solo se admiten numeros en la tarjeta";
    console.log("Entro a la funcion");
  }
  else if (parsed.length < 1) {
    document.getElementById("result").innerHTML = "Ingresa un numero válido";
  }
  else {
    console.log("Entro a la tercera parte " + parseInt(parsed));
    isValid();
  }  
}

// maskify(parsed)
// console.log("Los numeros son " + maskify)
// isValid();