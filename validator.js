// eslint-disable-next-line no-unused-vars
// Desarrollo del algoritmo 
function isValid(cardNumber) {
  const dividir = cardNumber.split(""); // Dividir el num en digitos
  const reversa = dividir.reverse(); // Reversa
  let suma = 0; // Variable para sumar mas adelante
  // Loop para doblar cada dos digitos     
  for (let index = 1; index < reversa.length; index += 2) {
    const doblar = Number(reversa[index]) * 2;
    reversa[index] = doblar;
    // Condicional para separar los digitos si son mayores a 9 y sumarlos
    if (doblar > 9) {
      const sumaMayores = doblar.toString().split("").map(Number).reduce(function (a, b) {
        return a + parseInt(b)
      }, 0);
      suma += sumaMayores;
    } else if (doblar < 9) { // Condicional para numeros menores a 9 y sumarlos
      const sumaMenores = doblar.toString().split("").map(Number).reduce(function (a, b) {
        return a + parseInt(b)
      }, 0);
      suma += sumaMenores;
    }
  }
  for (let i = 0; i < reversa.length; i += 2) {
    suma += Number(reversa[i]);
  }  
  if (suma % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function maskify(cardNumber) {
  const cortar = cardNumber.slice(0, -4);
  const reemplazar = cortar.replace(/./g, "#"); // (/./g) hace que la expresión sea global (numeros y letras)
  const numsCompletos = reemplazar + cardNumber.slice(-4);
  return numsCompletos;
}

export {isValid, maskify};