

/**The basic arithmetic calculation functions */
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


const equals = document.querySelector(".equals");
//equals.addEventListener("click", operate);
const operate = function(num1, num2, operator){
    let output;
    switch(operator) {
        case "+":
            output = add(num1, num2);
        case "-":
            output = subtract(num1, num2);
        case "*":
            output = multiply(num1, num2);
        case "/":
            if (num2 === 0) {
                output = "Error"
            }
            output = divide(num1, num2);
    }
}

/**Selecting the display and setting the default value to 0*/
const display = document.querySelector(".screen");
display.value = '0';
let initialDisplay = "";

function appendToScreen(input){
    initialDisplay += input;
    display.value = initialDisplay;  
}

//Restores the input value to default
function clearCalc() {
    display.value = '0';
    initialDisplay = '';

}

function del(){
    display.value = display.value.substring(0, display.value.length - 1);
    initialDisplay = display.value;
    
}