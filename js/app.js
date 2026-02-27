const amount1 = document.getElementById("amount1");
const amount2 = document.getElementById("amount2");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const reset = document.getElementById("reset");
const highestB = document.getElementById("highestB");

b1.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = b1.querySelector("input");
  const value = Number(input.value);

  if (!isNaN(value) && input.value.trim() !== "") {
    let b1Value = value + JSON.parse(localStorage.getItem("b1Value"));
    localStorage.setItem("b1Value", JSON.stringify(b1Value));
    amount1.innerText = b1Value;
    input.value = "";
  } else {
    alert("Please enter a valid number");
  }
});

b2.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = b2.querySelector("input");
  const value = Number(input.value);

  if (!isNaN(value) && input.value.trim() !== "") {
    let b2Value = value + JSON.parse(localStorage.getItem("b2Value"));
    localStorage.setItem("b2Value", JSON.stringify(b2Value));
    amount2.innerText = b2Value;
    input.value = "";
  } else {
    alert("Please enter a valid number");
  }
});
