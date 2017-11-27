'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const playerEvents = require('./player/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#changePasswordButton').hide()
  $('#signOutButton').hide()
  $('#addPlayerButton').hide()
  $('#getPlayersButton').hide()
  authEvents.addHandlers()
  playerEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
