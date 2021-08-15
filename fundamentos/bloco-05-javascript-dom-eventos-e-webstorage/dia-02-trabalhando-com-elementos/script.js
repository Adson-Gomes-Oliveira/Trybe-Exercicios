document.querySelector('#elementoOndeVoceEsta').parentNode.style.background =
  'green'
document.querySelector('#primeiroFilhoDoFilho').innerText =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, blanditiis eveniet! Nobis possimus dolore vero modi nihil rerum, voluptates odit hic corrupti aut cum velit excepturi reprehenderit? Nobis, laudantium animi?'
console.log(document.querySelector('#pai').firstElementChild)
console.log(
  document.querySelector('#elementoOndeVoceEsta').previousElementSibling
)
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling)
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling)
console.log(
  document.querySelector('#pai').firstElementChild.nextElementSibling
    .nextElementSibling
)

let createElement01 = document.querySelector('#pai')
let createElement02 = document.querySelector('#elementoOndeVoceEsta')
let createElement03 = document.querySelector('#primeiroFilhoDoFilho')
let element01 = document.createElement('p')
let element02 = document.createElement('p')
let element03 = document.createElement('p')

element01.innerText = 'CRIADO ELEMENTO PARA O ID PAI'
element01.style.color = 'white'
createElement01.appendChild(element01)

element02.innerText = 'CRIADO ELEMENTO PARA O ID elementoOndeVoceEsta'
element02.style.color = 'white'
createElement02.appendChild(element02)

element03.innerText = 'CRIADO ELEMENTO PARA O ID primeiroFilhoDoFilho'
element03.style.color = 'white'
createElement03.appendChild(element03)

let removeAll = document.querySelector('#paiDoPai')
removeAll.removeChild('#terceiroFIlho')
removeAll.removeChild('#quartoEUltimoFilho')
removeAll.removeChild('#segundoEUltimoFilhoDoFilho')
