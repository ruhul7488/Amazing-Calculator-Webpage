const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        
        if (value) {
            if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput) {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (firstOperand && operator && currentInput) {
        let result;
        const secondOperand = currentInput;
        
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        
        display.value = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
});
