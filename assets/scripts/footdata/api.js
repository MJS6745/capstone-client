'use strict'

const ui = require('./ui')

const getStandings = () => {
  // console.log('Get standings API invoked')
  // This is a free, public API with no sensitive data. Thus, this token
  // will not be hidden in code
  const token = '49272f6236284aee99353cc125b5a69a'
  return $.ajax({
    url: 'http://api.football-data.org/v1/competitions/445/leagueTable',
    method: 'GET',
    headers: {
      'X-Auth-Token': token
    }
  })
}

const getPlayerList = (data) => {
  // console.log('getPlayerList API invoked')
  // This is a free, public API with no sensitive data. Thus, this token
  // will not be hidden in code
  const token = '49272f6236284aee99353cc125b5a69a'
  return $.ajax({
    url: 'http://api.football-data.org/v1/teams/' + data.team.id + '/players',
    method: 'GET',
    headers: {
      'X-Auth-Token': token
    }
  })
}

module.exports = {
  getStandings,
  getPlayerList
}
