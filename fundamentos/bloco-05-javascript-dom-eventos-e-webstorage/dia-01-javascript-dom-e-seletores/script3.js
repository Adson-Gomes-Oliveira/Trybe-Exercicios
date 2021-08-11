document.getElementsByTagName('p')[0].innerText =
  'Trabalhando em uma empresa de tecnologia'
document.getElementsByClassName('main-content')[0].style.background =
  'rgb(76,164,109)'
document.getElementsByClassName('center-content')[0].style.background = 'white'
document.getElementsByClassName('title')[0].innerText = 'JavaScript'
document.getElementsByTagName('p')[0].style.textTransform = 'uppercase'
let paragraph = document.getElementsByTagName('p')

for (index = 0; index < paragraph.length; index += 1) {
  console.log(paragraph[index])
}
