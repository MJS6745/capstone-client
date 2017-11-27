'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addPlayer = (event) => {
  console.log('addPlayer event invoked')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Target data is ', data)
}

const addHandlers = () => {
  $('#addPlayerForm').on('submit', addPlayer)
}

module.exports = {
  addHandlers
}
