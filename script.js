function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = document.getElementById('display').value.replace('^', '**');
    try {
        const result = eval(expression);
        clearDisplay();
        appendToDisplay(result);
    } catch (error) {
        clearDisplay();
        appendToDisplay('Ошибка');
    }
}

function calculateFactorial() {
    const number = parseInt(document.getElementById('display').value);
    if (isNaN(number)) {
        clearDisplay();
        appendToDisplay('Ошибка');
        return;
    }
    const result = factorial(number);
    clearDisplay();
    appendToDisplay(result);
}

function factorial(n) {
    if (n < 0) return 'Ошибка';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
