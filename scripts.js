let numberOne = prompt("digite o primeiro número")
let numberTwo = prompt("digite o segundo número")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restodiv = numberOne % numberTwo

alert('Soma:' + sum)
alert('Subtração:' + sub)
alert('Multiplicação:' + mult)
alert('Divisão:' + div)
alert('Resto:' + restodiv)

if (sum % 2==0) {
    alert('A soma dos números é par!')
}
else {
    alert('A soma dos números é impar!')
}


if (numberOne == numberTwo) {
    alert('Os números inseridos são iguais')
}
else {
    alert('Os números inseridos são diferentes')
}