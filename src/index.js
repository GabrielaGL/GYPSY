/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { isValid } from "./validator.js";


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

/** Input image changes visa-mastercard */
const cardNumber = document.getElementById("cardNumber");
const bankDiv = document.getElementById('bank');
cardNumber.addEventListener('input', () => {
  bankDiv.style.backgroundImage = 'url()';
  const cardNumberV = cardNumber.value;
  if (cardNumberV.startsWith('4')) {
    bankDiv.style.backgroundImage = 'url(./imgs/visa.png)';
  } else if (cardNumberV.startsWith('5')) {
    bankDiv.style.backgroundImage = 'url(./imgs/mastercard.png)';
  } else {
    bankDiv.style.backgroundImage = 'url()';
  }
})

/** Add slash to exp  */
const expI = document.getElementById('expiracion');
expI.addEventListener('input', () => {
  const expV = expI.value;
  console.log(expV.length);
  if(expV.length === 2) {
    expI.value = expV.slice(0, 2) + '/';
  }
})

/** Show secret cvv */
const cvvI = document.getElementById('cvv');
const cvvButton = document.getElementById('secret');
cvvButton.addEventListener('click', () => {
  if (cvvI.type === 'text') {
    cvvI.type = 'password';
    cvvButton.style.backgroundImage = 'url(./imgs/closed-eye.png)';
  } else {
    cvvI.type = 'text';
    cvvButton.style.backgroundImage = 'url(./imgs/open-eye.png)';
  }
})




document.querySelector("#pago").addEventListener("click", validateNumber);


function validateNumber() {
  const cardNumber = document.getElementById("cardNumber").value;
  const resultDiv = document.getElementById("result");
  const formF = document.getElementById('checkout');
  resultDiv.innerHTML = '';
  if (!formF.checkValidity()) {
    resultDiv.innerHTML = "Es necesario rellenar todos los campos";
    resultDiv.classList.add('vibrate-animation');
  } else if (cardNumber.startsWith('4') || cardNumber.startsWith('5')) {
    if (isValid(cardNumber) === true) {
      window.dialog.showModal();
      formF.reset()
    } else {
      resultDiv.innerHTML = "La tarjeta no es válida. Intente de nuevo";
      resultDiv.classList.add('vibrate-animation');
    }
  } else {
    resultDiv.innerHTML = "Lo sentimos, por el momento solo tenemos pagos disponibles con Visa o Mastercard";
    resultDiv.classList.add('vibrate-animation');
  }
  setTimeout(() => {
    resultDiv.classList.remove('vibrate-animation');
  }, 300);
}


