// eslint-disable-next-line no-unused-vars
function maskify() {
  const parsed = document.getElementById("cardNumber").value;
  const cortar = parsed.slice(0, -4);
  const reemplazar = cortar.replace(/./g, "#") // (/./g) hace que la expresión sea global (numeros y letras)
  const numsCompletos = reemplazar + parsed.slice(-4);
  document.getElementById("cardNumber").innerHTML = numsCompletos;
}

// Desarrollo del algoritmo 
function isValid() {
  const dividir = "".split(""); // Dividir el num en digitos
  const reversa = dividir.reverse(); // Reversa
  let suma = 0; // Variable para sumar mas adelante
  //console.log("El num se divide " + dividir); // El num se divide 
  //console.log("El numero esta en reversa " + reversa);
  // Loop para doblar cada dos digitos     
  for (let index = 1; index < reversa.length; index += 2) {
    const doblar = Number(reversa[index]) * 2;
    reversa[index] = doblar;
    //console.log("El numero se dobla en el indice: " + index + ":" + reversa[index]);
    // Condicional para separar los digitos si son mayores a 9 y sumarlos
    if (doblar > 9) {
      const sumaMayores = doblar.toString().split("").map(Number).reduce(function (a, b) {
        return a + parseInt(b)
      }, 0);
      suma += sumaMayores;
      //console.log("Suma de num mayores " + suma);
    }
    // Condicional para numeros menores a 9 y sumarlos
    if (doblar < 9) {
      const sumaMenores = doblar.toString().split("").map(Number).reduce(function (a, b) {
        return a + parseInt(b)
      }, 0);
      suma += sumaMenores;
      //console.log("Suma de num menores " + suma)
    }
  }
  if ((suma % 10) === 0) {
    document.getElementById("result").innerHTML = "La tarjeta es válida";
    return true
  }
  else {
    document.getElementById("result").innerHTML = "La tarjeta no es válida. Intente de nuevo";
    return false
  }
}

export {maskify, isValid};