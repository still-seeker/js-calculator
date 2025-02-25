/**The basic arithmetic calculation functions */
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

/**operate function carries out the computation */
const operate = function(leftNum, rightNum, operator){
    let output;
    switch(operator) {
        case "+":
            output = add(leftNum, rightNum);
        case "-":
            output = subtract(leftNum, rightNum);
        case "*":
            output = multiply(leftNum, rightNum);
        case "/":
            if (rightNum === 0) {
                output = "Error"
            }
            output = divide(leftNum, rightNum);
    }
}

//initializing the variables
let initialDisplay = "";
let leftNum = '';
let rightNum = '';
let operator = '';


/**Selecting the display and setting the default value to 0*/
const display = document.querySelector(".screen");
display.value = '0';

function appendToScreen(input){
    initialDisplay += input;
    display.value = initialDisplay;  
}

//Restores the input value to default
function clearCalc() {
    display.value = '0';
    initialDisplay = '';
}

//deletes the last entered value from the screen
function del(){
    display.value = display.value.substring(0, display.value.length - 1);
    initialDisplay = display.value; 
}

//divides input by 100
function divideBy100() {
    display.value = parseFloat(display.value / 100);
    initialDisplay = display.value;
}