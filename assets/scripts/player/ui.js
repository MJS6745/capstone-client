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

module.exports = {
  addPlayerSuccess,
  addPlayerFailure,
  getPlayersSuccess,
  getPlayersFailure
}
