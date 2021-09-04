// Variables
const billInput = document.querySelector("#bill-input");
const tipInput = document.getElementsByName("tip-percent");
const numberOfPeopleInput = document.querySelector("#number-of-people-input");
const tipOutput = document.querySelector("#tip-amount-per-person span");
const tipCustomInput = document.querySelector("#tip input[type='number']");
const totalOutput = document.querySelector("#total-per-person span");
const resetBtn = document.querySelector("#btn");

// Event Listeners
resetBtn.addEventListener("click", reset);
numberOfPeopleInput.addEventListener("keyup", notZero);
billInput.addEventListener("keyup", showingOutput);
tipCustomInput.addEventListener("keyup", customTipInput);
tipInput.forEach((element) => {
  element.addEventListener("click", showingOutput);
});

// Functions
function showingOutput() {
  if (Number(numberOfPeopleInput.value) > 0) {
    outputCalculator();
  }
}

function customTipInput() {
  tipInput.forEach((element) => {
    if (element.checked) {
      element.checked = false;
    }
  });

  showingOutput();
}

function outputCalculator() {
  let tipInPercent = Number(tipCustomInput.value);
  tipInput.forEach((element) => {
    if (element.checked) {
      tipInPercent = Number(element.value);
    }
  });
  let tipInAmount = (Number(billInput.value) / 100) * tipInPercent;
  let tipAmountPerPerson = tipInAmount / numberOfPeopleInput.value;
  let totalAmountWithTip = tipInAmount + Number(billInput.value);
  let totalAmountPerPerson = totalAmountWithTip / numberOfPeopleInput.value;
  tipOutput.innerText = tipAmountPerPerson.toFixed(3);
  totalOutput.innerText = totalAmountPerPerson.toFixed(3);
}

function reset() {
  location.reload();
}

function notZero() {
  if (Number(numberOfPeopleInput.value) < 0) {
    document.querySelector("#cannot-be-zero").style.display = "none";
    document.querySelector("#cannot-be-negative").style.display = "block";
    numberOfPeopleInput.style.borderColor = "red";
  } else if (Number(numberOfPeopleInput.value) === 0) {
    document.querySelector("#cannot-be-negative").style.display = "none";
    document.querySelector("#cannot-be-zero").style.display = "block";
    numberOfPeopleInput.style.borderColor = "red";
  } else if (Number(numberOfPeopleInput.value) > 0) {
    document.querySelector("#cannot-be-negative").style.display = "none";
    document.querySelector("#cannot-be-zero").style.display = "none";
    numberOfPeopleInput.style.borderColor = "#26c2ad";
    showingOutput();
  }
}
