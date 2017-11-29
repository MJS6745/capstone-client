'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const getTeamInfo = (event) => {
  event.preventDefault()
  // console.log('Event target is', event.target)
  const data = getFormFields(event.target)
  // console.log('Data is', data)
  api.getPlayerList(data)
    .then(ui.getPlayerSuccess)
    .catch(ui.getPlayerFailure)
}

const addHandlers = () => {
  // $('#teamlink').on('click', getTeamInfo)
  $('#player-search-form').on('submit', getTeamInfo)
}

module.exports = {
  addHandlers
}
