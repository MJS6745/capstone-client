'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const editPlayer = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Edit player form data is ', data)
  api.editPlayer(data)
    .then(ui.editPlayerSuccess)
    // New code for updating list of players
    .then($('#editPlayersMessageModal').on('hidden.bs.modal', updatePlayerList))
    .catch(ui.editPlayerFailure)
}

const addPlayer = (event) => {
  console.log('addPlayer event invoked')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Target data is ', data)
  api.addPlayer(data)
    .then(ui.addPlayerSuccess)
    .catch(ui.addPlayerFailure)
}

const addSearchPlayer = (event) => {
  console.log('addSearchPlayer event invoked')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Target data is ', data)
  api.addPlayer(data)
    .then(ui.addSearchPlayerSuccess)
    .catch(ui.addSearchPlayerFailure)
}

const updatePlayerList = () => {
  api.getPlayers()
    .then(ui.updateListSuccess)
}

const getPlayers = (event) => {
  console.log('Get players event invoked')
  event.preventDefault()
  console.log('Target is', event.target)
  api.getPlayers()
    .then(ui.getPlayersSuccess)
    .catch(ui.getPlayersFailure)
}

const deletePlayer = (event) => {
  console.log('Delete player event invoked')
  event.preventDefault()
  console.log('Target is', event.target)
  const data = getFormFields(event.target)
  const modalName = '#deletePlayerModal' + data.player.id
  api.deletePlayer(data)
    .then($(modalName).modal('hide').on('hidden.bs.modal', ui.clearPlayers))
    .then(ui.deletePlayerSuccess)
    // New code for updating list of players
    .then($('#deletePlayerMessageModal').on('hidden.bs.modal', updatePlayerList))
    .catch(ui.deletePlayerFailure)
}

const addHandlers = () => {
  $('#addPlayerForm').on('submit', addPlayer)
  // New code for adding player from search results
  // $('#addPlayerSearchForm').on('submit', addPlayer)
  $('#search-results').on('submit', '.addPlayerSearchForm', addSearchPlayer)
  $('#getPlayersForm').on('submit', getPlayers)
  $('#playerlist').on('submit', '.editPlayerForm', editPlayer)
  $('#playerlist').on('submit', '.deletePlayerForm', deletePlayer)
}

module.exports = {
  addHandlers
}
