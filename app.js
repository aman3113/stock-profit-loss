var initialPrice = document.querySelector("#initial-price");
var currentPrice = document.querySelector("#current-price");
var stockQuantity = document.querySelector("#stock-quantity");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var initial = Number(initialPrice.value);
  var current = Number(currentPrice.value);
  var qty = Number(stockQuantity.value);

  pnlCalculator(initial, qty, current);
}

function pnlCalculator(initial, qty, current) {
  if (initial > current) {
    var loss = (initial - current) * qty;
    var lossPercentage = (loss / (initial * qty)) * 100;
    outputDiv.innerText = `You have a loss of ${loss} Rs.
        
        Your loss percentage is ${lossPercentage}%`;
    outputDiv.style.color = "Red";
  } else if (initial === current) {
    outputDiv.innerText = `You neither made a profit or loss`;
  } else {
    var profit = (current - initial) * qty;
    var profitPercentage = (profit / (initial * qty)) * 100;
    outputDiv.innerText = `You have a profit of ${profit} Rs.
        
        Your profit percentage is ${profitPercentage}%`;
    outputDiv.style.color = "Green";
  }
}
