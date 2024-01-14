let currentInput = '0';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (!isNaN(buttonValue) || buttonValue === '.') {
        appendToInput(buttonValue);
    } else if (buttonValue === 'C') {
        clearDisplay();
    } else if (buttonValue === '=') {
        calculate();
    } else {
        appendToInput(' ' + buttonValue + ' ');
    }
}

function appendToInput(value) {
    currentInput += value;
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}
