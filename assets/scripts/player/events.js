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
  api.addPlayer(data)
    .then(ui.addPlayerSuccess)
    .catch(ui.addPlayerFailure)
}

const getPlayers = (event) => {
  console.log('Get players event invoked')
  event.preventDefault()
  console.log('Target is', event.target)
  api.getPlayers()
    .then(ui.getPlayersSuccess)
    .catch(ui.getPlayersFailure)
}

const addHandlers = () => {
  $('#addPlayerForm').on('submit', addPlayer)
  $('#getPlayersForm').on('submit', getPlayers)
}

module.exports = {
  addHandlers
}
