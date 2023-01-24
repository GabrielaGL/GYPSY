/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import isValid from "./validator.js";

document.querySelector("#validTarjeta").addEventListener("click", validateNumber);
console.log(document.querySelector("#validTarjeta").addEventListener("click", validateNumber).value);

function validateNumber() {
  const parsed = document.getElementById("cardNumber").value;
  // Condicional que alerta si es o no es un numero    
  if (isNaN(parsed)) {
    document.getElementById("result").innerHTML = "Solo se admiten numeros en la tarjeta";
	console.log("Entro a la funcion")	
  }
  else if (parseInt(parsed)) {
    isValid(parsed);
		console.log("Entro a la funcion 2")
  }
  else {
    document.getElementById("result").innerHTML = "Inserta un numero válido";
		console.log("Entro a la funcion 3")
  }
  console.log(validateNumber)
}