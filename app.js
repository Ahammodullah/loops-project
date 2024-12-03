var maxNumberInput = document.getElementById("max-number");
var generateButton = document.getElementById("generate-button");
var numberList = document.getElementById("number-list");

generateButton.addEventListener("click", generateNumberList);

function generateNumberList() {
  numberList.innerHTML = "";

  var maxNumber = parseInt(maxNumberInput.value);

  if (isNaN(maxNumber) || maxNumber <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  for (let i = 1; i <= maxNumber; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = `For loop: ${i}`;
    numberList.appendChild(listItem);
  }

  let i = 1;
  while (i <= maxNumber) {
    var listItem = document.createElement("li");
    listItem.textContent = `While loop: ${i}`;
    numberList.appendChild(listItem);
    i++;
  }
}
