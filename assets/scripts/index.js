'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const playerEvents = require('./player/events')
const footdataApi = require('./footdata/api')
const footdataUi = require('./footdata/ui')

// Function to call the 3rd party API for league standings info
// Function needs to be called when application initially loads so it is
// housed here
const getStandings = () => {
  footdataApi.getStandings()
    .then(footdataUi.getStandingsSuccess)
    .catch(footdataUi.getStandingsFailure)
}

$(() => {
  setAPIOrigin(location, config)
  // BE SURE TO uncomment this before going live as it is needed to get the league standings info
  // getStandings()
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
