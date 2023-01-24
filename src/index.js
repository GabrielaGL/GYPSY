/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import validator from "./validator.js";

document.querySelector("#validTarjeta").addEventListener("click", validateNumber);
console.log(document.querySelector("#validTarjeta").addEventListener("click", validateNumber).value);

const parsed = document.getElementById("cardNumber").value;

function validateNumber() {  
  // Condicional que alerta si es o no es un numero    
  if (isNaN(parsed)) {
    document.getElementById("result").innerHTML = "Solo se admiten numeros en la tarjeta";
	console.log("Entro a la funcion")	
  }
  else if (parseInt(parsed)) {
    validator.isValid(parsed));
		console.log("Entro a la funcion 2")
  }
  else {
    document.getElementById("result").innerHTML = "Inserta un numero válido";
		console.log("Entro a la funcion 3")
  }
  console.log(validateNumber)
}

validate(validator.isValid(parsed));

// Condicional en la que si el residuo de una multiplicacion /10 es cero, es válida
function validate(suma) {
  if ((suma % 10) === 0) {
    document.getElementById("result").innerHTML = "La tarjeta es válida";
  }
  else {
    document.getElementById("result").innerHTML = "La tarjeta no es válida. Intente de nuevo";
  }
}
console.log(validate);