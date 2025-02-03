// To get the Display Value in the Script
function displayValue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}

// To clear the Display Value
function clearDisplay() {
    document.getElementById("display").value = "";
}

// To Erase the Value one by one
function eraseValue() {
    const display = document.getElementById("display");
    let currentDisplayValue = display.value;
    display.value = currentDisplayValue.slice(0, -1); 
  }

// To Calculate the Values
function calculate() {
    var userInput = document.getElementById("display").value;   
    var result = eval(userInput);
    document.getElementById("display").value = result;
}

// To Calculate the Percentage Value
function percentageValue() {
    const display = document.getElementById("display");
    const displayValue = document.getElementById("display").value;
    display.value = (displayValue/100)
}