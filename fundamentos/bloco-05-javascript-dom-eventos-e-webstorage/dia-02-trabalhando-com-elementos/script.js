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
