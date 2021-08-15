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
