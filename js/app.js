const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const resultBtn = document.getElementById('resultBtn')
const resultText = document.getElementById('resultText')

let sign = '+'


function printResult(result) {
    if (result > 0) {
        resultText.style.color = 'green'
    } else {
        resultText.style.color = 'red'
    }
    resultText.textContent = result
}

plusBtn.onclick = function () {
    sign = '+'
}

minusBtn.onclick = function () {
    sign = '-'
}

function sum(number1, number2, symbol) {
    const num1 = Number(number1.value)
    const num2 = Number(number2.value)
    // if (sign == '+') {
    //     return num1 + num2
    // }
    // else {
    //     return num1 - num2
    // }
    return symbol == '+' ? num1 + num2 : num1 - num2
}

resultBtn.onclick = function () {
    const result = sum(element1, element2, sign)
    printResult(result)
}