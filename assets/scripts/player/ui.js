'use strict'

const store = require('../store')
const events = require('./events')
const showPlayersTemplate = require('../templates/players.handlebars')

const addPlayerSuccess = (data) => {
  console.log('Add player success invoked. Data is', data)
  $('#addPlayerModal').modal('hide')
  document.getElementById('addPlayerForm').reset()
  $('#addPlayerMessage').text('Player successfully added')
  $('#addPlayerMessageModal').modal('show')
}

const addPlayerFailure = (error) => {
  console.log('Add player failure. Error is', error)
  $('#addPlayerModal').modal('hide')
  document.getElementById('addPlayerForm').reset()
  $('#addPlayerMessage').text('Oops! There was an error')
  $('#addPlayerMessageModal').modal('show')
}

const getPlayersSuccess = (data) => {
  console.log('Get player success invoked. Data is', data)
  $('#getPlayersModal').modal('hide')
  $('#playerlist').empty()
  const showPlayersHtml = showPlayersTemplate({ players: data.players })
  console.log('Show player html is', showPlayersHtml)
  $('#playerlist').append(showPlayersHtml)
}

const getPlayersFailure = (error) => {
  console.log('Get player failure. Error is', error)
  $('#getPlayersModal').modal('hide')
  $('#getPlayersMessageModal').modal('show')
}

const editPlayerSuccess = (data) => {
  console.log('editPlayerSuccess invoked. Data is', data)
  const modalName = '#editPlayerModal' + data.player.id
  $(modalName).modal('hide').on('hidden.bs.modal', clearPlayers)
  $('#editPlayersMessageModal').modal('show')
}

const editPlayerFailure = (error) => {
  console.log('Edit player failure. Error is', error)
  $('#editPlayersMessageTitle').text('Oops! There was an error')
  $('#editPlayersMessageBody').text('Please try again later')
  $('#editPlayersMessageModal').modal('show')
}

const deletePlayerSuccess = (data) => {
  console.log('deletePlayerSuccess invoked. Data is', data)
  $('#deletePlayerMessageModal').modal('show')
}

const deletePlayerFailure = (error) => {
  console.log('Delete player failure. Error is', error)
  $('#deletePlayerMessageTitle').text('Oops! There was an error')
  $('#deletePlayerMessageBody').text('Please try again later')
  $('#deletePlayerMessageModal').modal('show')
}

const clearPlayers = () => {
  $('#playerlist').empty()
}

module.exports = {
  addPlayerSuccess,
  addPlayerFailure,
  getPlayersSuccess,
  getPlayersFailure,
  editPlayerSuccess,
  editPlayerFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  clearPlayers
}
