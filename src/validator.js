// eslint-disable-next-line no-unused-vars
// Desarrollo del algoritmo 
function isValid(numeroDeTarjeta) {
  const dividir = numeroDeTarjeta.split(""); // Dividir el num en digitos
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
    }
    // Condicional para numeros menores a 9 y sumarlos
    if (doblar < 9) {
      const sumaMenores = doblar.toString().split("").map(Number).reduce(function (a, b) {
        return a + parseInt(b)
      }, 0);
      suma += sumaMenores;
    }
  }
  // Sumar numeros que no fueron doblados
  for (let i = 0; i < reversa.length; i += 2) {
    suma += parseInt(reversa[i]);
  }
  return suma;
}

export default isValid;