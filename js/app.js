const amount1 = document.getElementById("amount1");
const amount2 = document.getElementById("amount2");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const reset = document.getElementById("reset");
const highestB = document.getElementById("highestB");
const historyDiv = document.querySelector(".history");

let bids = JSON.parse(localStorage.getItem("bids")) || [];

updateUI();

//allow user to input their bet and update in storage and display their total
b1.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = b1.querySelector("input");
  const value = Number(input.value);
  if (!isNaN(value) && value > 0) {
    const newBid = { bidder: "Bidder 1", amount: value };
    bids.push(newBid);
    localStorage.setItem("bids", JSON.stringify(bids));
    input.value = "";
    updateUI();
  } else {
    alert("Please enter a valid number greater than 0");
  }
});

//allow user to input their bet and update in storage and display their total
b2.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = b2.querySelector("input");
  const value = Number(input.value);

  if (!isNaN(value) && value > 0) {
    const newBid = { bidder: "Bidder 2", amount: value };
    bids.push(newBid);
    localStorage.setItem("bids", JSON.stringify(bids));
    input.value = "";
    updateUI();
  } else {
    alert("Please enter a valid number greater than 0");
  }
});

reset.addEventListener("click", () => {
  bids = [];
  localStorage.removeItem("bids");
  b1.querySelector("input").value = "";
  b2.querySelector("input").value = "";
  updateUI();
});

function updateUI() {
  const total1 = bids
    .filter((b) => b.bidder === "Bidder 1")
    .reduce((sum, b) => sum + b.amount, 0);
  const total2 = bids
    .filter((b) => b.bidder === "Bidder 2")
    .reduce((sum, b) => sum + b.amount, 0);

  amount1.innerText = total1;
  amount2.innerText = total2;
  if (total1 > total2) {
    highestB.innerText = "Bidder 1 - $" + total1;
    highestB.style.color = "blue";
  } else if (total2 > total1) {
    highestB.innerText = "Bidder 2 - $" + total2;
    highestB.style.color = "blue";
  } else if (total1 === 0 && total2 === 0) {
    highestB.innerText = "No bids placed";
    highestB.style.color = "white";
  } else {
    highestB.innerText = "Tie! ($" + total1 + ")";
    highestB.style.color = "white";
  }
}
