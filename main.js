let currentInput = "";
let lastInput = "";
let operation = null;
let resultDisplayed = false;

function updateDisplay() {
  document.getElementById("output").innerText = currentInput || "0";
  document.querySelector(".last-calc").innerText = lastInput;
}

function clearEntry() {
  currentInput = "";
  updateDisplay();
}

function clearAll() {
  currentInput = "";
  lastInput = "";
  operation = null;
  updateDisplay();
}

function add(value) {
  if (resultDisplayed) {
    currentInput = value;
    resultDisplayed = false;
  } else {
    currentInput += value;
  }
  lastInput += value;
  updateDisplay();
}

function selectOperation(op) {
  if (currentInput === "" && lastInput === "") return;
  if (currentInput === "") {
    operation = op;
    lastInput = lastInput.slice(0, -1) + op;
  } else {
    if (operation !== null) {
      calculate(false);
    }
    operation = op;
    lastInput += op;
    currentInput = "";
  }
  updateDisplay();
}

function calculate(showResult = true) {
  if (currentInput === "" || operation === null) return;

  let expression = lastInput;
  let result;
  try {
    result = eval(expression.replace(/%/g, "/100"));
  } catch (error) {
    result = "Erro";
  }

  currentInput = result.toString();
  operation = null;
  resultDisplayed = showResult;
  

  updateDisplay();
}

function toggleSign() {
  if (currentInput === "") return;
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}
