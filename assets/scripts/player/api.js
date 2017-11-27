'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui')

const addPlayer = (data) => {
  console.log('API add player invoked')
  console.log('Data being passed into api call is ', data)
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPlayers = () => {
  console.log('getPlayers in API invoked')
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addPlayer,
  getPlayers
}
