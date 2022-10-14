const plusButtons = document.querySelectorAll(".plus");
const quantitieOfItems = document.querySelectorAll(".x");
const minusButtons = document.querySelectorAll(".minus");
const priceOfItems = document.querySelectorAll(".price");
let sumOfTotal = document.querySelector("#sum");
for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function (e) {
    quantitieOfItems[i].innerHTML++;
    sumOfTotal.innerHTML =
      Number(sumOfTotal.innerHTML) + Number(priceOfItems[i].innerHTML);
  });
}
