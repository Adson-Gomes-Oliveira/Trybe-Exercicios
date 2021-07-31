let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0
let variavel
let maiorNumero = 0

// for (let numeros of numbers) {
//   console.log(numeros)
// }

console.log('------------------------')

for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index]

  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index]
  } else {
  }
}

let media = soma / numbers.length
if (media > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

console.log(soma)
console.log(media)
console.log(maiorNumero)
