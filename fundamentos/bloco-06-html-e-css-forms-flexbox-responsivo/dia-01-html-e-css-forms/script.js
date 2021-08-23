window.onload = function () {
  createStatesToForm()
  verifyDate()
  submitBtnPrevent()
}

function createStatesToForm() {
  let statesOfBrazil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  let selectState = document.querySelector('#states')

  for (let index = 0; index < statesOfBrazil.length; index += 1) {
    let state = document.createElement('option')

    state.value = statesOfBrazil[index]
    state.innerText = statesOfBrazil[index]

    selectState.appendChild(state)

  }

}

function verifyDate() {
  let dateToVerify = document.querySelector('#date').value


  let verifyDay = dateToVerify[0] + '' + dateToVerify[1]
  let verifyMonth = dateToVerify[3] + '' + dateToVerify[4]
  let verifyYear = dateToVerify[6] + '' + dateToVerify[7] + '' + dateToVerify[8] + '' + dateToVerify[9]

  if (verifyDay < 0 || verifyDay > 31) {
    alert('Dia invalido, selecione um intervalo entre 1 - 31')
  }
  if (verifyMonth < 0 || verifyMonth > 12) {
    alert('Mês invalido, selecione um intervalo entre 1 - 31')
  }
  if (verifyYear < 0) {
    alert('Ano invalido, ano negativo não aceito')
  }

}

function submitBtnPrevent() {
  const submitButton = document.querySelector('#submit-button')

  submitButton.addEventListener('click', prevent)

  function prevent(originEvent) {
    originEvent.preventDefault()
  }
}

