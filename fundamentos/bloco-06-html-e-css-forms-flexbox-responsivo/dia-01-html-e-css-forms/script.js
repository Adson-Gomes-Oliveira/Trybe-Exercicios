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

    const getResumeContainer = document.querySelector('#resume-container')
    let subtitleResumeField = document.createElement('h2')

    subtitleResumeField.innerText = '>> Curriculo gerado com base em seus dados <<'
    getResumeContainer.insertAdjacentElement('afterbegin', subtitleResumeField)

    generateResume()
  }
}

function generateResume() {

  getName()
  getEmail()
  getCPF()
  getAdress()
  getState()
  getProfissionalEx()
  previousPosition()
  positionDescription()
  date()

  function getName() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveName = document.querySelector('#name').value

    if (retrieveName.length === 0 || retrieveName.length > 40) {
      alert('Nome invalido')
      return
    }

    createLabel.innerText = 'Nome Completo: '
    createListItem.innerText = retrieveName

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function getEmail() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveEmail = document.querySelector('#email').value

    if (retrieveEmail.length === 0 || retrieveEmail.length > 50) {
      alert('Email invalido')
      return
    }

    if (retrieveEmail.includes('@') == false) {
      alert('Email invalido')
      return
    }

    createLabel.innerText = 'Email: '
    createListItem.innerText = retrieveEmail

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function getCPF() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveCPF = document.querySelector('#cpf').value

    createLabel.innerText = 'CPF: '
    createListItem.innerText = retrieveCPF

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function getAdress() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveAdress = document.querySelector('#adress').value

    createLabel.innerText = 'Endereço: '
    createListItem.innerText = retrieveAdress

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function getState() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveState = document.querySelector('#states').value

    createLabel.innerText = 'Estado em que reside: '
    createListItem.innerText = retrieveState

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function getProfissionalEx() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveResume = document.querySelector('#curriculumResume').value

    createLabel.innerText = 'Resumo Profissional: '
    createListItem.innerText = retrieveResume

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function previousPosition() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrievePosition = document.querySelector('#position').value

    if (retrievePosition.length === 0 || retrievePosition.length > 40) {
      alert('Posição invalida')
      return
    }

    createLabel.innerText = 'Ultimo cargo ocupado: '
    createListItem.innerText = retrievePosition

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function positionDescription() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveDescription = document.querySelector('#desc-position').value

    createLabel.innerText = 'Descrição do cargo: '
    createListItem.innerText = retrieveDescription

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }

  function date() {
    const getResume = document.querySelector('#resume')
    let createListItem = document.createElement('li')
    let createLabel = document.createElement('strong')
    const retrieveDate = document.querySelector('#date').value

    createLabel.innerText = 'Data de inicio no cargo: '
    createListItem.innerText = retrieveDate

    createListItem.insertAdjacentElement('afterbegin', createLabel)
    getResume.appendChild(createListItem)
  }
}
