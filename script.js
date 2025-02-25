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

//initializing the variables
let initialDisplay = "";
let leftNum = '';
let rightNum = '';
let operator = '';
waitingForSecondOperand = false;

/**operate function carries out the computation */
function operate(){
    if (leftNum === null || operator === '' || initialDisplay === ''){
        return;
    }
    let rightNum = parseFloat(initialDisplay);
    let result;
    switch(operator) {
        case "+":
            result = add(leftNum, rightNum);
            break;
        case "-":
            result = subtract(leftNum, rightNum);
            break;
        case "x":
            result = multiply(leftNum, rightNum);
            break;
        case "/":
            if (rightNum === 0) {
                display.value = "Error"
            }
            result = divide(leftNum, rightNum);
            break;
        default:
            return;
    }
    result = result.toString();
    display.value = result;
    initialDisplay = display.value;
}

function setOperation(op){
    //Do nothing in case there is no input yet
    if (initialDisplay === ''){
        return;
    }
    //calculate the result if an operation is already pending
    if (leftNum !== '') {
        operate()
    }
    //reset the input for the next number
    leftNum = parseFloat(initialDisplay);
    operator = op;
    waitingForSecondOperand = true;
    initialDisplay = '';
}

/**Selecting the display and setting the default value to 0*/
const display = document.querySelector("#screen");
display.value = '0';

function appendToScreen(input){
    initialDisplay += input;
    display.value = initialDisplay;  
}


//Restores the input value to default
function clearCalc() {
    display.value = '0';
    initialDisplay = '';
    operator = '';
    leftNum = '';
    waitingForSecondOperand = false;
}

//deletes the last entered value from the screen
function del(){
    display.value = display.value.substring(0, display.value.length - 1);
    initialDisplay = display.value; 
}

//divides result by 100
function divideBy100() {
    display.value = parseFloat(display.value / 100);
    initialDisplay = display.value;
}

/**The function below handles the decimal point operations */
function decimalPoint() {
    if (!display.value.includes('.')){
        appendToScreen('.')
    }
    else {
        initialDisplay = display.value;
    }
}