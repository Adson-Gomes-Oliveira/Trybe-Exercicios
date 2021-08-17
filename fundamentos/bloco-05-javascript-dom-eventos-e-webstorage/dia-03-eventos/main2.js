window.onload = function () {
  createDaysOfTheWeek()
  printDaysOnCalendar()
  holidayButton()
  fridayButton()
  zoomDay()
  tasks()
  taskSubtitle()
}

function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const weekDaysList = document.querySelector('.week-days')

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

function printDaysOnCalendar() {
  const listItem = document.querySelector('#days')
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]

  for (let day of dezDaysList) {
    let numberDay = document.createElement('li')
    numberDay.className = 'day'
    numberDay.innerText = day

    switch (day) {
      case 24:
        numberDay.classList.add('holiday')
        break

      case 25:
        numberDay.classList.add('holiday')
        numberDay.classList.add('friday')
        break

      case 31:
        numberDay.classList.add('holiday')
        break

      case 4:
        numberDay.classList.add('friday')
        break

      case 11:
        numberDay.classList.add('friday')
        break

      case 18:
        numberDay.classList.add('friday')
        break

      default:
        break
    }

    listItem.appendChild(numberDay)
  }
}

function holidayButton() {
  const btnContainer = document.querySelector('.buttons-container')
  let btnHoliday = document.createElement('button')

  btnHoliday.id = 'btn-holiday'
  btnHoliday.innerText = 'Feriados'

  btnHoliday.addEventListener('click', changeColorOfHolidays)

  btnContainer.appendChild(btnHoliday)

  function changeColorOfHolidays() {
    let daysOfCalendar = document.querySelectorAll('.holiday')
    let daysOfCalendarAlt = document.querySelectorAll('.holiday-selected')

    for (let index = 0; index < daysOfCalendar.length; index += 1) {
      daysOfCalendar[index].classList.add('holiday-selected')
    }

    for (let index = 0; index < daysOfCalendarAlt.length; index += 1) {
      daysOfCalendarAlt[index].classList.remove('holiday-selected')
    }
  }
}

function fridayButton() {
  const btnContainer = document.querySelector('.buttons-container')
  let btnFriday = document.createElement('button')

  btnFriday.id = 'btn-friday'
  btnFriday.innerText = 'Sexta-Feira'

  btnFriday.addEventListener('click', changeNameOfFridays)

  btnContainer.appendChild(btnFriday)

  function changeNameOfFridays() {
    let happyHour = document.querySelectorAll('.friday')
    let newText = 'Happy Hour'
    let fridays = [4, 11, 18, 5]

    for (let index = 0; index < happyHour.length; index += 1) {
      if (happyHour[index].innerHTML !== newText) {
        happyHour[index].innerHTML = newText
      } else {
        happyHour[index].innerHTML = fridays[index]
      }
    }
  }
}

function zoomDay() {
  let daysToZoom = document.querySelector('#days')

  daysToZoom.addEventListener('mouseover', zoomText)
  daysToZoom.addEventListener('mouseout', takeOutZoom)

  function zoomText(originEvent) {
    originEvent.target.style.fontSize = '30px'
  }
  function takeOutZoom(originEvent) {
    originEvent.target.style.fontSize = '20px'
  }
}

function tasks() {
  let task = document.createElement('span')
  let taskList = document.querySelector('.my-tasks')

  task.innerText = 'Cozinhar'

  taskList.appendChild(task)
}

function taskSubtitle() {
  let subtitle = document.createElement('div')
  let taskList = document.querySelector('.my-tasks')
  let daysOfCalendar = document.querySelector('#days')
  let subColor = '#008000'
  let clickCount = 0

  subtitle.style.backgroundColor = subColor
  subtitle.className = 'task'

  taskList.appendChild(subtitle)
  subtitle.addEventListener('click', addClass)

  daysOfCalendar.addEventListener('click', atColor)

  function addClass() {
    let remove = document.querySelector('.selected')

    subtitle.classList.add('selected')
    remove.classList.remove('selected')
  }

  function atColor(originEvent) {
    clickCount += 1
    if (clickCount % 2 === 0) {
      originEvent.target.style.backgroundColor = '#EEEEEE'
      originEvent.target.style.color = '#838383'
      return
    }
    originEvent.target.style.backgroundColor = subColor
    originEvent.target.style.color = 'white'
  }
}
// Escreva seu código abaixo.
