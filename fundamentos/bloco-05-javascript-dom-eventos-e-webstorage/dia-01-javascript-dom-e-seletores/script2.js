document.querySelector('#header-container').style.background = '#00B069'
document.querySelector('#footer-container').style.background = '#003533'
document.querySelectorAll('.emergency-tasks')[0].style.background = '#FF9F84'
document.querySelectorAll('.no-emergency-tasks')[0].style.background = '#F9DB5E'
let subtitlesColorPurple = document.querySelectorAll('.emergency-tasks h3')
let subtitlesColorBlack = document.querySelectorAll('.no-emergency-tasks h3')

for (index = 0; index < subtitlesColorPurple.length; index += 1) {
  subtitlesColorPurple[index].style.background = '#A500F3'
}

for (index = 0; index < subtitlesColorBlack.length; index += 1) {
  subtitlesColorBlack[index].style.background = '#232525'
}
