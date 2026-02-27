const amount1 = document.getElementById("amount1");
const amount2 = document.getElementById("amount2");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const reset = document.getElementById("reset");
const highestB = document.getElementById("highestB");

let b1Value = JSON.parse(localStorage.getItem("b1Value")) || 0;
amount1.innerText = b1Value;
let b2Value = JSON.parse(localStorage.getItem("b2Value")) || 0;
amount2.innerText = b2Value;

highestBet();

//allow user to input their bet and update in storage and display their total
b1.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = b1.querySelector("input");
  const value = Number(input.value);

  if (!isNaN(value) && input.value.trim() !== "") {
    b1Value = value + JSON.parse(localStorage.getItem("b1Value"));
    localStorage.setItem("b1Value", JSON.stringify(b1Value));
    amount1.innerText = b1Value;
    input.value = "";
  } else {
    alert("Please enter a valid number");
  }
  highestBet();
});

//allow user to input their bet and update in storage and display their total
b2.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = b2.querySelector("input");
  const value = Number(input.value);

  if (!isNaN(value) && input.value.trim() !== "") {
    b2Value = value + JSON.parse(localStorage.getItem("b2Value"));
    localStorage.setItem("b2Value", JSON.stringify(b2Value));
    amount2.innerText = b2Value;
    input.value = "";
  } else {
    alert("Please enter a valid number");
  }
  highestBet();
});

reset.addEventListener("click", () => {
  b2Value = 0;
  localStorage.setItem("b2Value", JSON.stringify(b2Value));
  amount2.innerText = b2Value;
  b1Value = 0;
  localStorage.setItem("b1Value", JSON.stringify(b1Value));
  amount1.innerText = b1Value;
  highestBet();
});

function highestBet() {
  if (b1Value > b2Value) {
    highestB.innerText = "Bidder1";
    highestB.style.color = "blue";
  } else if (b2Value > b1Value) {
    highestB.innerText = "bidder2";
    highestB.style.color = "blue";
  } else if (b2Value === 0 && b1Value === 0) {
    highestB.innerText = "No bids placed";
    highestB.style.color = "red";
  } else {
    highestB.innerText = "tie!";
    highestB.style.color = "grey";
  }
}
