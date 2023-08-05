/** Luhn algorithm */
export const isValid = (cardNumber) => {
  const dividir = cardNumber.split("");
  const reversa = dividir.reverse();
  let suma = 0;

  for (let index = 1; index < reversa.length; index += 2) {
    const doblar = Number(reversa[index]) * 2;
    reversa[index] = doblar;

    if (doblar > 9) {
      const sumaMayores = doblar.toString().split("").map(Number).reduce(function (a, b) {
        return a + parseInt(b)
      }, 0);
      suma += sumaMayores;
    } else if (doblar < 9) {
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