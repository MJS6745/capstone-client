'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('onSignUp invoked')
  console.log('Target is', event.target)
  const data = getFormFields(event.target)
  console.log('Data is ', data)
  if (data.credentials.email !== '' && data.credentials.password !== '') {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    ui.signUpFailure()
  }
}

const onSignIn = (event) => {
  event.preventDefault()
  console.log('onSignIn invoked')
  const data = getFormFields(event.target)
  console.log('Target data on sign in is', event.target)
  console.log('Store data before API call is', store.data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp)
  $('#signInForm').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
