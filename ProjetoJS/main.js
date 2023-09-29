alert('Hello World!')



let variavel1 = 5
let variavel2 = 10

let soma = variavel1 + variavel2

alert(soma)



let variaveis = [1, 'alo', 2, 'numero']
  
  for(let i = 0; i < variaveis.length; i++) {
    if(typeof(variaveis[i]) == 'number') {
      alert('é um numero')
    } else {
      alert('não é numero')
    }
}



let variaveisString = [1, 'alo', 2, 'numero']
  
  for(let i = 0; i < variaveis.length; i++) {
    if(typeof(variaveis[i]) == 'string') {
      alert('é uma string')
    } else {
      alert('não é uma string')
    }
}



let variaveisBooleana = [false, 'alo', 2, 'numero', true]
  
  for(let i = 0; i < variaveis.length; i++) {
    if(typeof(variaveis[i]) == 'boolean') {
      alert('é booleano')
    } else {
      alert('não é booleano')
    }
}



let variavel3 = 5
let variavel4 = 10

let sub = variavel3 - variavel4

alert(sub)




let variavel5 = 5
let variavel6 = 10

let multiplica = variavel5 * variavel6

alert(multiplica)



let variavel7 = 5
let variavel8 = 10

let div = variavel8 - variavel7

alert(div)


function parImpar(numero1) {
  if(numero1%2 == 0) {
    resultado = 'é par'
  } else {
    resultado = 'é impar'
  }
  return resultado;
}

console.log(parImpar(2))