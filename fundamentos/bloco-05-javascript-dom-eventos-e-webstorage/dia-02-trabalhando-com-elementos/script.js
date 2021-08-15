// PRIMEIRA ETAPA DOS EXERCICIOS
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red'
document.querySelector('#primeiroFilhoDoFilho').innerText =
  'Be careful, cyber security is essential for the web users'
console.log(document.querySelector('#pai').firstElementChild)
console.log(
  document.querySelector('#elementoOndeVoceEsta').previousElementSibling
)
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling)
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling)
console.log(
  document.querySelector('#pai').lastElementChild.previousElementSibling
)

// SEGUNDA ETAPA DOS EXERCICIOS
let brotherSection = document.createElement('section')
let childOfSection = document.createElement('div')
let childOfSection01 = document.createElement('div')
document.querySelector('#pai').appendChild(brotherSection)
document.querySelector('#elementoOndeVoceEsta').appendChild(childOfSection)
document
  .querySelector('#primeiroFilhoDoFilho')
  .appendChild(childOfSection01)
  .classList.add('bisnetoDoPai')
console.log(
  document.querySelector('.bisnetoDoPai').parentNode.parentNode
    .nextElementSibling
)
