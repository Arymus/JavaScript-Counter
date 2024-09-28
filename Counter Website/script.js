const increaseButton = document.getElementById("increasebutton");
const decreaseButton = document.getElementById("decreasebutton");
const reset = document.getElementById("reset");
let number = document.getElementById("number");

function getNumber() {
    return parseInt(number.innerText);
};

increaseButton.addEventListener("click", function()  {
    let currentNumber = getNumber();
    currentNumber += 1;
    number.innerText = currentNumber;
});

decreaseButton.addEventListener("click", function()  {
    let currentNumber = getNumber();
    currentNumber -= 1;
    number.innerText = currentNumber;
});

reset.addEventListener("click", function() {
    number.innerText = 0;
});