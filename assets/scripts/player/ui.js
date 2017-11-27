'use strict'

const store = require('../store')
const events = require('./events')

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

module.exports = {
  addPlayerSuccess,
  addPlayerFailure
}
