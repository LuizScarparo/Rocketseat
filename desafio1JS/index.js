
function sum(number1, number2) {
    return number1 + number2
}
function minus(number1, number2) {
    return number1 - number2
}
function multiplication(number1, number2) {
    return number1 * number2
}
function divided(number1, number2) {
    return number1 / number2
}
function rest(number1, number2) {
    return number1 % number2 
}
function oddEven() {
    if(sumResult % 2 === 0){
        return 'par'
    }
    else {
        return 'impar'
    }
}
function same(number1, number2) {
    if (number1 == number2) {
        return 'iguais'
    }
    else {
        return 'diferentes'
    }
}

let number1 = Number(prompt('Insira um número'))
let number2 = Number(prompt('Insira um segundo número'))

const sumResult = sum(number1, number2)
const minusResult = minus(number1, number2)
const multiplicationResult = multiplication(number1, number2)
const dividedResult = divided(number1, number2)
const restResult = rest(number1, number2)
const oddEvenResult = oddEven(number1, number2)
const sameResult = same(number1, number2)

console.log(`A soma dos dois números é ${sumResult}`)
console.log(`A subtração dos dois números é ${minusResult}`)
console.log(`A multiplicação dos dois números é ${multiplicationResult}`)
console.log(`A divisão dos dois números é ${dividedResult}`)
console.log(`O resto dos dois números é ${restResult}`)
console.log(`O resultado da soma dos números é ${oddEvenResult}`)
console.log(`Os números são ${sameResult}`)
