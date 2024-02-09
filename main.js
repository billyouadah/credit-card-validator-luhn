console.log("mains.js loaded");

function checkCardNumber(event) {
  event.preventDefault();
  let result = 0;
  let cardNumber = document.getElementById("cardNumber").value;
  // your code here

  let arrayCardNumber = cardNumber.split("");

  let withoutlast = arrayCardNumber.pop();

  let revarrayCardNumber = arrayCardNumber.reverse();

  //let arrayindexpair = [];
  //console.log(arrayindexpair);

  for (let i = 0; i < revarrayCardNumber.length; i++) {
    if (i % 2 === 0) {
      revarrayCardNumber[i] = revarrayCardNumber[i] * 2;
    }
    if (revarrayCardNumber[i] > 9) {
      revarrayCardNumber[i] = revarrayCardNumber[i] - 9;
    }
    result += parseInt(revarrayCardNumber[i]);
  }
  console.log(result);

  result = result + parseInt(withoutlast);

 
  if (result % 10 === 0) {
    alert("carte valide");
  } else {
    alert("carte invalide");
  }
}
