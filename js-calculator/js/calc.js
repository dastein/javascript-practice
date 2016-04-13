/* Strings for the expression before and after the operator to hold the value so we can display 0 after the operator is clicked. */
var expressionBefore = '';
var expressionAfter = '';

var operator = '';
var result = 0.0;

/* Appends the number clicked onto the expressionBefore string if no operator was clicked, expressionAfter if so. */
function AppendVal(val) {
    if (operator == '') {
        expressionBefore += val;
        document.getElementById('textbox').value = expressionBefore;
    } else {
        expressionAfter += val;
        document.getElementById('textbox').value = expressionAfter;
    }
}

/* Appends the operator clicked into the operator var. */
function AppendOperator(x) {
    operator += x;
    document.getElementById('textbox').value = '0';
}

/* Build the final expression and calculate the result */
function Calculate() {
    expressionBefore = parseFloat(expressionBefore);
    expressionAfter = parseFloat(expressionAfter);
    if (operator == '+') {
        result = expressionBefore + expressionAfter;
        document.getElementById('textbox').value = result;
        operator = '';
        expressionBefore = result;
        expressionAfter = '';
        return;
    } else if (operator == '-') {
        result = expressionBefore - expressionAfter;
        document.getElementById('textbox').value = result;
        operator = '';
        expressionBefore = result;
        expressionAfter = '';
        return;
    } else if (operator == '*') {
        result = expressionBefore * expressionAfter;
        document.getElementById('textbox').value = result;
        operator = '';
        expressionBefore = result;
        expressionAfter = '';
        return;
    } else if (operator == '/') {
        result = expressionBefore / expressionAfter;
        document.getElementById('textbox').value = result;
        operator = '';
        expressionBefore = result;
        expressionAfter = '';
        return;
    }
}

/* Clears the textbox and all variables */
function Clear() {
    expressionBefore = '';
    expressionAfter = '';
    operator = '';
    result = 0.0;
    document.getElementById('textbox').value = '0';
}